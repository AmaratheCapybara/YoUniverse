import { createZodDto } from '@anatine/zod-nestjs';
import { MessageSchema } from './message.dto';

export const CreateMessageSchema = MessageSchema.omit({ id: true, createdAt: true, updatedAt: true });

export class CreateMessageDTO extends createZodDto(CreateMessageSchema) {}
