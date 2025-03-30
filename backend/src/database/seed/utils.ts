/* eslint-disable no-empty-function */

import { Test } from '@nestjs/testing';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';

class MockCacheManager implements Partial<Cache> {
	async get<T>(key: string): Promise<T | undefined> {
		return undefined as T;
	}

	async set<T>(key: string, value: T, ttl?: number): Promise<void> {
		return;
	}

	async del(key: string): Promise<void> {
		return;
	}
}

export const cacheManagerMock: Cache = new MockCacheManager() as Cache;


export const mockMailService = {
	checkEnvironment: () => true,
	sendMail: () => ({ success: true }),
	sendVerificationEmail: () => ({ success: true })
};

export const eventsGatewayMock = {
	server: {
		emit: () => {}
	},
	emitMessageToChannel: () => {}
};

export async function setupService<T>(ServiceClass: new (...args: any[]) => T, providers: any[]): Promise<T> {
	const moduleRef = await Test.createTestingModule({
		providers: [
			ServiceClass,
			...providers,
			{
				provide: CACHE_MANAGER,
				useValue: cacheManagerMock
			}
		]
	}).compile();

	return moduleRef.get<T>(ServiceClass);
}
