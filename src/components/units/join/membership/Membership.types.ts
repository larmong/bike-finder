import { IInputAddress } from "../../../commons/inputs/input/input05/input05.types";
import { IUserInfoState } from "../userAuth/UserAuth.types";
import { CustomChangeEvent } from "../../../../commons/types/global.types";
import { ICardInfoType } from "../../mypage/userInfo/card/UserInfoCard.types";
import { IFetchUser } from "../../mypage/Mypage.types";

export interface IPropsMembership {
  setJoinSuccess: (value: boolean) => void;
}

export interface IPropsMembershipUI {
  userInfo: IUserInfoState;
  userInfo2: IFetchUser;
  onChangeUserInfo: (event: CustomChangeEvent) => void;
  onChangeUserInfo2: (value: string | IInputAddress, id: string) => void;
  onClickButton: () => void;
}

export interface IUserInfoState2 {
  name: string;
  birth: string;
  phone: string;
  email: string;
  password: string;
  passwordCheck: string;
  rentalPassword: string;
  rentalPasswordCheck: string;
  address: IInputAddress;
  cardInfo: ICardInfoType;
}
