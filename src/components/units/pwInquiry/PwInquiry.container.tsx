import * as S from "./PwInquiry.style";
import { useState } from "react";
import { useRouter } from "next/router";
import { MdCheckCircle } from "react-icons/md";
import Title02 from "../../commons/titles/title02/Title02.container";
import Input01 from "../../commons/inputs/input/input01/Input01.container";
import Button01 from "../../commons/buttons/button01/Button01.container";
import { BtnGroup, Icon, Message } from "../join/joinSuccess/JoinSuccess.style";

export default function PwInquiry() {
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
  const [userPwChange, setUserPwChange] = useState(false);
  const onClickMoveToSuccess = () => {
    setUserAuth(true);
  };
  const onClickMoveToPwChange = () => {
    setUserPwChange(true);
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
        <Title02 title="비밀번호 변경" />
        {!userAuth && !userPwChange ? (
          <S.Contents>
            <S.InputGroup>
              <S.InputItem>
                <S.InputTitle>아&nbsp;&nbsp;이&nbsp;&nbsp;디</S.InputTitle>
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
              btnText="비밀번호 변경"
            />
          </S.Contents>
        ) : userAuth && !userPwChange ? (
          <S.SuccessContents>
            <S.Icon>
              <MdCheckCircle />
            </S.Icon>
            <S.Message>변경하실 비밀번호를 입력해 주세요.</S.Message>
            <S.InputGroup>
              <S.InputItem>
                <S.InputTitle>비밀번호</S.InputTitle>
                <Input01
                  inputType="text"
                  onChangeValue={onChangeUserBirth}
                  valueData={userBirth}
                />
              </S.InputItem>
              <S.InputItem>
                <S.InputTitle>
                  비밀번호
                  <br />
                  확인
                </S.InputTitle>
                <Input01
                  inputType="text"
                  onChangeValue={onChangeUserBirth}
                  valueData={userBirth}
                />
              </S.InputItem>
            </S.InputGroup>
            <S.BtnGroup>
              <Button01
                onClickButton={onClickMoveToPwChange}
                btnWidth="200px"
                btnText="비밀번호 변경"
              />
            </S.BtnGroup>
          </S.SuccessContents>
        ) : (
          <S.SuccessContents>
            <Icon>
              <MdCheckCircle />
            </Icon>
            <Message>비밀번호 변경이 완료되었습니다.</Message>
            <BtnGroup>
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
            </BtnGroup>
          </S.SuccessContents>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
