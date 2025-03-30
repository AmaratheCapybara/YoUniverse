import { CHANNELS_REPOSITORY } from '@/utils/Constants';
import { Channel } from './channel.entity';

export const channelsProviders = [{ provide: CHANNELS_REPOSITORY, useValue: Channel }];
