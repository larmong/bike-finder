import { CustomMouseEvent } from "../../../../commons/types/global.types";

export interface IPropsBoard03UI {
  BOARD_TABLE_TITLE: IBoardTable[];
  boardTableColumns: string;
  paginatedData: IFetchData[];
  noticeLength: number;
  pageSize: number;
  handlePageChange: (event: number) => void;
  onClickBoardDetail: (event: CustomMouseEvent) => void;
}

export interface IFetchData {
  id: string;
  date: string;
  title: string;
  content: string;
  state: boolean;
}
export interface IBoardTable {
  string;
}
