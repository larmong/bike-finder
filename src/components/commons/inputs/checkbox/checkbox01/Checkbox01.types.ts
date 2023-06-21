import { CustomMouseEvent } from "../../../../../commons/types/global.types";

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
