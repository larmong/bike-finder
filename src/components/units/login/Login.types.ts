import {
  CustomChangeEvent,
  CustomMouseEvent,
} from "../../../commons/types/global.types";

export interface IPropsLoginUI {
  loginInfo: ILoginInfo;
  onClickLogin: () => void;
  onClickLoginSocial: (event: CustomMouseEvent) => void;
  onChangeLogin: (event: CustomChangeEvent) => void;
  onClickMoveToLoginMenu: (route: string) => () => void;
}

export interface ILoginInfo {
  email: string;
  password: string;
}

export interface IMenuList {
  name: string;
  route: string;
}

export interface IAuthList {
  name: string;
  image: string;
}
