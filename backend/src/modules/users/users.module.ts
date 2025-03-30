import { DatabaseModule } from '@/database/database.module';
import { CacheModule } from '@nestjs/cache-manager';
import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';
import { ChannelsModule } from '../channels/channels.module';
import { MessagesModule } from '../messages/messages.module';
import { JwtStrategy } from './auth/jwt-strategy';
@Module({
	imports: [
		DatabaseModule,
		CacheModule.register(),
		// forwardRef(() => MailModule),
		forwardRef(() => ChannelsModule),
		forwardRef(() => MessagesModule)
	],
	controllers: [UsersController],
	providers: [UsersService, ...usersProviders],
	exports: [UsersService, ...usersProviders, /*JwtStrategy*/]
})
export class UsersModule {}
