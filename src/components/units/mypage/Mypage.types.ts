import { IAddress } from "./userInfo/UserInfo.types";
import { ITabMenus } from "../../commons/tabs/tab01/Tab01.types";
import { ICardInfoType } from "./userInfo/card/UserInfoCard.types";

export interface IPropsMyPageUI {
  TAB_MENUS: ITabMenus[];
  pathname: string;
  tab: string | undefined;
}

export interface IFetchUser {
  id?: string;
  password?: string;
  passwordCheck?: string;
  rentalPassword?: string;
  rentalPasswordCheck?: string;
  name: string;
  birth: string;
  phone: string;
  email: string;
  address: IAddress;
  cardInfo: ICardInfoType;
}
