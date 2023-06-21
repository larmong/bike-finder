import * as S from "./UserAuth.style";
import { ChangeEvent, useState } from "react";
import Input01 from "../../../commons/inputs/input/input01/Input01.container";
import Button01 from "../../../commons/buttons/button01/Button01.container";
import Checkbox01 from "../../../commons/inputs/checkbox/checkbox01/Checkbox01.contaienr";
import { MdDoubleArrow } from "react-icons/md";
import { useRouter } from "next/router";
import { IUserInfo } from "../../../commons/inputs/checkbox/checkbox01/Checkbox01.types";
import Input02 from "../../../commons/inputs/input/input02/Input02.container";
import Input03 from "../../../commons/inputs/input/input03/input03.container";
import {
  CustomChangeEvent,
  CustomMouseEvent,
} from "../../../../commons/types/global.types";

export default function UserAuth(props) {
  const router = useRouter();

  const [checkBox, setCheckBox] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    name: "",
    birth: "",
    phone: "",
    authNum: "",
  });

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

  const onClickButton = () => {
    // 약관동의 && 인증번호
    if (checkBox) {
      console.log(userInfo);
      // props.setUserAuth(true);
    }
  };

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
        </S.InputItem>
        <S.InputItem>
          <S.InputTitle>인증번호</S.InputTitle>
          <Input03
            inputId="authNum"
            inputMaxLength={6}
            onChangeNumber={onChangeUserInfo}
            valueData={userInfo.authNum}
            placeholderData="인증번호 6자리를 입력해주세요."
          />
        </S.InputItem>
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
