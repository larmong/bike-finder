import { MouseEvent } from "react";

export interface IPropsTab01 {
  TAB_MENUS: ITabMenus[];
  pathname: string;
  onClickMoveToTabMenus: (event: MouseEvent<HTMLElement>) => void;
}

export interface ITabMenus {
  name: string;
  router: string;
}
