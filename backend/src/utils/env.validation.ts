import z from 'zod';

let envSchema = z.object({
	DATABASE_URI: z.string(),
	PORT: z.string(),
	HOST: z.string(),
	WSS_PORT: z.string(),
	REDIS_HOST: z.string(),
	REDIS_PORT: z.string(),
	NODE_ENV: z.string()
});

if (process.env.NODE_ENV === 'prod') {
	envSchema = envSchema.extend({
		JWT_PRIVATE_KEY: z.string().min(20),
		ELASTICSEARCH_NODE: z.string(),
		ELASTICSEARCH_USERNAME: z.string(),
		ELASTICSEARCH_PASSWORD: z.string(),
		DATABASE_HOST: z.string(),
		DATABASE_PORT: z.string(),
		DATABASE_USER: z.string(),
		DATABASE_PASSWORD: z.string(),
		DATABASE_NAME: z.string(),
		MAIL_USER: z.string().email(),
		MAIL_PASS: z.string(),
		MAIL_HOST: z.string(),
		MAIL_NAME: z.string(),
		SENTRY_AUTH_TOKEN: z.string(),
	});
}

export const validate = () => envSchema.parse(process.env);
