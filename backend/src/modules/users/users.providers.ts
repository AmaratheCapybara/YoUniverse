import { USERS_REPOSITORY } from '@/utils/Constants';
import { User } from './user.entity';

export const usersProviders = [{ provide: USERS_REPOSITORY, useValue: User }];
