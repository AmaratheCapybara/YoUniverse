import { MESSAGES_REPOSITORY } from '@/utils/Constants';
import { Message } from './message.entity';

export const messagesProviders = [{ provide: MESSAGES_REPOSITORY, useValue: Message }];
