import { CustomMouseEvent } from "../../../../commons/types/global.types";

export interface IPropsTab01 {
  TAB_MENUS: ITabMenus[];
  tabWidth: string;
}

export interface IPropsTab01UI {
  TAB_MENUS: ITabMenus[];
  tabWidth: string;
  pathname: string;
  onClickMoveToTabMenus: (event: CustomMouseEvent) => void;
}

export interface ITabMenus {
  name: string;
  route: string;
}
export interface ITabWidth {
  tabWidth: string;
}
