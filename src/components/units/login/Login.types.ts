import {
  CustomChangeEvent,
  CustomMouseEvent,
} from "../../../commons/types/global.types";

export interface IPropsLoginUI {
  email: string;
  password: string;
  onClickLogin: () => void;
  onClickLoginSocial: (event: CustomMouseEvent) => void;
  onChangeLogin: (name: string) => (event: CustomChangeEvent) => void;
  onClickMoveToLoginMenu: (route: string) => () => void;
}
