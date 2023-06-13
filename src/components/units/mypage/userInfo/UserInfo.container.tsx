import * as S from "./UserInfo.style";
import Tab01 from "../../../commons/tabs/tab01/Tab01.container";
import UserInfoCard from "./card/UserInfoCard.container";
import UserInfoFaq from "./faq/UserInfoFaq.container";
import RentalPw from "./rentalPw/RentalPw.container";
import Secession from "./secession/Secession.container";
import Input01 from "../../../commons/inputs/input/input01/Input01.container";
import { useState } from "react";
import Button01 from "../../../commons/buttons/button01/Button01.container";

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

  const [userPw, setUserPw] = useState<number | undefined>(undefined);
  const [userPwCheck, setUserPwCheck] = useState<number | undefined>(undefined);

  const onChangeUserPw = (event) => {
    setUserPw(event.target.value);
  };
  const onChangeUserPwCheck = (event) => {
    setUserPwCheck(event.target.value);
  };

  const onClickButton = () => {
    // 개인정보 저장
  };

  return (
    <S.Wrapper>
      <Tab01 TAB_MENUS={TAB_MENUS} tabWidth="140px" />
      <S.Contents>
        {props.tab === "card" ? (
          <UserInfoCard />
        ) : props.tab === "rental" ? (
          <RentalPw />
        ) : props.tab === "faq" ? (
          <UserInfoFaq />
        ) : props.tab === "secession" ? (
          <Secession />
        ) : (
          <S.UserInfo>
            <S.Table01>
              <S.TableItem01 className="t-head">아이디</S.TableItem01>
              <S.TableItem01>larmong</S.TableItem01>
              <S.TableItem01 className="t-head">비밀번호</S.TableItem01>
              <S.TableItem01>
                <Input01
                  inputType="password"
                  onChangeValue={onChangeUserPw}
                  valueData={setUserPw}
                />
              </S.TableItem01>
              <S.TableItem01 className="t-head">비밀번호 확인</S.TableItem01>
              <S.TableItem01>
                <Input01
                  inputType="password"
                  onChangeValue={onChangeUserPwCheck}
                  valueData={setUserPwCheck}
                />
              </S.TableItem01>
              {/* 이메일주소, 휴대폰번호, 주소 등 변경 가능하도록 인풋으로 변경하고 기본 value 값은 user 정보를 불러옴 */}
              <S.TableItem01 className="t-head">이메일 주소</S.TableItem01>
              <S.TableItem01>larmong@naver.com</S.TableItem01>
              <S.TableItem01 className="t-head">휴대폰 번호</S.TableItem01>
              <S.TableItem01>010-1234-5678</S.TableItem01>
              <S.TableItem01 className="t-head">주소</S.TableItem01>
              <S.TableItem01>서울시 강남구 어쩌구 저쩌구</S.TableItem01>
              <S.TableItem01 className="t-head">생년월일</S.TableItem01>
              <S.TableItem01>1999-11-11</S.TableItem01>
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
