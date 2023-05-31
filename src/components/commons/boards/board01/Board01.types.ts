export interface IPropsBoard {
  fetchHelped: IFetchHelped[];
}

export interface IFetchHelped {
  id: string;
  title: string;
  content: string;
  company: string;
  date: string;
}

export interface IPropsBoardItem01 {
  title: string | undefined;
  content: string | undefined;
  company: string | undefined;
  date: string | undefined;
}
