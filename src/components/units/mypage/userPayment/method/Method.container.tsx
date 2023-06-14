import * as S from "./Method.style";
import Radio02 from "../../../../commons/inputs/radio/radio02/Radio02.container";
import { useState } from "react";
import Button01 from "../../../../commons/buttons/button01/Button01.container";

export default function Method() {
  const PAYMENT_METHOD_TYPE = [
    {
      id: 0,
      name: "신용카드",
      checkedState: false,
    },
    {
      id: 1,
      name: "PAYCO결제",
      checkedState: false,
    },
    {
      id: 2,
      name: "휴대폰결제",
      checkedState: false,
    },
    {
      id: 3,
      name: "휴대폰결제",
      checkedState: false,
    },
    {
      id: 4,
      name: "카카오페이",
      checkedState: false,
    },
    {
      id: 5,
      name: "제로페이",
      checkedState: false,
    },
    {
      id: 6,
      name: "티머니결제",
      checkedState: false,
    },
  ];

  const [paymentMethodType, setPaymentMethodType] = useState<number>(0);

  const onClickPaymentMethodType = (radioNum: number) => {
    setPaymentMethodType(Number(radioNum));
  };

  const onClickChangeMethod = () => {
    // 결제수단 변경
  };

  return (
    <S.Wrapper>
      <S.Notice>
        · 추가과금이 발생할 경우 등록한 결제 수단으로 자동 결제됩니다.
        <br />· <strong>추가과금수단 변경시 500원이 결제</strong>됩니다. 그리고
        해당 결제금액은
        <strong>일정시간이 지난 후 자동으로 결제취소가 진행</strong>됩니다.
        (최대 5분 정도 소요)
      </S.Notice>
      <S.Contents>
        <S.Message>
          현재 등록되어 있는 추가 과금 결제 수단은 <span>PAYCO</span> 입니다.
        </S.Message>
        <S.Method>
          <S.MethodHead>결제수단</S.MethodHead>
          <S.MethodBody>
            <Radio02
              onClickRadio={onClickPaymentMethodType}
              radioData={PAYMENT_METHOD_TYPE}
              radioName="paymentMethodType"
            />
          </S.MethodBody>
        </S.Method>
        <Button01
          onClickButton={onClickChangeMethod}
          btnWidth="200px"
          btnText="변경하기"
        />
      </S.Contents>
    </S.Wrapper>
  );
}
