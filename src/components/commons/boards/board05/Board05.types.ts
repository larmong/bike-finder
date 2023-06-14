import {
  IRadioData,
  IRadioDataClick,
} from "../../inputs/radio/radio02/Radio02.types";

export interface IPropsBoard05UI {
  BOARD_HEAD: IBoardHead[];
  BOARD_COLUMNS: string;
  paginatedData: IFetchBoard[];
  noticeLength: number;
  pageSize: number;
  handlePageChange: (event: number) => void;
  onClickPaymentMethodType: IRadioDataClick;
  PAYMENT_METHOD_TYPE: IRadioData[];
  onClickPaymentButton: () => void;
  nonPaymentLength: number;
  nonTotalPayment: number;
}

export interface IFetchBoard {
  id: string;
  userId: string;
  date: string;
  product: string;
  price: number;
  state: boolean;
}
export interface IBoardHead {
  string;
}
