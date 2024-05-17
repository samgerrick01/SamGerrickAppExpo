import { Errors } from '@shared/enums/error';
import { z } from 'zod';

export const registrationSchema = z
  .object({
    firstName: z
      .string()
      .min(1, Errors.REQUIRED)
      .regex(/^[a-zA-Z\s-]+$/, { message: Errors.INVALID_FIRST_NAME })
      .refine((value) => !!value, { message: Errors.REQUIRED }),
    lastName: z
      .string()
      .min(1, Errors.REQUIRED)
      .regex(/^[a-zA-Z\s-]+$/, { message: Errors.INVALID_LAST_NAME })
      .refine((value) => !!value, { message: Errors.REQUIRED }),
    birthday: z.date().refine((value) => !!value, { message: Errors.INVALID_BIRTHDAY }),
    gender: z.string(),
    mobileNumber: z
      .string()
      .min(1, Errors.REQUIRED)
      .max(11, Errors.INVALID_MOBILE)
      .regex(/^[0-9]+$/, { message: Errors.INVALID_MOBILE })
      .refine((value) => !!value, { message: Errors.REQUIRED }),
    email: z.string().min(1, Errors.REQUIRED).email({ message: Errors.INVALID_EMAIL }),
    password: z
      .string()
      .min(1, Errors.REQUIRED)
      .min(8, Errors.INVALID_PASSWORD)
      .max(12, Errors.INVALID_PASSWORD),
    confirmPassword: z
      .string()
      .min(1, Errors.REQUIRED)
      .min(8, Errors.INVALID_PASSWORD)
      .max(12, Errors.INVALID_PASSWORD),
    enableNewsAndEvents: z.boolean(),
    hasReadPolicy: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: Errors.PASSWORD_MISMATCH,
    path: ['confirmPassword'], // path of error
  });
