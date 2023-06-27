import { CustomMouseEvent } from "../../../../commons/types/global.types";

export interface IHeaderUI {
  loginUser: string | null;
  loginCheck: boolean;
  mobileMenu: boolean;
  onClickMobileMenuOpen: () => void;
  onClickMoveToMainPage: () => void;
  onClickHeaderBtn: (route: string) => () => void;
  onClickMoveToMenus: (event: CustomMouseEvent) => void;
  onClickMoveToMobileMenus: (event: CustomMouseEvent) => void;
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
export interface IHeaderMBtn {
  name: string;
  route: string;
  type: string;
}

export interface IIsActive {
  isActive: boolean;
}
