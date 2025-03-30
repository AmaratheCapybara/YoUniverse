import { User } from '@/modules/users/user.entity';
import { Cache as CoreCache } from 'cache-manager';
import { MultipartFile } from '@fastify/multipart';

export interface JwtPayload {
	email: string;
	iat?: Date;
}

interface AuthRequest extends Request {
	user: User;
}

export type EmailData = {
	name: string;
	email: string;
	token: string;
	url: string;
	subject: string;
};

declare module '@nestjs/cache-manager' {
	interface Cache extends CoreCache {
		get<T>(key: string): Promise<T | undefined>;
		set<T>(key: string, value: T, ttl?: number): Promise<void>;
		del(key: string): Promise<void>;
	}
}

declare module 'fastify' {
	interface FastifyRequest {
		uploadedFiles?: MultipartFile[];
		body?: Record<string, any>;
	}
}
