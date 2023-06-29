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
import {
  Message,
  Table01,
  TableItem01,
} from "../../../commons/tables/table/Table.style";

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
            <Table01 className="userInfo">
              <TableItem01 className="t-head">이름</TableItem01>
              <TableItem01>{props.fetchUser?.name}</TableItem01>
              <TableItem01 className="t-head">아이디</TableItem01>
              <TableItem01>{props.fetchUser?.email}</TableItem01>
              <TableItem01 className="t-head">비밀번호</TableItem01>
              <TableItem01 className="t-btn">
                <Button04
                  onClickButton={props.onClickSendPassword}
                  btnText="비밀번호 변경하기"
                />
                <Message>
                  * 따릉이 아이디(이메일)로 <strong>비밀번호 변경 메일</strong>
                  이 전송됩니다.
                </Message>
              </TableItem01>
              <TableItem01 className="t-head">생년월일</TableItem01>
              <TableItem01>
                {props.fetchUser ? getBirth(props.fetchUser.birth) : ""}
              </TableItem01>
              <TableItem01 className="t-head">휴대폰 번호</TableItem01>
              <TableItem01>
                {props.fetchUser ? getPhone(props.fetchUser.phone) : ""}
              </TableItem01>
              <TableItem01 className="t-head t-address">주소</TableItem01>
              <TableItem01 className="t-address">
                <Input05
                  addressData={props.fetchUser?.address}
                  inputId="address"
                  onChangeAddress={props.onChangeUserAddress}
                />
              </TableItem01>
            </Table01>
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
