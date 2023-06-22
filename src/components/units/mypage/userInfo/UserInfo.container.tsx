import * as S from "./UserInfo.style";
import { useState } from "react";
import { getBirth, getPhone } from "../../../commons/utils/utils";
import { sendPasswordResetEmail } from "@firebase/auth";
import { IInputAddress } from "../../../commons/inputs/input/input05/input05.types";
import Tab01 from "../../../commons/tabs/tab01/Tab01.container";
import UserInfoCard from "./card/UserInfoCard.container";
import UserInfoFaq from "./faq/UserInfoFaq.container";
import RentalPw from "./rentalPw/RentalPw.container";
import Secession from "./secession/Secession.container";
import FaqDetail from "./faq/detail/FaqDetail.container";
import Input05 from "../../../commons/inputs/input/input05/input05.container";
import Button01 from "../../../commons/buttons/button01/Button01.container";
import Button04 from "../../../commons/buttons/button04/button04.container";
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

export default function UserInfo(props) {
  const TAB_MENUS = [
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
    <S.Wrapper>
      {props.tab === "faqDetail" ? (
        ""
      ) : (
        <Tab01 TAB_MENUS={TAB_MENUS} tabWidth="140px" />
      )}
      <S.Contents>
        {props.tab === "card" ? (
          <UserInfoCard />
        ) : props.tab === "rental" ? (
          <RentalPw />
        ) : props.tab === "faq" ? (
          <UserInfoFaq />
        ) : props.tab === "faqDetail" ? (
          <FaqDetail />
        ) : props.tab === "secession" ? (
          <Secession />
        ) : (
          <S.UserInfo>
            <S.Table01>
              <S.TableItem01 className="t-head">이름</S.TableItem01>
              <S.TableItem01>{props.fetchUser?.name}</S.TableItem01>
              <S.TableItem01 className="t-head">아이디</S.TableItem01>
              <S.TableItem01>{props.fetchUser?.email}</S.TableItem01>
              <S.TableItem01 className="t-head">비밀번호</S.TableItem01>
              <S.TableItem01 className="t-btn">
                <Button04
                  onClickButton={onClickSendPassword}
                  btnText="비밀번호 변경하기"
                />
                <S.PasswordMessage>
                  * 따릉이 아이디(이메일)로 <strong>비밀번호 변경 메일</strong>
                  이 전송됩니다.
                </S.PasswordMessage>
              </S.TableItem01>
              <S.TableItem01 className="t-head">생년월일</S.TableItem01>
              <S.TableItem01>
                {props.fetchUser ? getBirth(props.fetchUser.birth) : ""}
              </S.TableItem01>
              <S.TableItem01 className="t-head">휴대폰 번호</S.TableItem01>
              <S.TableItem01>
                {props.fetchUser ? getPhone(props.fetchUser.phone) : ""}
              </S.TableItem01>
              <S.TableItem01 className="t-head t-address">주소</S.TableItem01>
              <S.TableItem01 className="t-address">
                <Input05
                  addressData={props.fetchUser?.address}
                  inputId="address"
                  onChangeAddress={onChangeUserAddress}
                />
              </S.TableItem01>
            </S.Table01>
            <Button01
              onClickButton={onClickButton}
              btnWidth="200px"
              btnText="저장하기"
            />
          </S.UserInfo>
        )}
      </S.Contents>
    </S.Wrapper>
  );
}
