import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store/store";
import {
  CustomChangeEvent,
  CustomMouseEvent,
} from "../../../../commons/types/global.types";
import UserAuthUI from "./UserAuth.presenter";
import { IPropsUserAuth } from "./UserAuth.types";

export default function UserAuth(props: IPropsUserAuth) {
  const router = useRouter();

  const [authNumState, setAuthNumState] = useState<boolean>(false);
  const [checkBox, setCheckBox] = useState<boolean>(false);
  const [cbState, setCbState] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const onChangeUserName = (event: CustomChangeEvent) => {
    setUserInfo({
      ...userInfo,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeUserInfo = (value: string, id: string) => {
    setUserInfo({
      ...userInfo,
      [id]: value,
    });
  };

  const onClickCb = (event: CustomMouseEvent) => {
    const target = event.currentTarget as HTMLInputElement;
    setCheckBox(target.checked);
  };

  const onClickAuthNumBtn = () => {
    if (String(userInfo.phone).length === 11) {
      setAuthNumState(true);
    } else {
      alert("핸드폰 번호를 확인해주세요.");
    }
  };

  const onClickButton = () => {
    if (checkBox && cbState) {
      props.setUserAuth(true);
    } else {
      if (!checkBox) {
        alert("약관에 동의해주세요.");
      } else if (!cbState) {
        alert("본인인증을 진행해주세요.");
      }
    }
  };

  useEffect(() => {
    const isAnyPropertyEmpty = Object.values(userInfo)
      .map((value) => value === "")
      .includes(true);
    setCbState(!isAnyPropertyEmpty);
  }, [userInfo]);

  return (
    <UserAuthUI
      pathname={router.pathname}
      userInfo={userInfo}
      authNumState={authNumState}
      onChangeUserName={onChangeUserName}
      onChangeUserInfo={onChangeUserInfo}
      onClickAuthNumBtn={onClickAuthNumBtn}
      onClickCb={onClickCb}
      onClickButton={onClickButton}
    />
  );
}
