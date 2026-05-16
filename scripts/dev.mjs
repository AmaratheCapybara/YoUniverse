#!/usr/bin/env node
import { spawn, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import net from 'node:net';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const backendDir = path.join(rootDir, 'backend');
const frontendDir = path.join(rootDir, 'YUFrontend');
const isWindows = process.platform === 'win32';

let backendProcess;
let frontendProcess;

function fail(message) {
	console.error(`Error: ${message}`);
	process.exit(1);
}

function readEnv(filePath) {
	if (!fs.existsSync(filePath)) return {};

	const env = {};
	const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
	for (const line of lines) {
		const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
		if (!match) continue;

		let value = match[2].trim();
		if (
			(value.startsWith('"') && value.endsWith('"')) ||
			(value.startsWith("'") && value.endsWith("'"))
		) {
			value = value.slice(1, -1);
		}

		env[match[1]] = value;
	}

	return env;
}

function hasEnvValue(filePath, key) {
	const env = readEnv(filePath);
	return Boolean(env[key]);
}

function appendEnvValue(filePath, key, value) {
	const existing = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
	const prefix = existing.endsWith('\n') || existing.length === 0 ? '' : '\n';
	fs.appendFileSync(filePath, `${prefix}${key}=${value}\n`);
}

function run(command, args, options = {}) {
	const result = spawnSync(command, args, {
		cwd: options.cwd ?? rootDir,
		stdio: 'inherit',
		shell: isWindows
	});

	if (result.status !== 0) {
		process.exit(result.status ?? 1);
	}
}

function commandExists(command) {
	const checkCommand = isWindows ? 'where' : 'command';
	const checkArgs = isWindows ? [command] : ['-v', command];
	const result = spawnSync(checkCommand, checkArgs, {
		stdio: 'ignore',
		shell: !isWindows
	});

	return result.status === 0;
}

function ensureYarn() {
	if (commandExists('yarn')) return;
	if (!commandExists('corepack')) {
		fail('Yarn is required. Install Node.js with Corepack, then try again.');
	}

	console.log('Enabling Yarn through Corepack...');
	run('corepack', ['enable']);
}

function ensureNodeModules(projectDir, installCommand, installArgs) {
	if (fs.existsSync(path.join(projectDir, 'node_modules'))) return;

	console.log(`Installing dependencies in ${path.relative(rootDir, projectDir)}...`);
	run(installCommand, installArgs, { cwd: projectDir });
}

function checkPort(port) {
	return new Promise((resolve) => {
		const server = net.createServer();
		server.once('error', () => resolve(false));
		server.once('listening', () => {
			server.close(() => resolve(true));
		});
		server.listen(Number(port), '127.0.0.1');
	});
}

function start(command, args, cwd) {
	const child = spawn(command, args, {
		cwd,
		stdio: 'inherit',
		shell: isWindows,
		env: process.env
	});

	child.once('exit', (code, signal) => {
		if (code !== null && code !== 0) {
			console.error(`${command} exited with code ${code}.`);
		} else if (signal) {
			console.error(`${command} stopped with signal ${signal}.`);
		}
	});

	return child;
}

function stopChild(child) {
	if (!child || child.killed) return;

	if (isWindows) {
		spawnSync('taskkill', ['/pid', String(child.pid), '/t', '/f'], {
			stdio: 'ignore'
		});
		return;
	}

	child.kill('SIGTERM');
}

function cleanup() {
	stopChild(backendProcess);
	stopChild(frontendProcess);
}

process.on('SIGINT', () => {
	cleanup();
	process.exit(0);
});
process.on('SIGTERM', () => {
	cleanup();
	process.exit(0);
});
process.on('exit', cleanup);

if (!commandExists('node')) fail('Node.js is required.');
if (!commandExists('npm')) fail('npm is required.');
ensureYarn();

const backendEnvPath = path.join(backendDir, '.env');
const backendSamplePath = path.join(backendDir, '.env.sample');
if (!fs.existsSync(backendEnvPath)) {
	fs.copyFileSync(backendSamplePath, backendEnvPath);
	console.log('Created backend/.env from backend/.env.sample.');
	console.log('Add your Neon DB value to backend/.env, then run npm run dev again.');
	process.exit(1);
}

if (
	!hasEnvValue(backendEnvPath, 'DB') &&
	!hasEnvValue(backendEnvPath, 'DATABASE_URL') &&
	!hasEnvValue(backendEnvPath, 'DATABASE_URI')
) {
	console.log('backend/.env needs one database URL before the backend can start.');
	console.log('Set DB to your Neon pooled connection string, then run npm run dev again.');
	process.exit(1);
}

const backendEnv = readEnv(backendEnvPath);
const backendPort = process.env.PORT || backendEnv.PORT || '3000';
const frontendPort = process.env.FRONTEND_PORT || '5173';

const frontendEnvPath = path.join(frontendDir, '.env');
const frontendSamplePath = path.join(frontendDir, '.env.example');
if (!fs.existsSync(frontendEnvPath)) {
	fs.copyFileSync(frontendSamplePath, frontendEnvPath);
	console.log('Created YUFrontend/.env from YUFrontend/.env.example.');
}

if (!hasEnvValue(frontendEnvPath, 'BACKEND_URL')) {
	appendEnvValue(frontendEnvPath, 'BACKEND_URL', `http://127.0.0.1:${backendPort}`);
	console.log('Added BACKEND_URL to YUFrontend/.env.');
}

if (!(await checkPort(backendPort))) {
	fail(`port ${backendPort} is already in use. Stop the existing backend first.`);
}

if (!(await checkPort(frontendPort))) {
	fail(`port ${frontendPort} is already in use. Stop the existing frontend first.`);
}

ensureNodeModules(backendDir, 'yarn', ['install']);
ensureNodeModules(frontendDir, 'npm', ['install']);

console.log('Building backend...');
fs.rmSync(path.join(backendDir, 'dist'), { recursive: true, force: true });
run('yarn', ['run', 'swc', 'src', '-d', 'dist', '-D', '--strip-leading-paths', '--copy-files'], {
	cwd: backendDir
});

console.log('');
console.log('Starting YoUniverse development servers:');
console.log(`  backend:  http://127.0.0.1:${backendPort}`);
console.log(`  frontend: http://127.0.0.1:${frontendPort}`);
console.log('');
console.log('Press Ctrl+C to stop both.');
console.log('');

backendProcess = start('yarn', ['run', 'run'], backendDir);
frontendProcess = start(
	'npm',
	['run', 'dev', '--', '--host', '127.0.0.1', '--port', frontendPort],
	frontendDir
);

const exitCode = await new Promise((resolve) => {
	let resolved = false;
	function finish(code) {
		if (resolved) return;
		resolved = true;
		resolve(code ?? 0);
	}

	backendProcess.once('exit', (code) => finish(code));
	frontendProcess.once('exit', (code) => finish(code));
});

cleanup();
process.exit(exitCode);
