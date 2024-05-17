import { Errors } from '@shared/enums/error';
import { z } from 'zod';

export const addressSchema = z.object({
  recipientName: z
    .string()
    .min(1, Errors.REQUIRED)
    .max(50, Errors.MAX_CHARACTER_ERROR)
    .regex(/^[A-Za-z0-9\s\-]+$/, { message: Errors.INVALID_NAME })
    .refine((value) => !!value, { message: Errors.REQUIRED }),
  recipientContactNumber: z
    .string()
    .min(1, Errors.REQUIRED)
    .max(11, Errors.INVALID_MOBILE_INPUT)
    .regex(/^[0-9]+$/, { message: Errors.INVALID_MOBILE_INPUT })
    .refine((value) => !!value, { message: Errors.REQUIRED }),
  province: z
    .string()
    .min(1, Errors.REQUIRED)
    .refine((value) => !!value, { message: Errors.REQUIRED }),
  city: z
    .string()
    .min(1, Errors.REQUIRED)
    .refine((value) => !!value, { message: Errors.REQUIRED }),
  barangay: z
    .string()
    .min(1, Errors.REQUIRED)
    .max(50, Errors.MAX_CHARACTER_ERROR)
    .refine((value) => !!value, { message: Errors.REQUIRED }),
  houseFloorNumberStreet: z
    .string()
    .min(1, Errors.REQUIRED)
    .refine((value) => !!value, { message: Errors.REQUIRED }),
  zipCode: z
    .string()
    .min(1, Errors.REQUIRED)
    .max(4, Errors.MAX_ZIPCODE)
    .regex(/^[0-9]+$/, { message: Errors.INVALID_ZIPCODE })
    .refine((value) => !!value, { message: Errors.REQUIRED }),

  landmark: z
    .string()
    .max(50, Errors.MAX_CHARACTER_ERROR)
    .refine((value) => {
      return !value || value.trim().length > 0;
    }, 'Optional custom error message if needed'),

  locationType: z
    .string()
    .min(1, Errors.REQUIRED)
    .refine((value) => !!value, { message: Errors.REQUIRED }),
});

export type TaddAddressSchemaNames =
  | 'recipientName'
  | 'recipientContactNumber'
  | 'province'
  | 'city'
  | 'barangay'
  | 'houseFloorNumberStreet'
  | 'zipCode'
  | 'landmark'
  | 'locationType';

export type addAddressFormSchema = z.infer<typeof addressSchema>;
