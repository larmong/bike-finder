import { IInputAddress } from "../../../commons/inputs/input/input05/input05.types";
import { ITabMenus } from "../../../commons/tabs/tab01/Tab01.types";
import { IFetchUser } from "../Mypage.types";

export interface IPropsUserInfo {
  tab: string | undefined;
  fetchUser: IFetchUser;
}

export interface IPropsUserInfoUI {
  tab: string | undefined;
  TAB_MENUS: ITabMenus[];
  fetchUser: IFetchUser;
  onClickSendPassword: () => void;
  onChangeUserAddress: (value: string | IInputAddress, id: string) => void;
  onClickButton: () => void;
  tabLength: number;
}

export interface IAddress {
  zipcode: string;
  addressFirst: string;
  addressSecond: string;
}
