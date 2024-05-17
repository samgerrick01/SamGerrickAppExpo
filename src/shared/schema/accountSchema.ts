import { Errors } from '@shared/enums/error';
import z from 'zod';

// enum Error {
//   EMPTY_EMAIL = 'Please enter a valid email address',
// }

export const accountSchema = z.object({
  lineId: z.number(),
  userId: z.string(),
  userName: z.string(),
  lastName: z.string(),
  firstName: z.string(),
  birthday: z.date(),
  gender: z.string(),
  phoneNumber: z.string(),
  emailAddress: z.string(),
  password: z.string(),
  userStatus: z.number(),
  createdAt: z.date(),
  createdBy: z.string(),
  updatedAt: z.date(),
  updatedBy: z.string(),
});

export const editAccountSchema = z
  .object({
    userID: z.string(),
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
    mobileNumber: z
      .string()
      .min(1, Errors.REQUIRED)
      .max(11, Errors.INVALID_MOBILE)
      .regex(/^[0-9]+$/, { message: Errors.INVALID_MOBILE })
      .refine((value) => !!value, { message: Errors.REQUIRED }),
    email: z.string().min(1, Errors.REQUIRED).email({ message: Errors.INVALID_EMAIL }),
    password: z.string().min(8, Errors.INVALID_PASSWORD).max(12, Errors.INVALID_PASSWORD),
    confirmPassword: z.string().min(8, Errors.INVALID_PASSWORD).max(12, Errors.INVALID_PASSWORD),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: Errors.PASSWORD_MISMATCH,
    path: ['confirmPassword'],
  });
