import { DatabaseModule } from '@/database/database.module';
import { CacheModule } from '@nestjs/cache-manager';
import { forwardRef, Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { messagesProviders } from './messages.providers';
import { MessagesService } from './messages.service';
import { ChannelsModule } from '../channels/channels.module';

@Module({
	imports: [DatabaseModule, CacheModule.register(), forwardRef(() => ChannelsModule)],
	controllers: [MessagesController],
	providers: [MessagesService, ...messagesProviders],
	exports: [...messagesProviders, MessagesService]
})
export class MessagesModule {}
