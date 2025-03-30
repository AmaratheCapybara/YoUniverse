import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import * as redisStore from 'cache-manager-redis-store';
import type { RedisClientOptions } from 'redis';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR, APP_PIPE, APP_GUARD } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import configuration from '@/common/config/config';

import { AppController } from './app.controller';
import { UsersModule } from './modules/users/users.module';
import { ChannelsModule } from './modules/channels/channels.module';
import { MessagesModule } from './modules/messages/messages.module';
import { UsersSettingsModule } from './modules/usersettings/usersettings.module';
import { ZodSchemaInterceptor } from './common/interceptors/zod.interceptor';
import { validate } from '@/utils/env.validation';
import { LoggerModule } from '@/common/services/logger/logger.module';
import { DatabaseModule } from './database/database.module';
import { ThrottlerStorageRedisService } from 'nestjs-throttler-storage-redis'; // Uses ioredis
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
		isGlobal: true,
		load: [configuration],
		validate
	}),
    LoggerModule,
	DatabaseModule,
	// RedisModule,
	ThrottlerModule.forRootAsync({
		imports: [ConfigModule],
		useFactory: async (configService: ConfigService) => {
			return {
				throttlers: [
					{
						limit: configService.get<number>('throttle.limit', 5),
						ttl: configService.get<number>('throttle.ttl', 60)
					}
				],
				storage: process.env.NODE_ENV === 'test' ? undefined : new ThrottlerStorageRedisService(configService.get<string>('redis.uri'))
			};
		},
		inject: [ConfigService]
	}),
	CacheModule.registerAsync<RedisClientOptions>({
		isGlobal: true,
		imports: [ConfigModule],
		useFactory: async (configService: ConfigService) => ({
			isGlobal: true,
			store: redisStore,
			url: configService.get<string>('redis.uri')!,
			ttl: configService.get<number>('redis.ttl') ?? 60
		}),
		inject: [ConfigService]
	}),
    UsersModule,
    MessagesModule,
    ChannelsModule,
    UsersSettingsModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
		AppService,
		{
			provide: APP_INTERCEPTOR,
			useClass: CacheInterceptor
		},
		{
			provide: APP_PIPE,
			useClass: ZodValidationPipe
		},
		{
			provide: APP_GUARD,
			useClass: ThrottlerGuard
		},
		{
			provide: APP_INTERCEPTOR,
			useClass: ZodSchemaInterceptor
		}
	]
})
export class AppModule {}
