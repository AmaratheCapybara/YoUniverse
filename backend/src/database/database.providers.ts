import { DB_REPOSITORY } from '@/utils/Constants';
import { ConfigService } from '@nestjs/config';
import PostgreSQL from './PostgreSQL';

export const databaseProviders = [
	{
		provide: DB_REPOSITORY,
		useFactory: (configService: ConfigService) => {
			const config = configService.get('database');
			if (!config) throw new Error('PostgreSQL config not found');

			return PostgreSQL.connect(config.uri);
		},
		inject: [ConfigService]
	}
];
