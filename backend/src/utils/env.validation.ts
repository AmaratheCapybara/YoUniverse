import z from 'zod';

const envSchema = z
	.object({
		DB: z.string().optional(),
		DATABASE_URL: z.string().optional(),
		DATABASE_URI: z.string().optional(),
		DATABASE_HOST: z.string().optional(),
		DATABASE_PORT: z.string().optional(),
		DATABASE_USER: z.string().optional(),
		DATABASE_PASSWORD: z.string().optional(),
		DATABASE_NAME: z.string().optional(),
		PORT: z.string().optional(),
		HOST: z.string().optional(),
		WSS_PORT: z.string().optional(),
		REDIS_REST_URL: z.string().optional(),
		REDIS_REST_TOKEN: z.string().optional(),
		UPSTASH_REDIS_REST_URL: z.string().optional(),
		UPSTASH_REDIS_REST_TOKEN: z.string().optional(),
		JWT_PRIVATE_KEY: z.string().optional(),
		NODE_ENV: z.string().optional()
	})
	.passthrough()
	.superRefine((env, ctx) => {
		const hasDatabaseUri = env.DB || env.DATABASE_URL || env.DATABASE_URI;
		const hasDatabaseParts =
			env.DATABASE_HOST &&
			env.DATABASE_PORT &&
			env.DATABASE_USER &&
			env.DATABASE_PASSWORD &&
			env.DATABASE_NAME;

		if (!hasDatabaseUri && !hasDatabaseParts) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ['DB'],
				message: 'Set DB, DATABASE_URL, DATABASE_URI, or the DATABASE_* connection parts'
			});
		}

		if (env.NODE_ENV === 'prod' && (!env.JWT_PRIVATE_KEY || env.JWT_PRIVATE_KEY.length < 20)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ['JWT_PRIVATE_KEY'],
				message: 'JWT_PRIVATE_KEY must be at least 20 characters in production'
			});
		}
	});

export const validate = () => envSchema.parse(process.env);
