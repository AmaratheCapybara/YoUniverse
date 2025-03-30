import { ZodSchema } from '@/utils/zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';
import { UserSchema } from './user.dto';

export const UpdateUserSchema = UserSchema.partial();

export type UpdateUserSchemaType = z.infer<typeof UpdateUserSchema>;

@ZodSchema(UpdateUserSchema)
export class UpdateUserDTO extends createZodDto(UpdateUserSchema) {
	constructor(data: UpdateUserSchemaType) {
		super();
		Object.assign(this, data);
		this.isEmailVerified = typeof data.isEmailVerified === 'string' && data.isEmailVerified === 'true' ? true : false;
		this.id = typeof data.id === 'string' ? Number(data.id) : undefined;
		this.createdAt = typeof data.createdAt === 'string' ? new Date(data.createdAt) : undefined;
		this.updatedAt = typeof data.updatedAt === 'string' ? new Date(data.updatedAt) : undefined;
	}
}
