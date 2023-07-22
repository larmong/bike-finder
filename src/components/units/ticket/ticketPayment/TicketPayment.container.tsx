import * as S from "./TicketPayment.style";
import { useState } from "react";
import { getPrice } from "../../../commons/utils/utils";
import { MdError } from "react-icons/md";
import { useRouter } from "next/router";
import { LoginCheck } from "../../../commons/hocs/loginCheck";
import { Notice } from "../../../commons/notices/notice/Notice.style";
import Head from "next/head";
import Input01 from "../../../commons/inputs/input/input01/Input01.container";
import Radio01 from "../../../commons/inputs/radio/radio01/Radio01.container";
import Button01 from "../../../commons/buttons/button01/Button01.container";
import PaymentInfo from "../item/paymentInfo/PaymentInfo.container";
import { CustomChangeEvent } from "../../../../commons/types/global.types";
import { IPropsTicketPayment } from "./TicketPayment.types";

declare const window: typeof globalThis & {
  IMP: any;
};

function TicketPayment(props: IPropsTicketPayment) {
  const router = useRouter();

  const [userMileage, setUserMileage] = useState(1000);
  const [value, setValue] = useState<number | string>("");
  const [ticketPrice, setTicketPrice] = useState(0);
  const [cbValue, setCbValue] = useState<boolean>(false);

  const onChangeMileageValue = (event: CustomChangeEvent) => {
    setValue(event.target.value);
  };

  const onClickTicketType = (ticketNum: number) => {
    setTicketPrice(Number(ticketNum));
  };

  const onClickButton = () => {
    if (ticketPrice !== 0) {
      // 1. 이용권이 선택됐는지 확인
      if (Number(value) <= ticketPrice) {
        // 2. 결제금액보다 사용 마일리지가 많은지 확인
        if (Number(value) <= userMileage) {
          // 3. 사용 마일리지보다 유저가 갖고있는 마일리지가 많은지 확인
          if (cbValue) {
            // 4. 체크박스 모두 체크됐는지 확인
            const IMP = window.IMP;
            IMP.init("imp62582078");

            IMP.request_pay(
              {
                pg: "nice",
                pay_method: "card",
                name: "노르웨이 회전 의자",
                amount: 100,
                buyer_email: "larmong@naver.com",
                buyer_name: "이루이",
                buyer_tel: "010-4242-4242",
                buyer_addr: "서울특별시 강남구 신사동",
                buyer_postcode: "01181",
                m_redirect_url: "http://localhost:3000/mypage/userPayment",
              },
              (rsp: any) => {
                if (rsp.success) {
                  // 결제 성공 시 로직
                  console.log(rsp.success);
                } else {
                  alert("결제에 실패했습니다. 다시 시도해 주세요!");
                }
              }
            );
          } else {
            alert("결제 이용약관을 확인하고 체크해주세요!");
          }
        } else {
          alert("마일리지 사용 금액이 보유 마일리지 금액보다 많습니다!");
        }
      } else {
        alert("마일리지 사용 금액이 이용권 금액보다 많습니다!");
      }
    } else {
      alert("이용권이 선택되지 않았습니다!");
    }
  };

  return (
    <>
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <S.Wrapper>
        <S.PassGuide onClick={() => router.push("/citizen/charges")}>
          <MdError />
          <span>이용권 사용안내</span>
        </S.PassGuide>
        <Notice>
          · 1회 1매씩 구매가 가능합니다.
          <br />
          · 대여시간은 1시간이며, 정해진 기간동안, 대여 반납이 가능합니다.
          <br />
          · 초과시 5분마다 추가요금(200원)과금됩니다.
          <br />
          <em>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;예시) 기본 초과 1분 ~ 5분 : 200원, 6분
            ~ 10분 : 400원
          </em>
          · 추가요금은 이용권 결제수단으로 자동결제됩니다.
          <br />
        </Notice>
        <S.Contents>
          <S.ContentLeft>
            <S.SectionGroup>
              <S.SectionTitle>
                {props.pathname === "season" || props.pathname === "season-gift"
                  ? "정기권"
                  : "일일권"}
                &nbsp;종류
              </S.SectionTitle>
              <Radio01
                onClickRadio={onClickTicketType}
                radioData={props.ticketData}
                radioName={`${props.pathname}Ticket`}
              />
            </S.SectionGroup>
            {props.pathname === "season" ? (
              <S.SectionGroup>
                <S.SectionTitle>마일리지 사용</S.SectionTitle>
                <Input01
                  inputType="text"
                  onChangeValue={onChangeMileageValue}
                  valueData={value}
                  inputId="mileageValue"
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
                setCbValue={setCbValue}
              />
            </S.SectionGroup>
            <S.TotalWrapper>
              <p>총 결제금액</p>
              <span>
                {getPrice(
                  value === undefined
                    ? ticketPrice
                    : ticketPrice - Number(value)
                )}
                원
              </span>
            </S.TotalWrapper>
            <Button01
              onClickButton={onClickButton}
              btnWidth="200px"
              btnText="결제하기"
            />
          </S.ContentRight>
        </S.Contents>
      </S.Wrapper>
    </>
  );
}

export default LoginCheck(TicketPayment);
