import { MouseEvent } from "react";

export interface IHeaderUI {
  onClickMoveToMenus: (event: MouseEvent<HTMLElement>) => void;
}
