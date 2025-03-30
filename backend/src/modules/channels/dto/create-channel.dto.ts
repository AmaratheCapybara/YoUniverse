import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';
import { ChannelSchema } from './channel.dto';

export const CreateChannelSchema = ChannelSchema.omit({ createdAt: true, updatedAt: true, users: true }).extend({
	id: z.number().optional().nullable(), // Only used for the initial seeding just to make sure
	userIDs: z.array(z.number().positive()).optional() // TODO: Only required for private channels
});

export type CreateChannelSchemaType = z.infer<typeof CreateChannelSchema>;

export class CreateChannelDTO extends createZodDto(CreateChannelSchema) {
	constructor(data: CreateChannelSchemaType) {
		super();
		Object.assign(this, (data as any)?.dataValues ?? data);
	}
}
