export interface IFetchUser {
  name: string;
  birth: string;
  phone: string;
  email: string;
  rentalPassword: string;
  address: IAddress;
}

export interface IAddress {
  zipcode: string;
  addressFirst: string;
  addressSecond: string;
}
