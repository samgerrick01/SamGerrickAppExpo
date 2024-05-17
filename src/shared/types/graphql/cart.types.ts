/** Add Cart */
export type TAddCartGraphQLData = {
  userId: string;
  productId: string;
  productQty: number;
};
export type TAddCartGraphQLVars = {
  input: TAddCartGraphQLData;
};

/** Fetch Cart */
export type TGetCartGraphQLData = {
  cartId: number;
  userId: string;
  productId: string;
  productImage: string;
  productName: string;
  productRetailPrice: number;
  productSalePrice: number;
  productQty: number;
  stocks: number;
  prescriptionRequired: number;
  totalAmount: number;
  cartStatus: number;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};
export type TGetCartGraphQLDataResponse = {
  getCartbyId: TGetCartGraphQLData[];
};

/** Update Cart */
export type TUpdateCartGraphQLData = {
  cartId: number;
  userId: string;
  productId: string;
  productQty: number;
};
export type TUpdateCartGraphQLVars = {
  input: TUpdateCartGraphQLData;
};

/** Check Product List */

export type TDeleteCartGraphQLData = [];

export type TDeleteCartGraphQLVars = {
  input: TDeleteCartGraphQLData;
};
