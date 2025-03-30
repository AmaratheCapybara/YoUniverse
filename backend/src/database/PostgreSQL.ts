import { Sequelize } from 'sequelize-typescript';
import defineAssociations, { models } from './associations';
import { singletonLogger } from '@/common/services/logger/logger.service';

export default class PostgreSQL {
	public static db: Sequelize;

	public static async connect(connectionURI: string = process.env.DATABASE_URI!, force = true) {
		if (!PostgreSQL.db) {
			if (process.env.NODE_ENV === 'test') {
				return;
			}

			if (!connectionURI) throw new Error('Database connection URI not provided');

			// process.env.DB must not include flags like ?ssl=require
			const sequelize = new Sequelize(connectionURI, {
				dialect: 'postgres',
				logging: false
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
