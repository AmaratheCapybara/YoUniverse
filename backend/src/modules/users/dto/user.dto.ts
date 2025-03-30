import { IUser } from '@/typings/user';
import { BaseSequelizeModel, schemaValidator, ZodSchema } from '@/utils/zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const UserSchema = schemaValidator<IUser>()(
	z
		.object({
			email: z.string().email(),
			password: z.string().optional(), // Password will usually be omitted from the model
			username: z.string().optional(),
			admin: z.boolean(),
			avatar: z.string().optional().nullable(),

			settingsID: z.number().optional(),

			isEmailVerified: z.boolean().optional(),
			emailVerificationToken: z.string().optional().nullable(),
			resetPasswordToken: z.string().optional().nullable(),
			resetPasswordSentAt: z.date().optional().nullable(),

			deactivatedAt: z.date().optional().nullable()
		})
		.merge(BaseSequelizeModel) satisfies z.ZodType<IUser>
).strip();

export type UserSchemaType = z.infer<typeof UserSchema>;

@ZodSchema(UserSchema)
export class UserDTO extends createZodDto(UserSchema) {
	constructor(data: Partial<UserSchemaType>) {
		super();
		Object.assign(this, (data as any).dataValues ?? data);
	}
}
