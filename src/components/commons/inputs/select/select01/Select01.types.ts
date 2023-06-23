export interface IPropsSelect01 {
  isSelect?: string;
  SELECT_LIST: IAuthList[];
  onClickSelectValue: (value: string, inputId: string) => void;
  inputId: string;
  cardType: string | number | undefined;
}

export interface IIsSelect {
  isSelect?: string;
}

export type IAuthList = string;
