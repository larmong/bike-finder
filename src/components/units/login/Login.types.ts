import { ChangeEvent, MouseEvent } from "react";

export interface IPropsLoginUI {
  email: string;
  password: string;
  onClickLogin: () => void;
  onClickLoginSocial: (event: MouseEvent<HTMLElement>) => void;
  onChangeLogin: (
    name: string
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveToLoginMenu: (route: string) => () => void;
}
