import { CustomMouseEvent } from "../../../../../commons/types/global.types";

export interface IPropsNoticeBoard {
  handleSearch: (keyword: string) => void;
  onClickBoardDetail: (event: CustomMouseEvent) => void;
  boardData: IFetchNotice[];
}

export interface IFetchNotice {
  id: string;
  date: string;
  title: string;
  content: string;
  top: boolean;
}
