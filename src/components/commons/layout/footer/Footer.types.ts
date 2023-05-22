import { MouseEvent } from "react";

export interface IFooterUI {
  onClickMoveToMenus: (event: MouseEvent<HTMLElement>) => void;
}
