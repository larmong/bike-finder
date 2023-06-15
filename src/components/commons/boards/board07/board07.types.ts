import {
  IRadioData,
  IRadioDataClick,
} from "../../inputs/radio/radio02/Radio02.types";

export interface IPropsBoard07UI {
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
  bikeId: string;
  rental_date: number;
  rental_office: string;
  return_date: string;
  return_office: string;
}
export interface IBoardHead {
  string;
}
