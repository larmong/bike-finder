import {
  IRadioData,
  IRadioDataClick,
} from "../../inputs/radio/radio02/Radio02.types";

export interface IPropsBoard08UI {
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
  type: number;
  date: string;
  product: string;
  rental_date: number;
  return_date: string;
  state: boolean;
}
export interface IBoardHead {
  string;
}
