import {
  IRadioData,
  IRadioDataClick,
} from "../../../../../commons/inputs/radio/radio02/Radio02.types";

export interface IPropsHistoryBoard {
  boardData: IFetchHistory[];
  setPaymentDateType: IRadioDataClick;
  PAYMENT_DATE_TYPE: IRadioData[];
}

export interface IFetchHistory {
  id: string;
  userId: string;
  bikeId: string;
  rental_date: number;
  rental_office: string;
  return_date: string;
  return_office: string;
}
