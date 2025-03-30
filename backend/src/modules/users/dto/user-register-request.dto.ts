import { createStrictSchema, FieldDefinition, ZodSchema } from '@/utils/zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

const userRegisterFields: FieldDefinition[] = [
	{ key: 'username', type: 'string' },
	{ key: 'email', type: 'string' },
	{ key: 'password', type: 'string' }
];

export const UserRegisterRequestSchema = createStrictSchema(userRegisterFields);

export type UserRegisterRequestSchemaType = z.infer<typeof UserRegisterRequestSchema>;

@ZodSchema(UserRegisterRequestSchema)
export class UserRegisterRequestDTO extends createZodDto(UserRegisterRequestSchema) {
	constructor(data: UserRegisterRequestSchemaType) {
		super();
		// Object.assign(this, UserRegisterRequestSchema.passthrough().parse(data));
		Object.assign(this, data);
	}
}
