import {
  IRadioData,
  IRadioDataClick,
} from "../../../../../commons/inputs/radio/radio02/Radio02.types";

export interface IPropsMileageBoard {
  boardData: IFetchMileage[];
  setPaymentDateType: IRadioDataClick;
  PAYMENT_DATE_TYPE: IRadioData[];
  allMileage: number;
}

export interface IFetchMileage {
  id: string;
  userId: string;
  date: string;
  price: number;
  product: string;
  rental_date: string;
}
