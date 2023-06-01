export interface IPropsBoard {
  isHead: boolean;
  fetchData: IFetchData[];
}

export interface IPropsBoardUI {
  fetchData: IFetchData[];
  isHead: boolean;
}

export interface IFetchData {
  id: string;
  title: string;
  content: string;
  company?: string;
  date?: string;
}

export interface IPropsBoardItem01 {
  titleIcon: boolean;
  title: string | undefined;
  content: string | undefined;
  company: string | undefined;
  date: string | undefined;
}
