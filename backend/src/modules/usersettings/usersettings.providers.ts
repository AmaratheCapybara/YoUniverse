import { USERSETTINGS_REPOSITORY } from '@/utils/Constants';
import { UserSettings } from './usersettings.entity';

export const userSettingsProviders = [{ provide: USERSETTINGS_REPOSITORY, useValue: UserSettings }];
