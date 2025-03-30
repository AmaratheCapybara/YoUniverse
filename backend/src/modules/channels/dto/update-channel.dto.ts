import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';
import { CreateChannelSchema } from './create-channel.dto';

export const UpdateChannelSchema = CreateChannelSchema.partial();

export type UpdateChannelSchemaType = z.infer<typeof UpdateChannelSchema>;

export class UpdateChannelDTO extends createZodDto(UpdateChannelSchema) {
	constructor(data: UpdateChannelSchemaType) {
		super();
		Object.assign(this, data);
	}
}
