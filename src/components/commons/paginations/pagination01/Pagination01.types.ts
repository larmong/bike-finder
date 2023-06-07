import { MouseEvent } from "react";

export interface IIsActive {
  isActive?: boolean;
}

export interface IPropsPagination01 {
  noticeLength;
}

export interface IPropsPagination01UI {
  startPage: number;
  lastPage: number;
  nowPage: number;
  onClickPagination: (event: MouseEvent<HTMLElement>) => void;
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
}
