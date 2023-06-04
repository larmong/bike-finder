import * as S from "./TicketPayment.style";
import { useState } from "react";
import { getPrice } from "../../../commons/utils/utils";
import Input01 from "../../../commons/inputs/input/input01/Input01.container";
import Radio01 from "../../../commons/inputs/radio/radio01/Radio01.container";
import Button01 from "../../../commons/buttons/button01/Button01.container";
import PaymentInfo from "../item/paymentInfo/PaymentInfo.container";

export default function TicketPayment(props) {
  console.log(props.pathname);
  const [userMileage, setUserMileage] = useState(1000);
  const [value, setValue] = useState<number | undefined>(undefined);

  const onChangeValue = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  const [ticketPrice, setTicketPrice] = useState(0);

  const onClickButton = () => {
    // >>>>>>>>>>> 결제하기 버튼 유효성검사 <<<<<<<<<<
    // 1. 이용권이 선택됐는지
    // 2. 마일리지를 사용 할 경우 유저가 갖고있는 마일리지보다 많은지 + 결제금액보다 사용 마일리지가 많은지 확인
    // 3 .결제할때 체크박스 모두 체크됐는지 확인
    // >>>>>>>>>>> 모두 통과되면 결제하는 페이지로 이동 <<<<<<<<<<
  };
  const onClickTicket = () => {
    // 이용권 선택(클릭)하면 금액이 setTicketPrice 에 저장됨
  };

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
      <S.Contents>
        <S.ContentLeft>
          <S.SectionGroup>
            <S.SectionTitle>정기권 종류</S.SectionTitle>
            <Radio01
              radioData={props.ticketData}
              radioName={`${props.pathname}Ticket`}
            />
          </S.SectionGroup>
          {props.pathname === "season" ? (
            <S.SectionGroup>
              <S.SectionTitle>마일리지 사용</S.SectionTitle>
              <Input01
                onChangeValue={onChangeValue}
                valueData={value}
                placeholderData="최소 100마일리지 부터 사용 가능합니다."
              />
              <S.MileageGroup>
                총 보유 마일리지 <span>{getPrice(userMileage)}</span>
              </S.MileageGroup>
            </S.SectionGroup>
          ) : (
            ""
          )}
        </S.ContentLeft>
        <S.ContentRight>
          <S.SectionGroup>
            <S.SectionTitle>결제 금액</S.SectionTitle>
            <PaymentInfo
              pathname={props.pathname}
              ticketPrice={ticketPrice}
              mileage={value}
            />
          </S.SectionGroup>
          <S.TotalWrapper>
            <p>총 결제금액</p>
            <span>
              {getPrice(
                value === undefined ? ticketPrice : ticketPrice - value
              )}
              원
            </span>
          </S.TotalWrapper>
          <Button01 onClickButton={onClickButton} btnText="결제하기" />
        </S.ContentRight>
      </S.Contents>
    </S.Wrapper>
  );
}
