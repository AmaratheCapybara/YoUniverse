import { Channel } from '@/modules/channels/channel.entity';
import { Message } from '@/modules/messages/message.entity';
import { User } from '@/modules/users/user.entity';
import { UserSettings } from '@/modules/usersettings/usersettings.entity';

let called = 0;

export default function defineAssociations() {
	if (called) return;

	Message.belongsTo(User, { as: 'author', foreignKey: 'authorID' });
	Message.belongsTo(Channel, { as: 'channel', foreignKey: 'channelID' });
	Message.belongsTo(Channel, { as: 'thread', foreignKey: 'threadID' });
	Message.belongsTo(Message, { as: 'originalMessage', foreignKey: 'replyToMessageID' });
	Message.hasMany(Message, { as: 'messageReplies', onDelete: 'SET NULL' });

	Channel.hasMany(Message, { as: 'comments', foreignKey: 'channelID' });
	Channel.belongsToMany(User, { through: 'UserChannels', foreignKey: 'channelID', otherKey: 'userID' });

	User.belongsTo(UserSettings, { as: 'settings', foreignKey: 'userID' });
	User.belongsToMany(Channel, { through: 'UserChannels', foreignKey: 'userID', otherKey: 'channelID' });

	called = 1;
}

export const models = [Channel, Message, User, UserSettings];
