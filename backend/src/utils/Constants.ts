import { join } from 'path';

// Data source constants
export const DB_REPOSITORY = 'SEQUELIZE';
export const POSTS_REPOSITORY = 'POSTS_REPOSITORY';
export const USERS_REPOSITORY = 'USERS_REPOSITORY';
export const USERSETTINGS_REPOSITORY = 'USERSETTINGS_REPOSITORY';
export const CHANNELS_REPOSITORY = 'CHANNELS_REPOSITORY';
export const MESSAGES_REPOSITORY = 'MESSAGES_REPOSITORY';
export const LOGGER_SERVICE = 'LOGGER_SERVICE';

// Cache key constants
export const USERS_CACHE_KEY = 'users';
export const USERSETTINGS_CACHE_KEY = 'usersettings';
export const POSTS_CACHE_KEY = 'posts';
export const CHANNELS_CACHE_KEY = 'channels';
export const MESSAGES_CACHE_KEY = 'messages';

// Miscellaneous
export const ZOD_SCHEMA_KEY = 'ZOD_SCHEMA';
export const BASE_ENTITIES_PATH = join(__dirname, '..', '..', 'dist', 'modules', '**', '*.entity.js');
export const VIEWS_PATH = join(__dirname, '..', 'views');
export const allowedOriginRegex = /^https?:\/\/localhost(:\d+)?$|^https?:\/\/\d{1,3}(\.\d{1,3}){3}(:\d+)?$|.*\.vercel\.app$|.*\.github\.io$/;

export const MAX_RETRIES = 5;
export const MAX_DELAY = 30000;

export const GOOGLE_GEOCODE_URL = (regionID: string | number) =>
	`https://maps.googleapis.com/maps/api/geocode/json?place_id=${regionID}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

// Enums
export enum ChannelType {
	DM = 'dm',
	GROUP = 'group',
	PUBLIC = 'public'
}

export const channelTypes: string[] = Object.values(ChannelType);

export enum Events {
	MESSAGE_CREATE = 'messageCreate'
}

export const Errors = {
	INVALID_USERNAME: () => 'Invalid username.',
	INVALID_USER_PASSWORD: () => 'Invalid password.',
	NOT_FOUND: (key: string, id?: string | number) => `${key} ${id ? `(${id}) ` : ''}not found.`,
	INVALID_TOKEN: () => 'Invalid or expired verification token',
	INVALID_PARAMETER: (key: string) => `Invalid ${key}`,
	UNAUTHORIZED: (key: string) => `You are unauthorized to manage this ${key}`,
	FILE_REQUIRED: () => 'Either file or avatarURL must be provided'
};

export const uploadsPath = join(__dirname, '..', '..', 'uploads');
