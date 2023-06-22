import { useState } from "react";
import { sendPasswordResetEmail } from "@firebase/auth";
import UserInfoUI from "./UserInfo.presenter";
import { ITabMenus } from "../../../commons/tabs/tab01/Tab01.types";
import { IPropsUserInfo } from "./UserInfo.types";
import { IInputAddress } from "../../../commons/inputs/input/input05/input05.types";
import {
  authService,
  db,
} from "../../../../commons/libraries/firebase/firebase.config";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
  setDoc,
} from "firebase/firestore";

export default function UserInfo(props: IPropsUserInfo) {
  const TAB_MENUS: ITabMenus[] = [
    {
      name: "개인정보",
      route: "mypage/userInfo",
    },
    {
      name: "환승카드",
      route: "mypage/userInfo/card",
    },
    {
      name: "대여비밀번호",
      route: "mypage/userInfo/rentalPw",
    },
    {
      name: "문의내역",
      route: "mypage/userInfo/faq",
    },
    {
      name: "회원탈퇴",
      route: "mypage/userInfo/secession",
    },
  ];
  const [userInfo, setUserInfo] = useState({
    address: {
      zipcode: "",
      addressFirst: "",
      addressSecond: "",
    },
  });

  const onChangeUserAddress = (value: string | IInputAddress, id: string) => {
    setUserInfo({
      ...props.fetchUser,
      [id]: value,
    });
  };

  const onClickSendPassword = async () => {
    await sendPasswordResetEmail(authService, props.fetchUser.email);
    alert(
      `회원님의 아이디(${props.fetchUser.email})로 비밀번호 변경 메일이 전송되었습니다!`
    );
  };

  const onClickButton = async () => {
    if (
      userInfo.address.zipcode === "" &&
      userInfo.address.addressFirst === "" &&
      userInfo.address.addressSecond === ""
    ) {
      alert("변경된 정보가 없습니다.");
    } else {
      if (
        userInfo.address.zipcode === "" ||
        userInfo.address.addressFirst === ""
      ) {
        userInfo.address.zipcode = props.fetchUser.address.zipcode;
        userInfo.address.addressFirst = props.fetchUser.address.addressFirst;
      } else if (userInfo.address.addressSecond === "") {
        userInfo.address.addressSecond = props.fetchUser.address.addressSecond;
      } else {
        try {
          const data = query(
            collection(db, "user"),
            where(documentId(), "==", props.fetchUser.id)
          );
          const result = await getDocs(data);
          result.forEach((doc) => {
            setDoc(doc.ref, {
              ...userInfo,
            });
          });
          alert("회원님의 정보가 저장되었습니다.");
        } catch (error) {}
      }
    }
  };

  return (
    <UserInfoUI
      tab={props.tab}
      TAB_MENUS={TAB_MENUS}
      fetchUser={props.fetchUser}
      onClickSendPassword={onClickSendPassword}
      onChangeUserAddress={onChangeUserAddress}
      onClickButton={onClickButton}
    />
  );
}
