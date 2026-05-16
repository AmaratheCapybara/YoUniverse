import { DatabaseModule } from '@/database/database.module';
import { CacheModule } from '@nestjs/cache-manager';
import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
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
		PassportModule.register({ defaultStrategy: 'jwt' }),
		// forwardRef(() => MailModule),
		forwardRef(() => ChannelsModule),
		forwardRef(() => MessagesModule)
	],
	controllers: [UsersController],
	providers: [UsersService, JwtStrategy, ...usersProviders],
	exports: [UsersService, JwtStrategy, ...usersProviders]
})
export class UsersModule {}
