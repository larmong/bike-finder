import { MouseEvent } from "react";
export type CustomMouseEvent = MouseEvent<HTMLElement>;

export interface IPropsCheckbox01 {
  onClickCb: (event: CustomMouseEvent) => void;
  CheckboxCont?: string;
  CheckboxCont2?: string;
}
export interface IUserInfo {
  name: string;
  birth: string | number;
  phone: string | number;
  authNum: string | number;
}
