import * as S from "./UserInfo.style";
import { getBirth, getPhone } from "../../../commons/utils/utils";
import Tab01 from "../../../commons/tabs/tab01/Tab01.container";
import UserInfoCard from "./card/UserInfoCard.container";
import UserInfoFaq from "./faq/UserInfoFaq.container";
import RentalPw from "./rentalPw/RentalPw.container";
import Secession from "./secession/Secession.container";
import FaqDetail from "./faq/detail/FaqDetail.container";
import Input05 from "../../../commons/inputs/input/input05/input05.container";
import Button01 from "../../../commons/buttons/button01/Button01.container";
import Button04 from "../../../commons/buttons/button04/button04.container";
import { IPropsUserInfoUI } from "./UserInfo.types";

export default function UserInfoUI(props: IPropsUserInfoUI) {
  return (
    <S.Wrapper>
      {props.tab === "faqDetail" ? (
        ""
      ) : (
        <Tab01
          isLength={props.tabLength}
          TAB_MENUS={props.TAB_MENUS}
          tabWidth="140px"
        />
      )}
      <S.Contents>
        {props.tab === "card" ? (
          <UserInfoCard fetchUser={props.fetchUser} />
        ) : props.tab === "rental" ? (
          <RentalPw fetchUser={props.fetchUser} />
        ) : props.tab === "faq" ? (
          <UserInfoFaq />
        ) : props.tab === "faqDetail" ? (
          <FaqDetail />
        ) : props.tab === "secession" ? (
          <Secession />
        ) : (
          <S.UserInfo>
            <S.Table01>
              <S.TableItem01 className="t-head">이름</S.TableItem01>
              <S.TableItem01>{props.fetchUser?.name}</S.TableItem01>
              <S.TableItem01 className="t-head">아이디</S.TableItem01>
              <S.TableItem01>{props.fetchUser?.email}</S.TableItem01>
              <S.TableItem01 className="t-head">비밀번호</S.TableItem01>
              <S.TableItem01 className="t-btn">
                <Button04
                  onClickButton={props.onClickSendPassword}
                  btnText="비밀번호 변경하기"
                />
                <S.PasswordMessage>
                  * 따릉이 아이디(이메일)로 <strong>비밀번호 변경 메일</strong>
                  이 전송됩니다.
                </S.PasswordMessage>
              </S.TableItem01>
              <S.TableItem01 className="t-head">생년월일</S.TableItem01>
              <S.TableItem01>
                {props.fetchUser ? getBirth(props.fetchUser.birth) : ""}
              </S.TableItem01>
              <S.TableItem01 className="t-head">휴대폰 번호</S.TableItem01>
              <S.TableItem01>
                {props.fetchUser ? getPhone(props.fetchUser.phone) : ""}
              </S.TableItem01>
              <S.TableItem01 className="t-head t-address">주소</S.TableItem01>
              <S.TableItem01 className="t-address">
                <Input05
                  addressData={props.fetchUser?.address}
                  inputId="address"
                  onChangeAddress={props.onChangeUserAddress}
                />
              </S.TableItem01>
            </S.Table01>
            <Button01
              onClickButton={props.onClickButton}
              btnWidth="200px"
              btnText="저장하기"
            />
          </S.UserInfo>
        )}
      </S.Contents>
    </S.Wrapper>
  );
}
