import { CustomChangeEvent } from "../../../../commons/types/global.types";

export interface IPropsUserAuth {
  setUserAuth: (value: boolean) => void;
}

export interface IPropsUserAuthUI {
  pathname: string;
  authNumState: boolean;
  userInfo: IUserInfoState;
  onChangeUserName: (event: CustomChangeEvent) => void;
  onChangeUserInfo: (value: string, id: string) => void;
  onClickAuthNumBtn: () => void;
  onClickButton: () => void;
}

export interface IUserInfoState {
  name: string;
  birth: string;
  phone: string;
  authNum: string;
}
