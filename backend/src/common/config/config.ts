import * as root from 'app-root-path';
import * as dotenv from 'dotenv';
import { join } from 'path';
import type { Dialect } from 'sequelize/types';

const envFile = process.env.NODE_ENV === 'test' ? '.env.sample' : '.env';
const path = join(root.path, envFile);

dotenv.config({ path });

export interface EnvConfig {
	database: {
		// Provide URI or other parameters
		dialect: 'postgres' | 'mysql' | 'mariadb' | 'sqlite' | 'mssql';
		host?: string;
		port?: number;
		username?: string;
		password?: string;
		database?: string;
		logging: boolean;
		uri?: string;
	};
	redis: {
		restUrl?: string;
		restToken?: string;
	};
	cache: {
		ttl: number;
	};
	jwtPrivateKey: string;
	elasticSearch: {
		node: string;
		username: string;
		password: string;
	};
	throttle: {
		limit: number;
		ttl: number;
	};
	mail: {
		user: string;
		pass: string;
		name: string;
		host: string;
	};
}

const databaseUri =
	process.env.DB ??
	process.env.DATABASE_URL ??
	process.env.DATABASE_URI ??
	(process.env.DATABASE_USER &&
	process.env.DATABASE_PASSWORD &&
	process.env.DATABASE_HOST &&
	process.env.DATABASE_PORT &&
	process.env.DATABASE_NAME
		? `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
		: undefined);

export const config = {
	server: {
		port: Number(process.env.PORT ?? '3000'),
		host: process.env.HOST ?? 'localhost',
		env: process.env.NODE_ENV ?? 'dev',
		wss: Number(process.env.WSS_PORT ?? '3001')
	},
	database: {
		dialect: 'postgres' as Dialect,
		host: process.env.DATABASE_HOST,
		port: +process.env.DATABASE_PORT!,
		username: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		name: process.env.DATABASE_NAME,
		uri: databaseUri,
		logging: false
	},
	redis: {
		restUrl: process.env.UPSTASH_REDIS_REST_URL ?? process.env.REDIS_REST_URL,
		restToken: process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.REDIS_REST_TOKEN
	},
	cache: {
		ttl: +(process.env.CACHE_TTL ?? 60)
	},
	jwtPrivateKey: process.env.JWT_PRIVATE_KEY ?? 'jwtPrivateKey',
	elasticSearch: {
		node: process.env.ELASTICSEARCH_NODE!,
		username: process.env.ELASTICSEARCH_USERNAME!,
		password: process.env.ELASTICSEARCH_PASSWORD!
	},
	throttle: {
		limit: +process.env.THROTTLE_LIMIT! || 5,
		ttl: +process.env.THROTTLE_TTL! || 60
	},
	mail: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS,
		host: process.env.MAIL_HOST,
		name: process.env.MAIL_NAME
	}
} as EnvConfig;

export default () => config;
