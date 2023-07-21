import * as S from "./IdInquiry.style";
import { Container } from "../../../commons/style/global.style";
import { useState } from "react";
import { useRouter } from "next/router";
import Title02 from "../../commons/titles/title02/Title02.container";
import Input01 from "../../commons/inputs/input/input01/Input01.container";
import Button01 from "../../commons/buttons/button01/Button01.container";
import { CustomChangeEvent } from "../../../commons/types/global.types";
import Button03 from "../../commons/buttons/button03/button03.container";
import Input03 from "../../commons/inputs/input/input03/input03.container";
import Input02 from "../../commons/inputs/input/input02/Input02.container";
import TimerContainer from "../../commons/utils/timer/Timer.container";
import {
  InputGroup,
  InputItem,
  InputTitle,
} from "../join/userAuth/UserAuth.style";
import { MdCheckCircle } from "react-icons/md";

export default function IdInquiry() {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    name: "",
    birth: "",
    phone: "",
    authNum: "",
  });

  const [authNumState, setAuthNumState] = useState<boolean>(false);
  const [userAuth, setUserAuth] = useState(false);
  const onClickMoveToSuccess = () => {
    if (userInfo.name && userInfo.birth && userInfo.phone && userInfo.authNum) {
      setUserAuth(true);
    }
  };

  const onClickMoveToMain = () => {
    void router.push("/");
  };
  const onClickMoveToLogin = () => {
    void router.push("/login");
  };

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
  const onClickAuthNumBtn = () => {
    if (String(userInfo.phone).length === 11) {
      setAuthNumState(true);
    } else {
      alert("핸드폰 번호를 확인해주세요.");
    }
  };

  return (
    <S.Wrapper>
      <Container>
        <Title02 title="아이디 찾기" />
        {!userAuth ? (
          <S.Contents>
            <InputGroup>
              <InputItem>
                <InputTitle>
                  이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름
                </InputTitle>
                <Input01
                  inputType="text"
                  onChangeValue={onChangeUserName}
                  valueData={userInfo.name}
                  inputId="name"
                  inputClass="bottomBorder"
                  placeholderData="이름을 입력해주세요."
                />
              </InputItem>
              <InputItem>
                <InputTitle>생년월일</InputTitle>
                <Input03
                  inputId="birth"
                  inputMaxLength={8}
                  onChangeNumber={onChangeUserInfo}
                  valueData={userInfo.birth}
                  placeholderData="생년월일 8자리를 입력해주세요. (ex.19991010)"
                />
              </InputItem>
              <InputItem>
                <InputTitle>휴&nbsp;&nbsp;대&nbsp;&nbsp;폰</InputTitle>
                <Input02
                  inputId="phone"
                  onChangePhone={onChangeUserInfo}
                  valueData={userInfo.phone}
                />
                {authNumState ? (
                  <Button03
                    onClickButton={onClickAuthNumBtn}
                    btnText="재전송"
                  />
                ) : (
                  <Button03
                    onClickButton={onClickAuthNumBtn}
                    btnText="인증번호전송"
                  />
                )}
              </InputItem>
              {authNumState ? (
                <InputItem>
                  <InputTitle>인증번호</InputTitle>
                  <Input03
                    inputId="authNum"
                    inputMaxLength={6}
                    onChangeNumber={onChangeUserInfo}
                    valueData={userInfo.authNum}
                    placeholderData="인증번호 6자리를 입력해주세요."
                  />
                  <TimerContainer />
                </InputItem>
              ) : (
                ""
              )}
            </InputGroup>
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
      </Container>
    </S.Wrapper>
  );
}
