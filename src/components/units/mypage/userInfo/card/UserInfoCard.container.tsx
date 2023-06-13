import * as S from "./UserInfoCard.style";
import { useRouter } from "next/router";
import Checkbox01 from "../../../../commons/inputs/checkbox/checkbox01/Checkbox01.contaienr";
import Button01 from "../../../../commons/buttons/button01/Button01.container";
import {useState} from "react";

export default function UserInfoCard() {
  const router = useRouter();
  const [cbValue, setCbValue] = useState(false)

  const onClickCb = (event) => {
    setCbValue(event.target.checked);
  };

  const onClickButton = () => {
    // 환승카드 저장
  };

  return (
    <S.Wrapper>
      <S.Notice>
        · 서울자전거와 대중교통을 30분 이내에 환승하여 이용한 경우에는 마일리지를 적립해 드립니다.<br />
        · 환승마일리지 서비스 신청과 ㈜한국스마트카드의 정보제공에 동의하고, 대중교통 이용시 사용하는 교통카드를 등록하여야 합니다.<br />
        · 후불교통카드의 경우, 등록하신 환승카드의 번호와 티머니에서 전송받은 대중교통 사용 내역의 카드번호가 일치하는 경우에 한하여 마일리지 적립이 진행되고 있습니다.<br />
        · 이용일 기준 4일 후, 마일리지 적립이 안 될 경우, 카드번호 확인이 필요합니다.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;이 경우 거래하고계신 카드사에 교통거래가 발생한 카드번호를 확인하여 등록하신 환승카드번호와 일치하는지 확인하여 주시기 바랍니다.<br />
        · 교통카드의 경우, 플라스틱 카드의 번호와 대중교통 이용내역[카드사에서 티머니로 제공]에서 제공하는 카드번호가 상이하여 마일리지 누락이 일어날 수 있습니다.)
        <br /><br />
        <span>
          ※ 현재 KBANK, 신한 아멕스카드(15자리), 지하철 정기권, 모바일 페이 등의 경우 카드사 정책에 의해 적립이 불가하오니, 해당 카드이외의 카드 사용을 부탁드립니다.<br />
          ※ 티머니 기능이 있는 후불교통카드 등 카드 한장에 두 개의 신용카드 번호가 존재하는 경우, 대중교통 결제시 이용되는 카드번호를 반드시 확인하여주시기 바랍니다.
        </span>
        <strong onClick={() => router.push("/")}>
          · 대중교통 환승마일리지 안내 바로가기&nbsp;&nbsp;&nbsp;>
        </strong>
        <br /><br />
        <span>환승마일리지 서비스 신청(주의사항)</span>
        · 개인정보의 제3자 제공<br />
        · 카드번호를 잘못 입력한 경우에는 환승마일리지가 적립되지 않으니, 카드번호를 정확히 입력했는지 확인하셔야 합니다.<br />
        · 대중교통에 이용하시는 교통카드의 번호를 입력하셔야만 환승마일리지가 적립됩니다. 대중교통에서 이용하시는 교통카드가 변경되는 경우 즉시 재등록하셔야 합니다.
      </S.Notice>
      <S.Section01>
        <S.Table01>
          <S.TableItem01 className="t-head">개인정보를 제공 받는 자</S.TableItem01>
          <S.TableItem01>티머니</S.TableItem01>
          <S.TableItem01 className="t-head">개인정보를 제공 받는 자의 개인정보 이용 목적</S.TableItem01>
          <S.TableItem01>대중교통 간 환승에 따른 마일리지 적립</S.TableItem01>
          <S.TableItem01 className="t-head">제공되는 개인정보 항목</S.TableItem01>
          <S.TableItem01>환승카드정보</S.TableItem01>
          <S.TableItem01 className="t-head">개인정보를 제공받는 자의 개인정보 보유 및 이용기간</S.TableItem01>
          <S.TableItem01>사용자 해지 요청 시까지</S.TableItem01>
          <S.TableItem01 className="t-head">개인정보 제공 동의 거부 권리 및 동의 거부에 따른 불이익 내용 또는 제한 사항</S.TableItem01>
          <S.TableItem01>귀하는 개인정보 제공 동의를 거부할 권리가 있으며, 동의거부 시 마일리지 적립을 진행할 수 없습니다.</S.TableItem01>
        </S.Table01>
        <Checkbox01 onClickCb={onClickCb} CheckboxCont="환승마일리지 서비스 신청과 ㈜티머니의 정보제공에 동의합니다." />
      </S.Section01>
      {
        cbValue ?
          <>
            <S.Section02>
              <S.Table02>
                <S.TableItem02 className="t-head">카드유형</S.TableItem02>
                <S.TableItem02>후불교통카드(선택인풋) 컴포넌트!!!</S.TableItem02>
                <S.TableItem02 className="t-head">카드번호</S.TableItem02>
                <S.TableItem02>
                  <span>카드번호 16자리를 입력해주세요.</span>
                  {/* 핸드폰번호 컴포 */}1234-1234-1234-1234
                </S.TableItem02>
              </S.Table02>
            </S.Section02>
            <Button01 onClickButton={onClickButton} btnWidth="200px" btnText="저장하기" />
          </>
        : ""
      }

    </S.Wrapper>
  );
}
