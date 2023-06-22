import { CustomMouseEvent } from "../../../../commons/types/global.types";

export interface IHeaderUI {
  loginCheck: boolean;
  onClickMoveToMenus: (event: CustomMouseEvent) => void;
  onClickHeaderBtn: (route: string) => () => void;
}

export interface IHeaderMenus {
  name: string;
  route: string;
}
export interface IHeaderBtn {
  name: string;
  route: string;
  type: string;
}

export interface IIsActive {
  isActive: boolean;
}
