export interface IPropsBoardDetail {
  fetchBoard: IFetchBoard | undefined;
}

export interface IFetchBoard {
  title: string;
  date: string;
  content: string;
  top: boolean;
}
