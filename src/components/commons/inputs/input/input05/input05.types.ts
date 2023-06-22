export interface IPropsInput05 {
  onChangeAddress: (value: string | IInputAddress, id: string) => void;
  inputId: string;
}

export interface IInputAddress {
  zipcode: string;
  addressFirst: string;
  addressSecond: string;
}
