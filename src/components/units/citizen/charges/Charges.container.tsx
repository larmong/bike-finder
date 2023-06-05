import * as S from "./Charges.style";

export default function Charges() {
  return (
    <S.Wrapper>
      <S.Notice>
        <strong>
          · 첫 대여 후 대여시간(1시간/2시간) 안에 정상 반납시 권종별 기간 동안은
          대여횟수 제한없이 재대여 가능
        </strong>
        · 이용 가능시간은 첫 회 대여시점을 기준으로 계산합니다.
        <br />
        · 서울자전거 모든 대여소에서 사용이 가능합니다.
        <br />
        · 취소, 환불은 서울자전거 아래 환불규정에 따릅니다.
        <br />
        · 이용권을 다른 사람에게 양도할 수 없으며, 양도로 인해 발생하는 불이익은
        구매자가 책임지셔야 합니다.
        <br />
      </S.Notice>
      <S.CitizenGroup>
        <S.CitizenTitle>상품안내</S.CitizenTitle>
        <S.Table01>
          <S.TableItem01 className="t-head">구분</S.TableItem01>
          <S.TableItem01 className="t-head">정기권(회원전용)</S.TableItem01>
          <S.TableItem01 className="t-head">일일권</S.TableItem01>
          <S.TableItem01 className="t-bg">상품</S.TableItem01>
          <S.TableItem01>종별</S.TableItem01>
          <S.TableItem01>1시간권</S.TableItem01>
          <S.TableItem01>2시간권</S.TableItem01>
          <S.TableItem01>1시간권</S.TableItem01>
          <S.TableItem01>2시간권</S.TableItem01>
          <S.TableItem01 className="t-none-line">
            7일권
            <br />
            30일권
            <br />
            180일권
            <br />
            365일권
          </S.TableItem01>
          <S.TableItem01 className="t-none-line">
            3,000원
            <br />
            5,000원
            <br />
            15,000원
            <br />
            30,000원
          </S.TableItem01>
          <S.TableItem01 className="t-none-line">
            4,000원
            <br />
            7,000원
            <br />
            20,000원
            <br />
            40,000원
          </S.TableItem01>
          <S.TableItem01>1,000원</S.TableItem01>
          <S.TableItem01>2,000원</S.TableItem01>
          <S.TableItem01 className="t-bg">결제</S.TableItem01>
          <S.TableItem01 className="t-left">
            휴대폰, 신용카드, PAYCO, 카카오페이, 제로페이, Discover
            Pass(외국인전용)
          </S.TableItem01>
          <S.TableItem01 className="t-bg">추가요금</S.TableItem01>
          <S.TableItem01 className="t-left t-none-line">
            · 1시간(2시간) 단위 반복 이용권을 1시간(2시간) 이내 대여소 미반납시
            초과 5분당 200원씩 과금
            <br />· 자전거 대여 후 기본 대여 시간 초과 시 추가 요금 부과(추가
            요금 미납시 제대여 불가)
          </S.TableItem01>
          <S.TableItem01 className="t-bg">이용시간</S.TableItem01>
          <S.TableItem01 className="t-left t-none-line">
            · [ 1시간권 ] 1시간 단위 반복 이용권
            <br />· [ 2시간권 ] 2시간 단위 반복 이용권
          </S.TableItem01>
        </S.Table01>
      </S.CitizenGroup>
      <S.CitizenGroup>
        <S.CitizenTitle>주의사항</S.CitizenTitle>
        <S.Table02>
          <S.TableItem02 className="t-head">01</S.TableItem02>
          <S.TableItem02 className="t-left">
            · 이용권 사용가능기간은 첫 회 대여시점부터 계산합니다.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(예 : 1일권을 13시에 구매 한 후 15시에
            처음으로 사용한 경우 사용가능기간은 다음날 15시까지입니다.)
            <br />
            · 1시간권 : 1회 대여 시 기본 대여시간은 60(분)입니다. 60(분)을
            초과하는 경우 추가요금을 지불해야하므로 반납 후 다시 대여하여
            이용하세요.
            <br />
            · 2시간권 : 1회 대여 시 기본 대여시간은 120(분)입니다. 120(분)을
            초과하는 경우 추가요금을 지불해야하므로 반납 후 다시 대여하여
            이용하세요.(기본 대여시간이내에 반납하는 것을 반복하면 추가요금 없이
            연속적으로 자전거를 이용할 수 있습니다.)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;※ 이용권 유효기간은 결제일로부터 3년
          </S.TableItem02>
          <S.TableItem02 className="t-head">02</S.TableItem02>
          <S.TableItem02 className="t-left">
            기본이용시간을 초과할 경우, 초과된 시간만큼의 비용이 처음 이용권
            구매 시 사용된 결제수단이나 이용자가 설정한 추가 과금 지불수단을
            통해 부과됩니다.
          </S.TableItem02>
          <S.TableItem02 className="t-head">03</S.TableItem02>
          <S.TableItem02 className="t-left">
            대여 후 4시간동안 반납이 이루어지지 않을 경우 도난자전거로 간주되어,
            경찰 신고 등이 이루어지므로, 반납이 어려울 경우
            운영센터(1599-0120)로 연락하시기 바랍니다.
          </S.TableItem02>
        </S.Table02>
      </S.CitizenGroup>
      <S.CitizenGroup>
        <S.CitizenTitle>환불규정</S.CitizenTitle>
        <S.Table03>
          <S.TableItem03 className="t-head">구분</S.TableItem03>
          <S.TableItem03 className="t-head">사용시</S.TableItem03>
          <S.TableItem03 className="t-head">
            이용개시일로부터 7일 이내
          </S.TableItem03>
          <S.TableItem03 className="t-head">
            이용개시일로부터 7일 초과
          </S.TableItem03>
          <S.TableItem03 className="t-head">미사용시</S.TableItem03>

          <S.TableItem03 className="t-bg">정기권</S.TableItem03>
          <S.TableItem03 className="t-bg">365일권</S.TableItem03>
          <S.TableItem03 className="t-bg">180일권</S.TableItem03>
          <S.TableItem03 className="t-bg">30일권</S.TableItem03>
          <S.TableItem03 className="t-bg">7일권</S.TableItem03>
          <S.TableItem03>7일권 이용요금 공제</S.TableItem03>
          <S.TableItem03>
            환불 요청일까지의 월별 이용요금 공제
            <br />
            (사용일수 X 30일권 이용요금)
          </S.TableItem03>
          <S.TableItem03>환불불가</S.TableItem03>
          <S.TableItem03>전액환불</S.TableItem03>
          <S.TableItem03 className="t-bg">일일권</S.TableItem03>
          <S.TableItem03>환불불가</S.TableItem03>
          <S.TableItem03 className="t-strong">
            ※ 이용권 사용한 경우(이용권 개시일 기준)
            <br />
            1일권 : 환불불가 , 7일권 : 2일이내, 30일권 : 7일이내, 180일권 :
            60일이내, 365일권은 150일이내 신청해야만 환불이 가능합니다.
          </S.TableItem03>
        </S.Table03>
      </S.CitizenGroup>
    </S.Wrapper>
  );
}
