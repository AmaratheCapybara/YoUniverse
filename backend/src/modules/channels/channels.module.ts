import { DatabaseModule } from '@/database/database.module';
import { CacheModule } from '@nestjs/cache-manager';
import { forwardRef, Module } from '@nestjs/common';
import { ChannelsController } from './channels.controller';
import { channelsProviders } from './channels.providers';
import { ChannelsService } from './channels.service';
import { MessagesModule } from '../messages/messages.module';

@Module({
	imports: [DatabaseModule, CacheModule.register(), forwardRef(() => MessagesModule)],
	controllers: [ChannelsController],
	providers: [ChannelsService, ...channelsProviders],
	exports: [...channelsProviders, ChannelsService]
})
export class ChannelsModule {}
