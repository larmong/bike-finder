import {
  IRadioData,
  IRadioDataClick,
} from "../../../../../commons/inputs/radio/radio02/Radio02.types";
import { CustomMouseEvent } from "../../../../../../commons/types/global.types";

export interface IPropsBillingBoard {
  boardData: IFetchBilling[];
  PAYMENT_METHOD_TYPE: IRadioData[];
  setPaymentMethodType: IRadioDataClick;
  onClickPaymentButton: () => void;
  nonPaymentLength: number;
  nonTotalPayment: number;
  onClickCb: (event: CustomMouseEvent) => void;
}

export interface IFetchBilling {
  id: string;
  userId: string;
  date: string;
  product: string;
  price: number;
  state: boolean;
}
