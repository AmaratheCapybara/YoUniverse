// import { MockTheme } from '@/test-utils/test-data';

export interface IUserSettings {
	userID: number;
	blockedUsers?: number[];

	pronouns?: string | null;
	age?: string | null;
	about?: string | null;
	private: boolean | null;
	systems?: number[] | null;
	frontingStatus?: string | null;
	profileType?: string | null; // TODO: enum
	ageRange?: string | null; // TODO: enum
	colorScheme?: string | null;

	invitationToken?: string | null;
	invitationCreatedAt?: Date | null;
	invitationSentAt?: Date | null;
	invitationAcceptedAt?: Date | null;
	invitationLimit?: number | null;
	invitedByType?: string | null;
	invitedByID?: number | null;
	invitationsCount?: number | null;

	createdAt: Date;
	updatedAt: Date;
}

declare module '@/modules/usersettings/usersettings.entity' {
	interface UserSettings extends IUserSettings {
		_marker?: never;
	}
}
