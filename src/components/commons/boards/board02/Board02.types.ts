import { MouseEvent } from "react";

export interface IPropsBoard02UI {
  paginatedNotice: IFetchNotice[];
  noticeLength: number;
  pageSize: number;
  handlePageChange: (event: number) => void;
  onClickBoardDetail: (event: MouseEvent<HTMLElement>) => void;
}

export interface IFetchNotice {
  id: string;
  date: string;
  title: string;
  content: string;
  top: boolean;
}
