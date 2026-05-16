import { env } from '$env/dynamic/private';

const DEFAULT_BACKEND_URL = 'http://127.0.0.1:3000';
const AUTH_COOKIE_MAX_AGE = 60 * 60;

export const authCookieName = 'yu_auth_token';

function getBackendUrl() {
	return (env.BACKEND_URL ?? env.PRIVATE_BACKEND_URL ?? DEFAULT_BACKEND_URL).replace(/\/$/, '');
}

function authCookieOptions(url) {
	return {
		httpOnly: true,
		path: '/',
		sameSite: 'lax',
		secure: url.protocol === 'https:',
		maxAge: AUTH_COOKIE_MAX_AGE
	};
}

function makePublicUser(user) {
	if (!user) return null;

	return {
		id: user.id,
		email: user.email,
		username: user.username,
		avatar: user.avatar,
		admin: user.admin
	};
}

function getErrorMessage(data, fallback) {
	const message = data?.message ?? data?.error ?? data?.details;
	if (Array.isArray(message)) return message.join(' ');
	if (typeof message === 'string' && message.trim()) return message;
	return fallback;
}

async function readJson(response) {
	const text = await response.text();
	if (!text) return null;

	try {
		return JSON.parse(text);
	} catch {
		return { message: text };
	}
}

async function backendRequest(path, { method = 'GET', body, token } = {}) {
	const headers = {
		accept: 'application/json'
	};

	if (body) headers['content-type'] = 'application/json';
	if (token) headers.authorization = `Bearer ${token}`;

	const response = await fetch(`${getBackendUrl()}${path}`, {
		method,
		headers,
		body: body ? JSON.stringify(body) : undefined
	});
	const data = await readJson(response);

	return { ok: response.ok, status: response.status, data };
}

export async function registerUser({ email, username, password }) {
	const result = await backendRequest('/users/register', {
		method: 'POST',
		body: { email, username, password }
	});

	if (!result.ok) {
		return {
			ok: false,
			message: getErrorMessage(result.data, 'Registration failed.')
		};
	}

	return {
		ok: true,
		token: result.data?.token,
		user: makePublicUser(result.data?.user)
	};
}

export async function loginUser({ username, password }) {
	const result = await backendRequest('/users/login', {
		method: 'POST',
		body: { username, password }
	});

	if (!result.ok) {
		return {
			ok: false,
			message: getErrorMessage(result.data, 'Incorrect username or password.')
		};
	}

	return {
		ok: true,
		token: result.data?.token,
		user: makePublicUser(result.data?.user)
	};
}

export async function validateAuthToken(token) {
	if (!token) return null;

	const result = await backendRequest('/users/@me', { token });
	if (!result.ok) return null;

	return makePublicUser(result.data);
}

export function setAuthCookie(event, token) {
	event.cookies.set(authCookieName, token, authCookieOptions(event.url));
}

export function clearAuthCookie(event) {
	event.cookies.delete(authCookieName, { path: '/' });
}
