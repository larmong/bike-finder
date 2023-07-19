import { CustomMouseEvent } from "../../../../../../commons/types/global.types";
import {
  IRadioData,
  IRadioDataClick,
} from "../../../../../commons/inputs/radio/radio02/Radio02.types";

export interface IPropsPaymentBoard {
  boardData: IFetchPayment[];
  onClickRefundBtn: (event: CustomMouseEvent) => void;
  setPaymentMethodType: IRadioDataClick;
  setPaymentDateType: IRadioDataClick;
  PAYMENT_METHOD_TYPE: IRadioData[];
  PAYMENT_DATE_TYPE: IRadioData[];
}

export interface IFetchPayment {
  id: string;
  userId: string;
  use_date: string;
  state: number;
  product: string;
  price: number;
  payment_date: string;
  method: string;
}
