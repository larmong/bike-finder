import * as S from "./UserInfoCard.style";
import { useRouter } from "next/router";
import { useState } from "react";
import Button01 from "../../../../commons/buttons/button01/Button01.container";
import Select01 from "../../../../commons/inputs/select/select01/Select01.container";
import Input06 from "../../../../commons/inputs/input/input06/input06.container";
import Checkbox01 from "../../../../commons/inputs/checkbox/checkbox01/Checkbox01.contaienr";
import {
  collection,
  documentId,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import { IPropsUserInfoCard } from "./UserInfoCard.types";
import { CustomMouseEvent } from "../../../../../commons/types/global.types";
import { Notice } from "../../../../commons/notices/notice/Notice.style";
import {
  Message,
  Table01,
  TableItem01,
} from "../../../../commons/tables/table/Table.style";

export default function UserInfoCard(props: IPropsUserInfoCard) {
  const router = useRouter();
  const [cbValue, setCbValue] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    type: "티머니카드",
    number: "",
  });
  const SELECT_LIST = ["후불교통카드", "티머니카드"];

  const onClickCb = (event: CustomMouseEvent) => {
    const target = event.target as HTMLInputElement;
    setCbValue(target.checked);
  };

  const onChangeCardInfo = (value: string, id: string) => {
    setCardInfo({
      ...cardInfo,
      [id]: value,
    });
  };

  const onClickButton = async () => {
    if (cardInfo.type === "" && cardInfo.number === "") {
      alert("변경된 정보가 없습니다.");
    } else {
      if (cardInfo.type === "") {
        cardInfo.type = props.fetchUser.cardInfo.type;
      } else if (cardInfo.number === "") {
        cardInfo.number = props.fetchUser.cardInfo.number;
      } else {
        try {
          const data = query(
            collection(db, "user"),
            where(documentId(), "==", props.fetchUser.id)
          );
          const result = await getDocs(data);
          result.forEach((doc) => {
            setDoc(doc.ref, {
              ...props.fetchUser,
              cardInfo: {
                ...cardInfo,
              },
            });
          });
          alert("회원님의 환승카드 정보가 저장되었습니다.");
        } catch (error) {}
      }
    }
  };

  return (
    <S.Wrapper>
      <Notice>
        · 서울자전거와 대중교통을 30분 이내에 환승하여 이용한 경우에는
        마일리지를 적립해 드립니다.
        <br />
        · 환승마일리지 서비스 신청과 ㈜한국스마트카드의 정보제공에 동의하고,
        대중교통 이용시 사용하는 교통카드를 등록하여야 합니다.
        <br />
        · 후불교통카드의 경우, 등록하신 환승카드의 번호와 티머니에서 전송받은
        대중교통 사용 내역의 카드번호가 일치하는 경우에 한하여 마일리지 적립이
        진행되고 있습니다.
        <br />
        · 이용일 기준 4일 후, 마일리지 적립이 안 될 경우, 카드번호 확인이
        필요합니다.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;이 경우 거래하고계신 카드사에 교통거래가 발생한
        카드번호를 확인하여 등록하신 환승카드번호와 일치하는지 확인하여 주시기
        바랍니다.
        <br />
        · 교통카드의 경우, 플라스틱 카드의 번호와 대중교통 이용내역[카드사에서
        티머니로 제공]에서 제공하는 카드번호가 상이하여 마일리지 누락이 일어날
        수 있습니다.)
        <br />
        <br />
        <span>
          ※ 현재 KBANK, 신한 아멕스카드(15자리), 지하철 정기권, 모바일 페이 등의
          경우 카드사 정책에 의해 적립이 불가하오니, 해당 카드이외의 카드 사용을
          부탁드립니다.
          <br />※ 티머니 기능이 있는 후불교통카드 등 카드 한장에 두 개의
          신용카드 번호가 존재하는 경우, 대중교통 결제시 이용되는 카드번호를
          반드시 확인하여주시기 바랍니다.
        </span>
        <strong onClick={() => router.push("/")}>
          · 대중교통 환승마일리지 안내 바로가기&nbsp;&nbsp;&nbsp;&#62;
        </strong>
        <br />
        <br />
        <span>환승마일리지 서비스 신청(주의사항)</span>
        · 개인정보의 제3자 제공
        <br />
        · 카드번호를 잘못 입력한 경우에는 환승마일리지가 적립되지 않으니,
        카드번호를 정확히 입력했는지 확인하셔야 합니다.
        <br />· 대중교통에 이용하시는 교통카드의 번호를 입력하셔야만
        환승마일리지가 적립됩니다. 대중교통에서 이용하시는 교통카드가 변경되는
        경우 즉시 재등록하셔야 합니다.
      </Notice>
      <S.Section01>
        <Table01 className="userCard1">
          <TableItem01 className="t-head">개인정보를 제공 받는 자</TableItem01>
          <TableItem01 className="t-left">티머니</TableItem01>
          <TableItem01 className="t-head">
            개인정보를 제공 받는 자의 개인정보 이용 목적
          </TableItem01>
          <TableItem01 className="t-left">
            대중교통 간 환승에 따른 마일리지 적립
          </TableItem01>
          <TableItem01 className="t-head">제공되는 개인정보 항목</TableItem01>
          <TableItem01 className="t-left">환승카드정보</TableItem01>
          <TableItem01 className="t-head">
            개인정보를 제공받는 자의 개인정보 보유 및 이용기간
          </TableItem01>
          <TableItem01 className="t-left">사용자 해지 요청 시까지</TableItem01>
          <TableItem01 className="t-head">
            개인정보 제공 동의 거부 권리 및 동의 거부에 따른 불이익 내용 또는
            제한 사항
          </TableItem01>
          <TableItem01 className="t-left">
            귀하는 개인정보 제공 동의를 거부할 권리가 있으며, 동의거부 시
            마일리지 적립을 진행할 수 없습니다.
          </TableItem01>
        </Table01>
        <Checkbox01
          onClickCb={onClickCb}
          CheckboxCont="환승마일리지 서비스 신청과 ㈜티머니의 정보제공에 동의합니다."
        />
      </S.Section01>
      {cbValue ? (
        <>
          <S.Section02>
            <Table01 className="userCard2">
              <TableItem01 className="t-head">카드유형</TableItem01>
              <TableItem01>
                <Select01
                  inputId="type"
                  SELECT_LIST={SELECT_LIST}
                  cardType={props.fetchUser?.cardInfo.type}
                  onClickSelectValue={onChangeCardInfo}
                />
              </TableItem01>
              <TableItem01 className="t-head">카드번호</TableItem01>
              <TableItem01>
                <Input06
                  inputId="number"
                  onChangeCard={onChangeCardInfo}
                  cardNum={props.fetchUser?.cardInfo.number}
                />
                <Message>
                  * 카드번호 <strong>16자리를</strong> 입력해주세요.
                </Message>
              </TableItem01>
            </Table01>
          </S.Section02>
          <Button01
            onClickButton={onClickButton}
            btnWidth="200px"
            btnText="저장하기"
          />
        </>
      ) : (
        ""
      )}
    </S.Wrapper>
  );
}
