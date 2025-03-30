import { ZodSchema } from '@/utils/zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';
import { UserSettingsSchema } from './usersettings.dto';

export const UpdateUserSettingsSchema = UserSettingsSchema.partial().strip();

export type UpdateUserSettingsSchemaType = z.infer<typeof UpdateUserSettingsSchema>;

@ZodSchema(UpdateUserSettingsSchema)
export class UpdateUserSettingsDTO extends createZodDto(UpdateUserSettingsSchema) {
	constructor(data: UpdateUserSettingsSchemaType) {
		super();
		Object.assign(this, data);
	}
}
