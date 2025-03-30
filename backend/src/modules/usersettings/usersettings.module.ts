import { DatabaseModule } from '@/database/database.module';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { UsersettingsController } from './usersettings.controller';
import { userSettingsProviders } from './usersettings.providers';
import { UsersettingsService } from './usersettings.service';

@Module({
	imports: [DatabaseModule, CacheModule.register()],
	controllers: [UsersettingsController],
	providers: [UsersettingsService, ...userSettingsProviders],
	exports: [UsersettingsService]
})
export class UsersSettingsModule {}
