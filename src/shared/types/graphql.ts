import { editAccountSchema } from '@shared/schema/accountSchema';
import { forgetSchema } from '@shared/schema/forgetSchema';
import { loginSchema } from '@shared/schema/loginSchema';
import { registrationSchema } from '@shared/schema/registrationSchema';
import z from 'zod';

/**
 * Login user
 */
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

/**
 * Forget Password
 */
export type TForgetPasswordGraphQLVars = {
  data: {
    email: string;
  };
};
export type TForgetFormSchema = z.infer<typeof forgetSchema>;
export type TForgetSchemaNames = keyof TForgetFormSchema;

/**
 * Logout user
 */
export type TLogoutGraphQLVars = {
  data: {
    contact: string;
    token: string;
  };
};

/**
 * Register user
 */
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

/**
 * Products
 */
export type TProductDetailsGraphQLData = {
  productId: string;
  productName: string;
  productDescription: string;
  stocks: number;
  hasPrescription: boolean;
  sku: string;
  statusDescription: string;
  categoryName: string;
  subCategoryName: string;
  productPriceId: number;
  retailPrice: number;
  salePrice: number;
  salePercentage: number;
  saleStart: string;
  saleEnd: string;
  images: TProductDetailsImagesData[];
};
export type TProductDetailsImagesData = {
  productImagesId: number;
  imagePath: string;
  originalName: string;
  nameInServer: string;
  imageOrder: number;
  isCover: boolean;
  productImageStatus: number;
};
export type TProductDetailsGraphQLDataResponse = {
  getProductById: TProductDetailsGraphQLData;
};

/**
 * Homescreen data
 */
export type TCategoriesGraphQLData = {
  categoryId: string;
  categoryName: string;
  categoryImagePath: string;
  subCategories: {
    subCategoryId: string;
    subCategoryName: string;
  };
};

export type TRecommendedItemsGraplQLData = {
  productId: string;
  productName: string;
  retailPrice: number;
  salePrice: number;
  salePercentage: string;
  saleStart: string;
  saleEnd: string;
  imagePath: string;
};

export type THomepageGraphQLData = {
  getHomepage: {
    categories: TCategoriesGraphQLData[];
    recommendedProducts: TRecommendedItemsGraplQLData[];
  };
};
