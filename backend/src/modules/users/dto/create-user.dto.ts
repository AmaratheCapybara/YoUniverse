import { ZodSchema } from '@/utils/zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';
import { UserSchema } from './user.dto';

export const CreateUserSchema = UserSchema.omit({
	id: true,
	createdAt: true,
	updatedAt: true,
	deactivatedAt: true
});

export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;

@ZodSchema(CreateUserSchema)
export class CreateUserDTO extends createZodDto(CreateUserSchema) {
	constructor(data: CreateUserSchemaType) {
		super();
		Object.assign(this, data);
	}
}
