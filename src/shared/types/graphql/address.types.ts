export interface TGetAddressGraphQLData {
  userId: string;
  addressID: string;
  recipientName: string;
  recipientContactNumber: string;
  province: string;
  city: string;
  barangay: string;
  houseFloorNumberStreet: string;
  zipCode: string;
  landmark: string;
  locationType: string;
  defaultAddress: boolean;
  createdAt: Date;
  createdBy: string;
}

export type TGetAddressGraphQLResponse = {
  getDeliveryAddressbyId: TGetAddressGraphQLData[];
};

export type TUpdateAddressGraphQLResponse = {
  updateDeliveryAddress: TGetAddressGraphQLData;
};

export type TAddAddressGraphQLResponse = {
  addDeliveryAddress: TGetAddressGraphQLData;
};

export type TGetProvinceGraphQLData = {
  provinceCode: string;
  provinceName: string;
};

export type TGetProvinceGraphQLResponse = {
  getProvinces: TGetProvinceGraphQLData[];
};

export type TGetCityGraphQLData = {
  cityCode: string;
  cityName: string;
};

export type TGetCityGraphQLResponse = {
  getCitiesByProvince: TGetCityGraphQLData[];
};

export type TGetBarangayGraphQLData = {
  barangayCode: string;
  barangayName: string;
};

export type TGetBarangayGraphQLResponse = {
  getBarangaysByCity: TGetBarangayGraphQLData[];
};
