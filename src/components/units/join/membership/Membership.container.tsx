import { useState } from "react";
import { useRecoilState } from "recoil";
import { CustomChangeEvent } from "../../../../commons/types/global.types";
import { IInputAddress } from "../../../commons/inputs/input/input05/input05.types";
import { IUserInfoState } from "../userAuth/UserAuth.types";
import { IPropsMembership, IUserInfoState2 } from "./Membership.types";
import { userInfoState } from "../../../../commons/store/store";
import MembershipUI from "./Membership.presenter";
import {
  authService,
  db,
} from "../../../../commons/libraries/firebase/firebase.config";
import { doc, setDoc } from "@firebase/firestore";
import { collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "@firebase/auth";

export default function Membership(props: IPropsMembership) {
  const [userInfo, setUserInfo] = useRecoilState<IUserInfoState>(userInfoState);
  const { authNum, ...newUserInfo } = userInfo;
  const [userInfo2, setUserInfo2] = useState<IUserInfoState2>({
    ...newUserInfo,
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
    cardInfo: {
      type: "",
      number: "",
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
  const onClickButton = async () => {
    const values = Object.values(userInfo2);
    const isAllFilled = values.every((value) => {
      if (typeof value === "object" && value !== null) {
        const subValues = Object.values(value);
        return subValues.every((subValue) => subValue !== "");
      } else {
        return value !== "";
      }
    });

    if (!isAllFilled) {
      alert("회원가입을 위한 항목을 모두 입력해주세요.");
    } else if (
      userInfo2.password.length < 8 ||
      userInfo2.passwordCheck.length < 8
    ) {
      alert("비밀번호를 8자리 이상 입력해주세요.");
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(
        userInfo2.email
      )
    ) {
      alert("이메일을 확인해주세요.");
    } else if (userInfo2.password !== userInfo2.passwordCheck) {
      alert("비밀번호가 같지 않습니다.");
    } else if (
      userInfo2.rentalPassword.length < 4 ||
      userInfo2.rentalPasswordCheck.length < 4
    ) {
      alert("렌탈 비밀번호를 4자리 이상 입력해주세요.");
    } else if (userInfo2.rentalPassword !== userInfo2.rentalPasswordCheck) {
      alert("렌탈 비밀번호가 같지 않습니다.");
    } else {
      const { password, passwordCheck, rentalPasswordCheck, ...newUser } =
        userInfo2;
      try {
        const docRef = doc(collection(db, "user"));
        await setDoc(docRef, {
          ...newUser,
          use: { minute: "0", distance: "0" },
        });

        await createUserWithEmailAndPassword(
          authService,
          userInfo2.email,
          userInfo2.password
        );
        props.setJoinSuccess(true);
      } catch (error) {}
    }
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
