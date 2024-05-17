import { Errors } from '@shared/enums/error';
import z from 'zod';

export const forgetSchema = z.object({
  email: z
    .string()
    .email(Errors.EMPTY_EMAIL)
    .refine((value) => !!value, Errors.EMPTY_EMAIL),
});
