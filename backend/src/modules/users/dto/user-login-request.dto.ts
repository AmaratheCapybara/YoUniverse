import { createStrictSchema, FieldDefinition, ZodSchema } from '@/utils/zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

const userLoginFields: FieldDefinition[] = [
	{ key: 'username', type: 'string' },
	{ key: 'password', type: 'string' }
];

export const UserLoginRequestSchema = createStrictSchema(userLoginFields);

export type UserLoginRequestSchemaType = z.infer<typeof UserLoginRequestSchema>;

@ZodSchema(UserLoginRequestSchema)
export class UserLoginRequestDTO extends createZodDto(UserLoginRequestSchema) {
	constructor(data: UserLoginRequestSchemaType) {
		super();
		Object.assign(this, data);
	}
}
