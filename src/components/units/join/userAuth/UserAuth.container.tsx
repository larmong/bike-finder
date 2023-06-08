import { MdDoubleArrow } from "react-icons/md";
import Checkbox01 from "../../../commons/inputs/checkbox/checkbox01/Checkbox01.contaienr";
import Button01 from "../../../commons/buttons/button01/Button01.container";
import * as S from "./UserAuth.style";
import Input01 from "../../../commons/inputs/input/input01/Input01.container";
import { useState } from "react";

export default function UserAuth(props) {
  const [userName, setUserName] = useState<number | undefined>(undefined);
  const [userBirth, setUserBirth] = useState<number | undefined>(undefined);

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const onChangeUserBirth = (event) => {
    setUserBirth(event.target.value);
  };

  // 약관 all 동의 기능

  const onClickButton = () => {
    // 약관 동의 모두 됐으면,
    props.setTerms(true);
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
      <S.Notice>
        · 만 13세는 새싹 따릉이 회원가입 후 이용하실 수 있습니다.
        <br />· 허위사항을 기재할 시 불이익을 받으실 수 있습니다.
      </S.Notice>
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
          <S.InputTitle>생년월일</S.InputTitle>
          <Input01
            inputType="text"
            onChangeValue={onChangeUserBirth}
            valueData={userBirth}
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
      <Checkbox01 CheckboxCont="만 13세 이하 입니다." />
      <Button01 onClickButton={onClickButton} btnWidth="200px" btnText="다음" />
    </>
  );
}
