/** Product Details */
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

/** Homescreen data */
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
  salePercentage: number;
  saleStart: string;
  saleEnd: string;
  imagePath: string;
  stocks: number;
};

export type THomepageGraphQLData = {
  getHomepage: {
    categories: TCategoriesGraphQLData[];
    recommendedProducts: TRecommendedItemsGraplQLData[];
    bannerURL: string;
  };
};

/** Category Products data */
export type TCategoryProductsGraphQLData = {
  productId: string;
  productName: string;
  retailPrice: number;
  salePrice: number;
  salePercentage: number;
  saleStart: string;
  saleEnd: string;
  imagePath: string;
  stocks: number;
};

export type TCategoryProductGraphQL = {
  products: TCategoryProductsGraphQLData[];
  totalCount: number;
};

export type TCategoryProductsGraphQLResponse = {
  getProductsViaCategory: TCategoryProductGraphQL;
};

/** Search Products data */
export type TSearchProductsGraphQLData = {
  productId: string;
  productName: string;
  productDescription: string;
  stocks: number;
  hasPrescription: boolean;
  sku: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  statusDescription: string;
  categoryName: string;
  subCategoryName: string;
  productPriceId: number;
  retailPrice: number;
  salePrice: number;
  salePercentage: number;
  saleStart: string;
  saleEnd: string;
  imagePath: string;
};

export type TSearchProductsGraphQLResponse = {
  searchProducts: TSearchProductsGraphQLData[];
};

/** Order List response */
export type TDeliveryAddressData = {
  lineID: number;
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

export type TOrderDetailsData = {
  productName: string;
  lineID: number;
  orderDetailsID: string;
  orderID: string;
  productID: string;
  quantity: number;
  orderTotalItem: number;
  orderTotalItemDiscount: number;
  hasPrescription: boolean;
  imagePath: string;
  salePricePerItem: number;
  retailPricePerItem: number;
};

export type orderStatusTypes =
  | 'Completed'
  | 'Pending for approval'
  | 'Out for delivery'
  | 'Packed and ready to ship'
  | 'Approved'
  | 'Declined'
  | 'Cancelled';

// export type cancellationRemarksTypes =
//   | 'Out of Stock'
//   | 'Inventory Discrepancy'
//   | 'Pricing Error'
//   | 'Product Safety Issue'
//   | 'System Error'
//   | 'Order Edit Request'
//   | '3PL Issue'
//   | 'Others';

export type PrescriptionData = {
  lineID: string;
  orderID: string;
  imagePath: string;
  originalName: string;
  nameInServer: string;
  size: string;
};

export type TOrderListGraphQLData = {
  fullName: string;
  deliveryTimeDesc: string;
  deliveryTypeDesc: string;
  deliveryOptionDesc: string;
  paymentStatusName: string;
  paymentOption: {
    paymentOptionId: number;
    paymentOptionName: string;
    paymentOptionCode: string;
  };
  deliveryAddress: TDeliveryAddressData;
  orderDetails: TOrderDetailsData[];
  lineID: number;
  orderID: string;
  referenceNo: string;
  userID: string;
  orderAddressID: string;
  orderTotal: number;
  orderTotalDiscount: number;
  shippingFeeTotal: number;
  shippingFeeTotalDiscount: number;
  subTotal: number;
  orderStatusCategoryId: number;
  orderStatus: orderStatusTypes;
  orderStatusHistory: {
    orderStatusCategoryId: number;
    orderStatus: string;
    remarks: string;
  };
  prescriptions: PrescriptionData[];
  cancelledReason: string;
  cancelledReasonId: number;
  cancelledRemarks: string;
  cancelledDate: Date;
  cancelledBy: string;
  paymentOptionId: number;
  paymentStatusId: number;
  paymentReferenceNo: string;
  deliveryTypeId: number;
  deliveryTimeId: number;
  estimatedArrivalDate: Date;
  withPrescription: boolean;
  createdDate: Date;
  createdBy: string;
  modifiedDate: string;
  modifiedBy: string;
};

export type TOrderListGraphQLResponse = {
  getAllOrder: TOrderListGraphQLData[];
};

/** Order details response */
