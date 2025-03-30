export interface IChannel {
	id: number;
	name: string;
	channelType: string;

	createdAt: Date;
	updatedAt: Date;

	comments?: Message[];
	users?: User[];

	getComments?(): Promise<Message[]>;
	getUsers?(): Promise<User[]>;
}

declare module '@/modules/channels/channel.entity' {
	interface Channel extends IChannel {
		_marker?: never; // Satisfy eslint
	}
}
