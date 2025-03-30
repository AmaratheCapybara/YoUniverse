import { z } from 'zod';

export const AvatarURLSchema = z.string().url();
