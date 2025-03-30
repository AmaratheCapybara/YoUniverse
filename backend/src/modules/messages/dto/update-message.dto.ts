import { createZodDto } from '@anatine/zod-nestjs';
import { CreateMessageSchema } from './create-message.dto';

export const UpdateMessageSchema = CreateMessageSchema.partial();

export class UpdateMessageDTO extends createZodDto(UpdateMessageSchema) {}
