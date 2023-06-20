export interface IPropsLoginUI {
  email: string;
  password: string;
  onClickLogin: () => void;
  onClickLoginSocial: () => void;
  onChangeLogin: (string) => () => void;
  onClickMoveToLoginMenu: (string) => () => void;
}
