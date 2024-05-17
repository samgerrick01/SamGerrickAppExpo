import { editAccountSchema } from '@shared/schema/accountSchema';
import { loginSchema } from '@shared/schema/loginSchema';
import { registrationSchema } from '@shared/schema/registrationSchema';
import { z } from 'zod';

/** Login */
export type TLoginGraphQLData = {
  contact: string;
  userID: string;
  token: string;
};
export type TLoginGraphQLResponse = {
  consumerLogin: TLoginGraphQLData;
};
export type TLoginGraphQLVars = {
  login: {
    contact: string;
    password: string;
  };
};
export type TLoginFormSchema = z.infer<typeof loginSchema>;
export type TLoginSchemaNames = keyof TLoginFormSchema;

/** Register */
export type TRegistrationGraphQLData = {
  consumerRegister: {
    firstName: string;
    lastName: string;
    birthday: string;
    mobileNumber: string;
    email: string;
    gender: string;
    password: string;
    confirmPassword: string;
    enableNewsAndEvents: boolean;
    hasReadPolicy: boolean;
  };
};
export type TRegistrationGraphQLVars = {
  register: {
    firstName: string;
    lastName: string;
    birthday: Date;
    mobileNumber: string;
    email: string;
    gender: string;
    password: string;
    confirmPassword: string;
    enableNewsAndEvents: boolean;
    hasReadPolicy: boolean;
  };
};

export type TRegistrationFormSchema = z.infer<typeof registrationSchema>;
export type TRegistrationSchemaNames = keyof TRegistrationFormSchema;

/**
 * Get Profile by UserId
 */
export type TGetProfileGraphQLData = {
  lineId: Number | String;
  userId: Number | String;
  userName: String;
  lastName: String;
  firstName: String;
  birthday: Date | String;
  gender: String;
  phoneNumber: String;
  emailAddress: String;
  password: String;
  userStatus: Number | String;
  createdAt: Date | String;
  createdBy: String;
  updatedAt: Date | String;
  updatedBy: String;
};
export type TGetProfileGraphQLResponse = {
  getUserbyId: TGetProfileGraphQLData;
};

/**
 * Edit profile
 */
export type TEditProfileGraphQLData = {
  consumerUpdate: {
    contact: string;
    userID: string;
    token: string;
  };
};
export type TEditProfileGraphQLVars = {
  data: {
    userID: string;
    firstName: string;
    lastName: string;
    mobileNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
};
export type TEditProfileFormSchema = z.infer<typeof editAccountSchema>;
export type TEditProfileSchemaNames = keyof TEditProfileFormSchema;
