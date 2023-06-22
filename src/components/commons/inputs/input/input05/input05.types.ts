export interface IPropsInput05 {
  onChangeAddress: (value: string | IInputAddress, id: string) => void;
  inputId: string;
  inputClass?: string;
  addressData?: IInputAddress;
}

export interface IInputAddress {
  zipcode: string;
  addressFirst: string;
  addressSecond: string;
}
