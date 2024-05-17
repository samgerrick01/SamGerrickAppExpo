/** Checkout */
export type TCheckoutGraphQLData = {
  userId: string;
  cartId: number;
  addressType: string;
  recipientName: string;
  recipientContactNumber: string;
  recipientNameAddress: string;
  productId: string;
  productImage: string;
  productName: string;
  productSalePrice: string;
  productRetailPrice: string;
  productQty: number;
  prescriptionRequired: number;
  cartStatus: number;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

export type TCheckoutGraphQLResponse = {
  getCheckOutDetails: TCheckoutGraphQLData[];
};

/** Place Order */
export type TPlaceOrderGraphQLData = {
  fullName: string;
  deliveryTimeDesc: string;
  deliveryTypeDesc: number;
  paymentOptionCode: number;
  paymentStatusName: string;
  lineID: string;
  orderID: string;
  referenceNo: string;
  userID: string;
  orderAddressID: string;
  orderTotal: number;
  orderTotalDiscount: number;
  shippingFeeTotal: number;
  shippingFeeTotalDiscount: number;
  subTotal: number;
  orderStatusCategoryId: string;
  cancelledStatusId: string;
  cancelledDate: string;
  cancelledBy: string;
  paymentOptionId: string;
  paymentStatusId: string;
  paymentReferenceNo: string;
  deliveryTypeId: string;
  deliveryTimeId: string;
  estimatedArrivalDate: string;
  withPrescription: boolean;
  orderStatus: string;
  createdBy: string;
  createdDate: string;
  modifiedBy: string;
  modifiedDate: string;
  deliveryAddress: {
    lineID: string;
    orderID: string;
    recipientName: string;
    recipientContactNumber: string;
    province: string;
    city: string;
    barangay: string;
    houseFloorNumberStreet: string;
    zipCode: string;
    landmark: string;
    locationType: string;
  };
  prescriptions: {
    lineID: string;
    orderID: string;
    imagePath: string;
    originalName: string;
    nameInServer: string;
  }[];
  orderDetails: {
    productName: string;
    lineID: string;
    orderDetailsID: string;
    orderID: string;
    productID: string;
    quantity: number;
    orderTotalItem: number;
    orderTotalItemDiscount: number;
    imagePath: string;
    retailPricePerItem: number;
    salePricePerItem: number;
  }[];
};

export type TPlaceOrderGraphQLResponse = {
  placeOrder: TPlaceOrderGraphQLData;
};

export type TPlaceOrderGraphQLVars = {
  order: {
    isCheckoutFromCart: boolean;
    order: {
      userID: string;
      shippingOption?: string;
      paymentOptionId?: number;
      orderAddressID: string;
      orderTotal: number;
      orderTotalDiscount?: number;
      shippingFeeTotal: number;
      shippingFeeTotalDiscount?: number;
      subTotal: number;
      orderStatusCategoryId?: number;
      deliveryOptionId?: number;
      deliveryTimeId?: number;
      estimatedArrivalDate?: string;
      withPrescription: boolean;
      orderDetails: TOrderDetailsData[];
      prescriptions: TPrescriptionData[];
    };
  };
};

export type TOrderDetailsData = {
  productID: string;
  quantity: number;
  orderTotalItem: number;
  orderTotalItemDiscount: number;
};

export type TPrescriptionData = {
  prescriptionLineID: number;
};

/** Prescription */
export type TPrescriptionGraphQLData = {
  isSuccessful: boolean;
  message: string;
  lineId: number;
  imagePath: string;
  originalName: string;
  nameInServer: string;
};

export type TPrescriptionGraphQLResponse = {
  uploadPrescription: TPrescriptionGraphQLData;
};

/** Delivery Options */
export type TDeliveryOptionGraphQLData = {
  deliveryOptionId: number;
  deliveryOption: string;
  deliveryOptionDesc: string;
  deliveryRate: number;
};

export type TDeliveryOptionGraphQLResponse = {
  getAllDeliveryOption: TDeliveryOptionGraphQLData[];
};

/** Payment Options */

export type TPaymentOptionGraphQLData = {
  paymentOptionId: number;
  paymentOptionName: string;
  paymentOptionCode: string;
};

export type TPaymentOptionGraphQLResponse = {
  getAllPaymentOption: TPaymentOptionGraphQLData[];
};
