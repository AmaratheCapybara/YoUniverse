import { MessageDTO } from '@/modules/messages/dto/message.dto';
import { UserDTO } from '@/modules/users/dto/user.dto';
import { IChannel } from '@/typings/channel';
import { ChannelType } from '@/utils/Constants';
import { BaseSequelizeModel, schemaValidator, ZodSchema } from '@/utils/zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

const BaseChannelSchema = z
	.object({
		name: z.string().min(3).max(60),
		channelType: z.nativeEnum(ChannelType),
		comments: z.array(MessageDTO.zodSchema).optional(),
		users: z.array(UserDTO.zodSchema).optional()
	})
	.merge(BaseSequelizeModel);

export const ChannelSchema = schemaValidator<IChannel>()(BaseChannelSchema.strict());

export type ChannelSchemaType = z.infer<typeof ChannelSchema>;

@ZodSchema(ChannelSchema)
export class ChannelDTO extends createZodDto(ChannelSchema) {
	constructor(data: ChannelSchemaType) {
		super();
		Object.assign(this, data);
	}
}
