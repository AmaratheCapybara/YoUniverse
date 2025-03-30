import { IUserSettings } from '@/typings/usersettings';
import { BaseSequelizeModel, schemaValidator, ZodSchema } from '@/utils/zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const BaseUserSettingsSchema = z
	.object({
		userID: z.number(),

		about: z.string().optional().nullable(),
		blockedUsers: z.array(z.number()).optional(),
		theme: z.string().optional().default('dark'),
		notifications: z.boolean().optional().default(true),

		pronouns: z.string().optional().nullable(),
		age: z.string().optional().nullable(),
		private: z.boolean().nullable(),
		systems: z.array(z.number()).optional().nullable(),
		frontingStatus: z.string().optional().nullable(),
		profileType: z.string().optional().nullable(),
		ageRange: z.string().optional().nullable(),
		colorScheme: z.string().optional().nullable(),

		invitationToken: z.string().optional().nullable(),
		invitationCreatedAt: z.date().optional().nullable(),
		invitationSentAt: z.date().optional().nullable(),
		invitationAcceptedAt: z.date().optional().nullable(),
		invitationLimit: z.number().optional().nullable(),
		invitedByType: z.string().optional().nullable(),
		invitedByID: z.number().optional().nullable(),
		invitationsCount: z.number().optional().nullable()
	})
	.merge(BaseSequelizeModel)
	.strict();

export const UserSettingsSchema = schemaValidator<IUserSettings>()(
	BaseUserSettingsSchema
);

export type UserSettingsSchemaType = z.infer<typeof UserSettingsSchema>;

@ZodSchema(UserSettingsSchema)
export class UserSettingsDTO extends createZodDto(UserSettingsSchema) {
	constructor(data: Partial<UserSettingsSchemaType>) {
		super();
		Object.assign(this, data);
	}
}
