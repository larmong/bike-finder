import * as S from "./IdInquiry.style";
import { useState } from "react";
import Title02 from "../../commons/titles/title02/Title02.container";
import Input01 from "../../commons/inputs/input/input01/Input01.container";
import Button01 from "../../commons/buttons/button01/Button01.container";
import { BtnGroup, Icon, Message } from "../join/joinSuccess/JoinSuccess.style";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/router";
import { SuccessContents } from "./IdInquiry.style";

export default function IdInquiry() {
  const router = useRouter();

  const [userName, setUserName] = useState<number | undefined>(undefined);
  const [userBirth, setUserBirth] = useState<number | undefined>(undefined);

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const onChangeUserBirth = (event) => {
    setUserBirth(event.target.value);
  };

  const [userAuth, setUserAuth] = useState(false);
  const onClickMoveToSuccess = () => {
    setUserAuth(true);
  };

  const onClickMoveToMain = () => {
    router.push("/");
  };
  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  return (
    <S.Wrapper>
      <S.Container>
        <Title02 title="아이디 찾기" />
        {!userAuth ? (
          <S.Contents>
            <S.InputGroup>
              <S.InputItem>
                <S.InputTitle>
                  이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름
                </S.InputTitle>
                <Input01
                  inputType="text"
                  onChangeValue={onChangeUserName}
                  valueData={userName}
                />
              </S.InputItem>
              <S.InputItem>
                <S.InputTitle>휴&nbsp;&nbsp;대&nbsp;&nbsp;폰</S.InputTitle>
                <Input01
                  inputType="text"
                  onChangeValue={onChangeUserBirth}
                  valueData={userBirth}
                />
              </S.InputItem>
              <S.InputItem>
                <S.InputTitle>인증번호</S.InputTitle>
                <Input01
                  inputType="text"
                  onChangeValue={onChangeUserBirth}
                  valueData={userBirth}
                />
              </S.InputItem>
            </S.InputGroup>
            <Button01
              onClickButton={onClickMoveToSuccess}
              btnWidth="200px"
              btnText="아이디 찾기"
            />
          </S.Contents>
        ) : (
          <S.SuccessContents>
            <S.Icon>
              <MdCheckCircle />
            </S.Icon>
            <S.Message>
              회원님의 아이디는 <span>lar****</span> 입니다.
            </S.Message>
            <S.BtnGroup>
              <Button01
                btnClass="line"
                onClickButton={onClickMoveToMain}
                btnWidth="200px"
                btnText="메인페이지"
              />
              <Button01
                onClickButton={onClickMoveToLogin}
                btnWidth="200px"
                btnText="로그인"
              />
            </S.BtnGroup>
          </S.SuccessContents>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
