import { useState } from "react";
import { useRecoilState } from "recoil";
import { CustomChangeEvent } from "../../../../commons/types/global.types";
import { IInputAddress } from "../../../commons/inputs/input/input05/input05.types";
import { IUserInfoState } from "../userAuth/UserAuth.types";
import { IUserInfoState2 } from "./Membership.types";
import { userInfoState } from "../../../../commons/store/store";
import MembershipUI from "./Membership.presenter";

export default function Membership(props) {
  const [userInfo, setUserInfo] = useRecoilState<IUserInfoState>(userInfoState);
  const [userInfo2, setUserInfo2] = useState<IUserInfoState2>({
    ...userInfo,
    email: "",
    password: "",
    passwordCheck: "",
    rentalPassword: "",
    rentalPasswordCheck: "",
    address: {
      zipcode: "",
      addressFirst: "",
      addressSecond: "",
    },
  });

  const onChangeUserInfo = (event: CustomChangeEvent) => {
    setUserInfo2({
      ...userInfo2,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeUserInfo2 = (value: string | IInputAddress, id: string) => {
    setUserInfo2({
      ...userInfo2,
      [id]: value,
    });
  };

  const onClickButton = () => {
    // 회원가입 완료
    props.setJoinSuccess(true);
    console.log(userInfo2);
  };

  return (
    <MembershipUI
      userInfo={userInfo}
      userInfo2={userInfo2}
      onChangeUserInfo={onChangeUserInfo}
      onChangeUserInfo2={onChangeUserInfo2}
      onClickButton={onClickButton}
    />
  );
}
