import { CustomMouseEvent } from "../../../../../../commons/types/global.types";

export interface IPropsFaqBoard {
  handleSearch: (keyword: string) => void;
  onClickBoardDetail: (event: CustomMouseEvent) => void;
  boardData: IFetchFaq[];
}

export interface IFetchFaq {
  date: string;
  userId: string;
  title: string;
  content: string;
  answer: string;
  state: boolean;
  id: string;
}
