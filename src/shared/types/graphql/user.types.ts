import { forgetSchema } from '@shared/schema/forgetSchema';
import { z } from 'zod';

export type TForgetPasswordGraphQLVars = {
  data: {
    email: string;
  };
};
export type TForgetFormSchema = z.infer<typeof forgetSchema>;
export type TForgetSchemaNames = keyof TForgetFormSchema;

export type TLogoutGraphQLVars = {
  data: {
    contact: string;
    token: string;
  };
};
