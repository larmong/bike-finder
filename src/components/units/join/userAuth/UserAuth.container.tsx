import * as S from "./UserAuth.style";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import Input01 from "../../../commons/inputs/input/input01/Input01.container";
import Button01 from "../../../commons/buttons/button01/Button01.container";
import Checkbox01 from "../../../commons/inputs/checkbox/checkbox01/Checkbox01.contaienr";
import Input02 from "../../../commons/inputs/input/input02/Input02.container";
import Input03 from "../../../commons/inputs/input/input03/input03.container";
import Button03 from "../../../commons/buttons/button03/button03.container";
import TimerContainer from "../../../commons/utils/timer/Timer.container";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store/store";
import {
  CustomChangeEvent,
  CustomMouseEvent,
} from "../../../../commons/types/global.types";

export default function UserAuth(props) {
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
    <>
      <S.Progress>
        <span>약관동의</span>
        <MdDoubleArrow />
        <span className="target">본인인증</span>
        <MdDoubleArrow />
        <span>정보입력</span>
      </S.Progress>
      {router.pathname === "/join/minor" ? (
        <S.Notice>
          · 만 13세는 새싹 따릉이 회원가입 후 이용하실 수 있습니다.
          <br />· 허위사항을 기재할 시 불이익을 받으실 수 있습니다.
        </S.Notice>
      ) : (
        <S.Notice>
          · 회원가입은 만 14세 이상만 가능합니다.
          <br />
          · 허위사항을 기재할 시 불이익을 받으실 수 있습니다.
          <br />· 만 14세 미만의 경우 서울 자전거 규정에 따라 서비스를 이용할 수
          없습니다.
        </S.Notice>
      )}

      <S.InputGroup>
        <S.InputItem>
          <S.InputTitle>
            이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름
          </S.InputTitle>
          <Input01
            inputType="text"
            onChangeValue={onChangeUserName}
            valueData={userInfo.name}
            inputId="name"
            inputClass="bottomBorder"
            placeholderData="이름을 입력해주세요."
          />
        </S.InputItem>
        <S.InputItem>
          <S.InputTitle>생년월일</S.InputTitle>
          <Input03
            inputId="birth"
            inputMaxLength={8}
            onChangeNumber={onChangeUserInfo}
            valueData={userInfo.birth}
            placeholderData="생년월일 8자리를 입력해주세요. (ex.19991010)"
          />
        </S.InputItem>
        <S.InputItem>
          <S.InputTitle>휴&nbsp;&nbsp;대&nbsp;&nbsp;폰</S.InputTitle>
          <Input02
            inputId="phone"
            onChangePhone={onChangeUserInfo}
            valueData={userInfo.phone}
          />
          {authNumState ? (
            <Button03 onClickButton={onClickAuthNumBtn} btnText="재전송" />
          ) : (
            <Button03
              onClickButton={onClickAuthNumBtn}
              btnText="인증번호전송"
            />
          )}
        </S.InputItem>
        {authNumState ? (
          <S.InputItem>
            <S.InputTitle>인증번호</S.InputTitle>
            <Input03
              inputId="authNum"
              inputMaxLength={6}
              onChangeNumber={onChangeUserInfo}
              valueData={userInfo.authNum}
              placeholderData="인증번호 6자리를 입력해주세요."
            />
            <TimerContainer />
          </S.InputItem>
        ) : (
          ""
        )}
      </S.InputGroup>
      {router.pathname === "/join/minor" ? (
        <Checkbox01 CheckboxCont="만 13세 이하 입니다." onClickCb={onClickCb} />
      ) : (
        <Checkbox01 CheckboxCont="만 14세 이상 입니다." onClickCb={onClickCb} />
      )}

      <Button01 onClickButton={onClickButton} btnWidth="200px" btnText="다음" />
    </>
  );
}
