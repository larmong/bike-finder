import * as S from "./Membership.style";
import { MdDoubleArrow } from "react-icons/md";
import { getBirth, getPhone } from "../../../commons/utils/utils";
import Button01 from "../../../commons/buttons/button01/Button01.container";
import Input01 from "../../../commons/inputs/input/input01/Input01.container";
import Input03 from "../../../commons/inputs/input/input03/input03.container";
import Input04 from "../../../commons/inputs/input/input04/input04.container";
import Input05 from "../../../commons/inputs/input/input05/input05.container";
import { IPropsMembershipUI } from "./Membership.types";

export default function MembershipUI(props: IPropsMembershipUI) {
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
        <S.TableItem01>{props.userInfo.name}</S.TableItem01>
        <S.TableItem01 className="t-head t-essential">
          <span>아이디</span>
        </S.TableItem01>
        <S.TableItem01>
          <Input04
            inputId="email"
            onChangeEmail={props.onChangeUserInfo2}
            valueData={props.userInfo2.email}
          />
        </S.TableItem01>
        <S.TableItem01 className="t-head t-essential">
          <span>비밀번호</span>
        </S.TableItem01>
        <S.TableItem01>
          <Input01
            inputType="password"
            onChangeValue={props.onChangeUserInfo}
            valueData={props.userInfo2.password}
            inputId="password"
            inputClass="bottomBorder left"
            placeholderData="비밀번호를 입력해 주세요."
          />
        </S.TableItem01>
        <S.TableItem01 className="t-head t-essential">
          <span>비밀번호 확인</span>
        </S.TableItem01>
        <S.TableItem01>
          <Input01
            inputType="password"
            onChangeValue={props.onChangeUserInfo}
            valueData={props.userInfo2.passwordCheck}
            inputId="passwordCheck"
            inputClass="bottomBorder left"
            placeholderData="비밀번호를 재입력해 주세요."
          />
        </S.TableItem01>
        <S.TableItem01 className="t-head">휴대폰 번호</S.TableItem01>
        <S.TableItem01>{getPhone(props.userInfo.phone)}</S.TableItem01>
        <S.TableItem01 className="t-head t-essential t-address">
          <span>주소</span>
        </S.TableItem01>
        <S.TableItem01 className="t-address">
          <Input05
            inputId="address"
            onChangeAddress={props.onChangeUserInfo2}
          />
        </S.TableItem01>
        <S.TableItem01 className="t-head">생년월일</S.TableItem01>
        <S.TableItem01>{getBirth(props.userInfo.birth)}</S.TableItem01>
        <S.TableItem01 className="t-head t-essential">
          <span>대여비밀번호</span>
        </S.TableItem01>
        <S.TableItem01>
          <Input03
            inputId="rentalPassword"
            inputMaxLength={4}
            onChangeNumber={props.onChangeUserInfo2}
            valueData={props.userInfo2.rentalPassword}
            placeholderData="대여 비밀번호 4자리를 입력해주세요."
            inputClass="left"
          />
        </S.TableItem01>
        <S.TableItem01 className="t-head t-essential">
          <span>대여비밀번호 확인</span>
        </S.TableItem01>
        <S.TableItem01>
          <Input03
            inputId="rentalPasswordCheck"
            inputMaxLength={4}
            onChangeNumber={props.onChangeUserInfo2}
            valueData={props.userInfo2.rentalPasswordCheck}
            placeholderData="대여 비밀번호 4자리를 재입력해주세요."
            inputClass="left"
          />
        </S.TableItem01>
      </S.Table01>
      <Button01
        onClickButton={props.onClickButton}
        btnWidth="200px"
        btnText="회원가입"
      />
    </>
  );
}
