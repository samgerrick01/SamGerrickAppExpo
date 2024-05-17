import { Errors } from '@shared/enums/error';
import z from 'zod';

export const loginSchema = z.object({
  username: z.string().refine((value) => !!value, Errors.EMPTY_USERNAME),
  password: z.string().refine((value) => !!value, Errors.EMPTY_PASSWORD),
});
