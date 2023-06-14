import {
  IRadioData,
  IRadioDataClick,
} from "../../inputs/radio/radio02/Radio02.types";

export interface IPropsBoard04UI {
  BOARD_HEAD: IBoardHead[];
  BOARD_COLUMNS: string;
  paginatedData: IFetchBoard[];
  noticeLength: number;
  pageSize: number;
  handlePageChange: (event: number) => void;
  onClickRefundBtn: () => void;
  onClickPaymentMethodType: IRadioDataClick;
  onClickPaymentDateType: IRadioDataClick;
  PAYMENT_METHOD_TYPE: IRadioData[];
  PAYMENT_DATE_TYPE: IRadioData[];
}

export interface IFetchBoard {
  id: string;
  userId: string;
  payment_date: string;
  use_date: string;
  method: string;
  product: string;
  price: number;
  state: number;
}
export interface IBoardHead {
  string;
}
