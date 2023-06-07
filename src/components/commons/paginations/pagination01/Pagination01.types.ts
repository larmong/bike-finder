import { MouseEvent } from "react";

export interface IIsActive {
  isActive?: boolean;
}

export interface IPagination01Props {
  totalPage?: number;
}

export interface Pagination01UIProps {
  startPage: number;
  lastPage: number;
  nowPage: number;
  onClickPagination: (event: MouseEvent<HTMLElement>) => void;
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
}
