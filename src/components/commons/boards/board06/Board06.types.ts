import {
  IRadioData,
  IRadioDataClick,
} from "../../inputs/radio/radio02/Radio02.types";

export interface IPropsBoard06UI {
  BOARD_COLUMNS: string;
  BOARD_HEAD: IBoardHead[];
  paginatedData: IFetchBoard[];
  noticeLength: number;
  pageSize: number;
  handlePageChange: (event: number) => void;
  SEARCH_TYPE: IRadioData[];
  onClickSearchType: IRadioDataClick;
}

export interface IFetchBoard {
  id: string;
  userId: string;
  date: string;
  price: number;
  product: string;
  state: boolean;
  note: number;
}
export interface IBoardHead {
  string;
}
