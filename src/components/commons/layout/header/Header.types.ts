import { MouseEvent } from "react";

export interface IHeaderUI {
  accessToken: string;
  onClickMoveToMenus: (event: MouseEvent<HTMLElement>) => void;
}
