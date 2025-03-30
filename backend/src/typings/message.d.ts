export interface IMessage {
	authorID: number;
	content: string;

	channelID?: number;
	postID?: number;
	replyToMessageID?: number | null;
	handshakeID?: number | null;
	receiverID?: number | null;

	author?: User;
	channel?: Channel;
	post?: Post;
	originalMessage?: Message;
	messageReplies?: Message[];

	getAuthor?(): Promise<User>;
	getChannel?(): Promise<Channel>;
	setChannel?(channel: number | Channel): Promise<Channel>;
	getPost?(): Promise<Post>;
	setPost?(post: number | Post): Promise<Post>;
	getOriginalMessage?(): Promise<Message>;
	getMessageReplies?(): Promise<Message[]>;
}

declare module '@/modules/messages/message.entity' {
	interface Message extends IMessage {
		_marker?: never;
	}
}
