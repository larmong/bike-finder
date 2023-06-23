import {
  CustomChangeEvent,
  CustomMouseEvent,
} from "../../../../../commons/types/global.types";
import { IFetchUser } from "../../Mypage.types";

export interface ICardInfoType {
  type: string;
  number: string;
}

export interface IPropsUserInfoCard {
  onClickCb?: (event: CustomMouseEvent) => void;
  fetchUser: IFetchUser;
}
