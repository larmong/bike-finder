import { MouseEvent } from "react";

export interface IHeaderUI {
  loginCheck: boolean;
  onClickMoveToMenus: (event: MouseEvent<HTMLElement>) => void;
  onClickHeaderBtn: (route: string) => () => void;
}
