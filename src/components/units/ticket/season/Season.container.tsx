import * as S from "./Season.style";
import Radio01 from "../../../commons/inputs/radio/radio01/Radio01.container";

export default function Season() {
  const TICKET_TYPE = [
    {
      name: "7일(1시간권)",
      price: 3000,
    },
    {
      name: "30일(1시간권)",
      price: 5000,
    },
    {
      name: "180일(1시간권)",
      price: 15000,
    },
    {
      name: "365일(1시간권)",
      price: 30000,
    },
    {
      name: "7일(2시간권)",
      price: 4000,
    },
    {
      name: "30일(2시간권)",
      price: 7000,
    },
    {
      name: "180일(2시간권)",
      price: 20000,
    },
    {
      name: "365일(2시간권)",
      price: 40000,
    },
  ];
  return (
    <S.Wrapper>
      <S.Notice>
        · 1회 1매씩 구매가 가능합니다.
        <br />
        · 대여시간은 1시간이며, 정해진 기간동안, 대여 반납이 가능합니다.
        <br />
        · 초과시 5분마다 추가요금(200원)과금됩니다.
        <br />
        <strong>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;예시) 기본 초과 1분 ~ 5분 : 200원, 6분 ~
          10분 : 400원
        </strong>
        <br />
        · 추가요금은 이용권 결제수단으로 자동결제됩니다.
        <br />
      </S.Notice>
      <S.Content>
        <S.ContentLeft>
          <S.SectionGroup>
            <S.SectionTitle>정기권 종류</S.SectionTitle>
            <Radio01 radioData={TICKET_TYPE} radioName="SeasonTicket" />
          </S.SectionGroup>
          <S.SectionGroup>
            <S.SectionTitle>마일리지 사용</S.SectionTitle>
            <input
              type="text"
              placeholder="최소 100마일리지 부터 사용 가능합니다."
            />
            <div>총 보유 마일리지 0</div>
          </S.SectionGroup>
        </S.ContentLeft>
        <S.ContentRight>
          <S.SectionGroup>
            <S.SectionTitle>결제 금액</S.SectionTitle>
            <div>
              이용권 <span>40,000원</span>
            </div>
            <div>
              마일리지 <span>0원</span>
            </div>
            <div>
              추가요금자동결제, 환불규정, 이용약관에 동의하며 결제를 진행합니다.
              만 13세 미만의 미성년자가 서비스를 이용하는 경우, 사고 발생 시
              보험 적용을 받을 수 없는 등의 불이익을 받으실 수 있습니다. (만
              15세 미만의 경우 상법 제732조에 의거하여 사망 보험 적용 불가)
            </div>
            <div>
              총 결제금액 <span>40,000원</span>
            </div>
          </S.SectionGroup>
          <button>결제하기</button>
        </S.ContentRight>
      </S.Content>
    </S.Wrapper>
  );
}
