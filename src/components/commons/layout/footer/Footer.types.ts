import { CustomMouseEvent } from "../../../../commons/types/global.types";

export interface IFooterUI {
  onClickMoveToMenus: (event: CustomMouseEvent) => void;
}

export interface IFooterMenus {
  name: string;
  route: string;
}
export interface ISnsMenus {
  name: string;
  link: string;
  image: string;
}

export interface IIsActive {
  isActive: boolean;
}
