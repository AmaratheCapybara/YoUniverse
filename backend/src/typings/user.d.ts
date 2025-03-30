export interface IUser {
	id: number;
	email: string;
	password?: string; // Usually will be excluded from model
	username?: string;
	admin: boolean;
	isEmailVerified?: boolean;

	settingsID?: number;

	createdAt: Date;
	updatedAt: Date;
	deactivatedAt?: Date | null;

	addPost?(id: Post | number): Promise<Post>;
	getPosts?(): Promise<Post[]>;
	getSentOffers?(): Promise<Offer[]>;
	getReceivedOffers?(): Promise<Offer[]>;
	getChannels?(): Promise<Channel[]>;
	getUserSettings?(): Promise<UserSettings>;
	setUserSettings?(): Promise<void>;
	addTags?(tags: number[] | Tag[]): Promise<void>;
	getTags?(): Promise<Tag[]>;
	setTags?(tags: number[] | Tag[]): Promise<void>;
}

declare module '@/modules/users/user.entity' {
	interface User extends IUser {
		_marker?: never;
	}
}
