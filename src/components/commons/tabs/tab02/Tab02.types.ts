import { CustomMouseEvent } from "../../../../commons/types/global.types";

export interface IPropsTab02 {
  TAB_MENUS: ITabMenus[];
  pathname: string;
  onClickMoveToTabMenus: (event: CustomMouseEvent) => void;
}
export interface IPropsTab02UI {
  TAB_MENUS: ITabMenus[];
  pathname: string;
  onClickMoveToTabMenus: (event: CustomMouseEvent) => void;
}

export interface ITabMenus {
  route: string;
  name: string;
}
