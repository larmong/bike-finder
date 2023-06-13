export interface IPropsBoardDetail02 {
  fetchBoard: IFetchBoard | undefined;
}

export interface IFetchBoard {
  userId: string;
  date: string;
  title: string;
  content: string;
  answer: string;
  state: boolean;
}
