import { ZodSchema } from '@/utils/zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';
import { UserSchema } from './user.dto';

export const UserTokenSchema = z.object({
	token: z.string(),
	user: UserSchema.omit({ password: true })
});

export type UserLoginSchemaType = z.infer<typeof UserTokenSchema>;

@ZodSchema(UserTokenSchema)
export class UserTokenResponseDTO extends createZodDto(UserTokenSchema) {
	constructor(data: UserLoginSchemaType) {
		super();
		// passthrough ignores unrecognized keys (such as Sequelize's methods), parse to make sure password is removed
		Object.assign(this, UserTokenSchema.passthrough().parse(data));
	}
}
