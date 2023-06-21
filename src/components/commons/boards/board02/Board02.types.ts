import { CustomMouseEvent } from "../../../../commons/types/global.types";

export interface IPropsBoard02UI {
  BOARD_TABLE_TITLE: IBoardTable[];
  boardTableColumns: string;
  paginatedNotice: IFetchNotice[];
  noticeLength: number;
  pageSize: number;
  handlePageChange: (event: number) => void;
  onClickBoardDetail: (event: CustomMouseEvent) => void;
}

export interface IFetchNotice {
  id: string;
  date: string;
  title: string;
  content: string;
  top: boolean;
}
export interface IBoardTable {
  string;
}
