import { ZodSchema } from '@/utils/zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';
import { UserSettingsSchema } from './usersettings.dto';

export const CreateUserSettingsSchema = UserSettingsSchema.omit({
	createdAt: true,
	updatedAt: true
});

export type CreateUserSchemaType = z.infer<typeof CreateUserSettingsSchema>;

@ZodSchema(CreateUserSettingsSchema)
export class CreateUserSettingsDTO extends createZodDto(CreateUserSettingsSchema) {
	constructor(data: CreateUserSchemaType) {
		super();
		Object.assign(this, data);
	}
}
