export interface IPropsInquiryFaqBoard {
  isHead: IIsHead;
  fetchData: IPropsBoardItem[];
}

export type IIsHead = boolean;

export interface IPropsBoardItem {
  titleIcon: IIsHead;
  title: string | undefined;
  content: string | undefined;
  company: string | undefined;
  date: string | undefined;
}
