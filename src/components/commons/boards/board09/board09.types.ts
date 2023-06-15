import {
  IRadioData,
  IRadioDataClick,
} from "../../inputs/radio/radio02/Radio02.types";

export interface IPropsBoard09UI {
  BOARD_COLUMNS: string;
  BOARD_HEAD: IBoardHead[];
  paginatedData: IFetchBoard[];
  noticeLength: number;
  pageSize: number;
  handlePageChange: (event: number) => void;
  SEARCH_TYPE: IRadioData[];
  onClickSearchType: IRadioDataClick;
  allMileage: number;
}

export interface IFetchBoard {
  id: string;
  userId: string;
  date: string;
  price: number;
  product: string;
  rental_date: string;
}
export interface IBoardHead {
  string;
}
