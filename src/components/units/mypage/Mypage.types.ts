import { IAddress } from "./userInfo/UserInfo.types";
import { ITabMenus } from "../../commons/tabs/tab01/Tab01.types";

export interface IPropsMyPageUI {
  TAB_MENUS: ITabMenus[];
  pathname: string;
  tab: string | undefined;
}

export interface IFetchUser {
  name: string;
  birth: string;
  phone: string;
  email: string;
  rentalPassword: string;
  address: IAddress;
  id?: string;
}
