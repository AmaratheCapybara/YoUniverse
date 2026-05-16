import { Sequelize } from 'sequelize-typescript';
import defineAssociations, { models } from './associations';
import { singletonLogger } from '@/common/services/logger/logger.service';

export default class PostgreSQL {
	public static db: Sequelize;

	public static async connect(connectionURI: string = process.env.DB ?? process.env.DATABASE_URL ?? process.env.DATABASE_URI!, force = false) {
		if (!PostgreSQL.db) {
			if (process.env.NODE_ENV === 'test') {
				return;
			}

			if (!connectionURI) throw new Error('Database connection URI not provided');

			const usesSsl =
				process.env.DATABASE_SSL === 'true' ||
				connectionURI.includes('sslmode=require') ||
				connectionURI.includes('ssl=true');

			const sequelize = new Sequelize(connectionURI, {
				dialect: 'postgres',
				logging: false,
				dialectOptions: usesSsl
					? {
							ssl: {
								require: true,
								rejectUnauthorized: false
							}
						}
					: undefined
			});

			sequelize.addModels(models);

			singletonLogger.debug(`[DATABASE] Models loaded: ${Object.keys(sequelize.models)}`);

			PostgreSQL.db = sequelize;

			defineAssociations();

			await PostgreSQL.db.sync({ force });

			singletonLogger.log('[DATABASE] Connection established');
		}

		return PostgreSQL.db;
	}
}
