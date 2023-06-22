import * as S from "./UserInfo.style";
import Tab01 from "../../../commons/tabs/tab01/Tab01.container";
import UserInfoCard from "./card/UserInfoCard.container";
import UserInfoFaq from "./faq/UserInfoFaq.container";
import RentalPw from "./rentalPw/RentalPw.container";
import Secession from "./secession/Secession.container";
import Input01 from "../../../commons/inputs/input/input01/Input01.container";
import { useState } from "react";
import Button01 from "../../../commons/buttons/button01/Button01.container";
import FaqDetail from "./faq/detail/FaqDetail.container";
import { getAddress, getBirth, getPhone } from "../../../commons/utils/utils";
import Input05 from "../../../commons/inputs/input/input05/input05.container";
import { IInputAddress } from "../../../commons/inputs/input/input05/input05.types";
import { CustomChangeEvent } from "../../../../commons/types/global.types";

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
    password: "",
    changePw: "",
    changePwCheck: "",
    address: {
      zipcode: "",
      addressFirst: "",
      addressSecond: "",
    },
  });

  const onChangeUserInfo = (event: CustomChangeEvent) => {
    setUserInfo({
      ...userInfo,
      [event.target.id]: event.target.value,
    });
  };
  const onChangeUserAddress = (value: string | IInputAddress, id: string) => {
    setUserInfo({
      ...userInfo,
      [id]: value,
    });
  };

  const onClickButton = () => {
    // 개인정보 저장
    console.log(userInfo);
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
              <S.TableItem01 className="t-head">현재 비밀번호</S.TableItem01>
              <S.TableItem01>
                <Input01
                  inputType="password"
                  onChangeValue={onChangeUserInfo}
                  valueData={userInfo.password}
                  inputId="password"
                  placeholderData="비밀번호를 8자리 이상 입력해주세요."
                />
              </S.TableItem01>
              <S.TableItem01 className="t-head">변경할 비밀번호</S.TableItem01>
              <S.TableItem01>
                <Input01
                  inputType="password"
                  onChangeValue={onChangeUserInfo}
                  valueData={userInfo.changePw}
                  inputId="changePw"
                  placeholderData="변경할 비밀번호를 8자리 이상 입력해주세요."
                />
              </S.TableItem01>
              <S.TableItem01 className="t-head">
                변경할 비밀번호 확인
              </S.TableItem01>
              <S.TableItem01>
                <Input01
                  inputType="password"
                  onChangeValue={onChangeUserInfo}
                  valueData={userInfo.changePwCheck}
                  inputId="changePwCheck"
                  placeholderData="변경할 비밀번호를 8자리 이상 재입력해주세요."
                />
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
