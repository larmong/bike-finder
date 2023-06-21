import { CustomMouseEvent } from "../../../../commons/types/global.types";

export interface IHeaderUI {
  loginCheck: boolean;
  onClickMoveToMenus: (event: CustomMouseEvent) => void;
  onClickHeaderBtn: (route: string) => () => void;
}
