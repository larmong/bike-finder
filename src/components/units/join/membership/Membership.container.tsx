import * as S from "./Membership.style";
import { useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import Button01 from "../../../commons/buttons/button01/Button01.container";
import Input01 from "../../../commons/inputs/input/input01/Input01.container";

export default function Membership(props) {
  const [userId, setUserId] = useState<number | undefined>(undefined);
  const [userPw, setUserPw] = useState<number | undefined>(undefined);
  const [userPwCheck, setUserPwCheck] = useState<number | undefined>(undefined);

  const onChangeUserId = (event) => {
    setUserId(event.target.value);
  };
  const onChangeUserPw = (event) => {
    setUserPw(event.target.value);
  };
  const onChangeUserPwCheck = (event) => {
    setUserPwCheck(event.target.value);
  };

  const onClickButton = () => {
    // 회원가입 완료
    props.setJoinSuccess(true);
  };

  return (
    <>
      <S.Progress>
        <span>약관동의</span>
        <MdDoubleArrow />
        <span>본인인증</span>
        <MdDoubleArrow />
        <span className="target">정보입력</span>
      </S.Progress>
      <S.Table01>
        <S.TableItem01 className="t-head">이름</S.TableItem01>
        <S.TableItem01>한루이</S.TableItem01>
        <S.TableItem01 className="t-head t-essential">
          <span>아이디</span>
        </S.TableItem01>
        <S.TableItem01>
          <Input01
            inputType="text"
            onChangeValue={onChangeUserId}
            valueData={setUserId}
          />
        </S.TableItem01>
        <S.TableItem01 className="t-head t-essential">
          <span>비밀번호</span>
        </S.TableItem01>
        <S.TableItem01>
          <Input01
            inputType="text"
            onChangeValue={onChangeUserPw}
            valueData={setUserPw}
          />
        </S.TableItem01>
        <S.TableItem01 className="t-head t-essential">
          <span>비밀번호 확인</span>
        </S.TableItem01>
        <S.TableItem01>
          <Input01
            inputType="text"
            onChangeValue={onChangeUserPwCheck}
            valueData={setUserPwCheck}
          />
        </S.TableItem01>
        <S.TableItem01 className="t-head t-essential">
          <span>이메일 주소</span>
        </S.TableItem01>
        <S.TableItem01>{/* 이메일 주소 인풋 */}</S.TableItem01>
        <S.TableItem01 className="t-head">휴대폰 번호</S.TableItem01>
        <S.TableItem01>010-1234-5678</S.TableItem01>
        <S.TableItem01 className="t-head t-essential">
          <span>주소</span>
        </S.TableItem01>
        <S.TableItem01>{/* 카카오 주소 검색 api + 주소 인풋 */}</S.TableItem01>
        <S.TableItem01 className="t-head">생년월일</S.TableItem01>
        <S.TableItem01>1999-11-11</S.TableItem01>
        <S.TableItem01 className="t-head t-essential">
          <span>대여비밀번호</span>
        </S.TableItem01>
        <S.TableItem01>{/* 대여비밀번호 버튼 + 인풋 */}</S.TableItem01>
        <S.TableItem01 className="t-head t-essential">
          <span>대여비밀번호 확인</span>
        </S.TableItem01>
        <S.TableItem01>{/* 대여비밀번호 버튼 + 인풋 */}</S.TableItem01>
      </S.Table01>
      <Button01
        onClickButton={onClickButton}
        btnWidth="200px"
        btnText="회원가입"
      />
    </>
  );
}
