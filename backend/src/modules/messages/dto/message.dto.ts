import { UserSchema } from '@/modules/users/dto/user.dto';
import { IMessage } from '@/typings/message';
import { BaseSequelizeModel, schemaValidator, ZodSchema } from '@/utils/zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const BaseMessageSchema = z
	.object({
		content: z.string(),
		authorID: z.number().positive(),
		channelID: z.number().positive(),
		replyToMessageID: z.number().positive().optional(),
		handshakeID: z.number().positive().optional(),
		readAt: z.date().optional().nullable()
		// author: z.lazy(() => UserSchema) // TODO: Causes circular dependency
	})
	.merge(BaseSequelizeModel);

export const MessageSchema = schemaValidator<IMessage>()(BaseMessageSchema.strict());

export type MessageSchemaType = z.infer<typeof MessageSchema>;

@ZodSchema(MessageSchema)
export class MessageDTO extends createZodDto(MessageSchema) {
	constructor(data: MessageSchemaType) {
		super();

		if (!this.readAt) this.readAt = new Date();
		if ((this as any).author) (this as any).author = (data as any).author;

		Object.assign(this, data);
	}
}
