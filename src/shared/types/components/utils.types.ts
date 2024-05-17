export type THeadersArray = {
  Authorization?: boolean | string;
  UserID?: boolean | number;
  'Content-Type'?: boolean;
};

export type TReturnHeaders = {
  Authorization?: string;
  UserID?: string;
  'Content-Type'?: string;
};
export type TValidationResponseError = {
  message: string;
  extensions: {
    fieldName: string;
  };
};

export type TValidationError = {
  message: string;
  fieldName: string;
};

export type TErrorResponse = Partial<TValidationError>[];
