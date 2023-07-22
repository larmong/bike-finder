import * as S from "./UserAuth.style";
import Input01 from "../../../commons/inputs/input/input01/Input01.container";
import Input02 from "../../../commons/inputs/input/input02/Input02.container";
import Input03 from "../../../commons/inputs/input/input03/input03.container";
import Button01 from "../../../commons/buttons/button01/Button01.container";
import Button03 from "../../../commons/buttons/button03/button03.container";
import Progress from "../progress/Progress.container";
import TimerContainer from "../../../commons/utils/timer/Timer.container";
import { Notice } from "../../../commons/notices/notice/Notice.style";
import { InputCont } from "./UserAuth.style";
import { IPropsUserAuthUI } from "./UserAuth.types";

export default function UserAuthUI(props: IPropsUserAuthUI) {
  return (
    <>
      <Progress progress="auth" />
      {props.pathname === "/join/minor" ? (
        <Notice>
          · 만 13세는 새싹 따릉이 회원가입 후 이용하실 수 있습니다.
          <br />· 허위사항을 기재할 시 불이익을 받으실 수 있습니다.
        </Notice>
      ) : (
        <Notice>
          · 회원가입은 만 14세 이상만 가능합니다.
          <br />
          · 허위사항을 기재할 시 불이익을 받으실 수 있습니다.
          <br />· 만 14세 미만의 경우 서울 자전거 규정에 따라 서비스를 이용할 수
          없습니다.
        </Notice>
      )}

      <S.InputGroup>
        <S.InputItem>
          <S.InputTitle>
            <span>이</span>
            <span>름</span>
          </S.InputTitle>
          <InputCont>
            <Input01
              inputType="text"
              onChangeValue={props.onChangeUserName}
              valueData={props.userInfo.name}
              inputId="name"
              inputClass="bottomBorder"
              placeholderData="이름을 입력해주세요."
            />
          </InputCont>
        </S.InputItem>
        <S.InputItem>
          <S.InputTitle>
            <span>생</span>
            <span>년</span>
            <span>월</span>
            <span>일</span>
          </S.InputTitle>
          <InputCont>
            <Input03
              inputId="birth"
              inputMaxLength={8}
              onChangeNumber={props.onChangeUserInfo}
              valueData={props.userInfo.birth}
              placeholderData="생년월일 8자리를 입력해주세요. (ex.19991010)"
            />
          </InputCont>
        </S.InputItem>
        <S.InputItem>
          <S.InputTitle>
            <span>휴</span>
            <span>대</span>
            <span>폰</span>
          </S.InputTitle>
          <InputCont>
            <Input02
              inputId="phone"
              onChangePhone={props.onChangeUserInfo}
              valueData={props.userInfo.phone}
            />
            {props.authNumState ? (
              <Button03
                onClickButton={props.onClickAuthNumBtn}
                btnText="재전송"
              />
            ) : (
              <Button03
                onClickButton={props.onClickAuthNumBtn}
                btnText="인증번호전송"
              />
            )}
          </InputCont>
        </S.InputItem>
        {props.authNumState ? (
          <S.InputItem>
            <S.InputTitle>
              <span>인</span>
              <span>증</span>
              <span>번</span>
              <span>호</span>
            </S.InputTitle>
            <Input03
              inputId="authNum"
              inputMaxLength={6}
              onChangeNumber={props.onChangeUserInfo}
              valueData={props.userInfo.authNum}
              placeholderData="인증번호 6자리를 입력해주세요."
            />
            <TimerContainer />
          </S.InputItem>
        ) : (
          ""
        )}
      </S.InputGroup>
      <Button01
        onClickButton={props.onClickButton}
        btnWidth="200px"
        btnText="다음"
      />
    </>
  );
}
