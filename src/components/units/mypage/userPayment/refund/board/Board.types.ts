import {
  IRadioData,
  IRadioDataClick,
} from "../../../../../commons/inputs/radio/radio02/Radio02.types";

export interface IPropsRefundBoard {
  boardData: IFetchRefund[];
  PAYMENT_DATE_TYPE: IRadioData[];
  setPaymentDateType: IRadioDataClick;
}

export interface IFetchRefund {
  id: string;
  userId: string;
  date: string;
  price: number;
  product: string;
  state: boolean;
  note: number;
}
