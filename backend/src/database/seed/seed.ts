import { Sequelize } from 'sequelize-typescript';
import defineAssociations, { models } from '@/database/associations';
import { User } from '@/modules/users/user.entity';
import { ChannelType, LOGGER_SERVICE } from '@/utils/Constants';
import { setupService } from './utils';

import { LoggerService } from '@/common/services/logger/logger.service';
import { MessagesService } from '@/modules/messages/messages.service';
import { messagesProviders } from '@/modules/messages/messages.providers';
import { channelsProviders } from '@/modules/channels/channels.providers';
import { ChannelsService } from '@/modules/channels/channels.service';
import { UsersService } from '@/modules/users/users.service';
import { ConfigService } from '@nestjs/config';
import { usersProviders } from '@/modules/users/users.providers';

const sequelize = new Sequelize(process.env.DATABASE_URI!, {
	dialect: 'postgres',
	logging: false
});

sequelize.addModels(models);
defineAssociations();

async function seedDatabase() {
	try {
		console.log('Starting seeding process...');
		await sequelize.sync({ force: true, alter: true });
		console.log('Database synchronized.');

		// Create dependencies
		const loggerService = new LoggerService('SEEDING');

		// Instantiate services with dependencies
		const messagesService = await setupService(MessagesService, [
			...messagesProviders,
			...channelsProviders,
			{ provide: LOGGER_SERVICE, useValue: loggerService },
		]);

		console.log('Setup message service');

		const usersService = await setupService(UsersService, [
			...channelsProviders,
			...messagesProviders,
			...usersProviders,
			{ provide: LOGGER_SERVICE, useValue: loggerService },
			{ provide: ChannelsService, useClass: ChannelsService },
			{ provide: MessagesService, useValue: messagesService },
			{ provide: ConfigService, useValue: new ConfigService() },
			// { provide: MailService, useValue: mockMailService }
		]);

		const channelsService = await setupService(ChannelsService, [
			...channelsProviders,
			...messagesProviders,
			...usersProviders,
			{ provide: LOGGER_SERVICE, useValue: loggerService }
		]);

		console.log('Services created.');

		// Create users
		const [user1, user2, user3] = await User.bulkCreate(
			[
				{ username: 'user1', email: 'user1@example.com', password: 'password1', kudos: 10, avatar: '/uploads/avatars/1.jpeg' },
				{ username: 'user2', email: 'user2@example.com', password: 'password2', kudos: 20, avatar: '/uploads/avatars/2.jpeg' },
				{ username: 'user3', email: 'user3@example.com', password: 'password3', kudos: 20, avatar: '/uploads/avatars/3.jpeg' }
			],
			{ individualHooks: true }
		);
		console.log('Users created.');

		// Seed Public Chat
		const publicChannel = await channelsService.createChannel({ id: 0, name: 'Public Chat', channelType: ChannelType.PUBLIC });

		// Seed Public Messages
		await messagesService.sendMessage({ channelID: publicChannel.id, authorID: user1.id, content: 'Hello, world!' });
		await messagesService.sendMessage({ channelID: publicChannel.id, authorID: user2.id, content: 'Hey there!' });

		console.log('✅ Public messages seeded.');

		// Seed DM
		await usersService.dm(user1.id, user2.id, { content: 'This is a DM!', authorID: user1.id });

		console.log('✅ DM seeded.');

		console.log('Seeding completed successfully.');
	}
	catch (error) {
		console.error('Error during seeding:', error);
	}
	finally {
		await sequelize.close();
	}
}

seedDatabase();
