import { CustomMouseEvent } from "../../../../../commons/types/global.types";
import { IFetchNotice } from "../Notice.types";

export interface IPropsBoard {
  BOARD_DETAIL: IBoardDetailType;
  boardData: IFetchNotice[];
  onClickBoardDetail: (event: CustomMouseEvent) => void;
}

export interface IBoardDetailType {
  title: IBoardDetailTitleType[];
  columns: string;
}

export type IBoardDetailTitleType = string;
