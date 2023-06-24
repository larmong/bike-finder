import { CustomMouseEvent } from "../../../../commons/types/global.types";
import { IBoardDataType } from "../../../units/mypage/userInfo/faq/board/Board.types";

// board commons (props, style, board detail)
export interface IPropsBoard {
  onClickBoardDetail: (event: CustomMouseEvent) => void;
  boardData: IBoardDataType[];
}
export interface IIsColumns {
  isColumns?: string;
}
export interface IBoardDetailType {
  title: IBoardDetailTitleType[];
  columns: string;
}
export type IBoardDetailTitleType = string;
