import * as S from "./Billing.style";
import BillingBoard from "./board/Board.container";
import { Notice } from "../../../../commons/notices/notice/Notice.style";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import { loginUserState } from "../../../../../commons/store/store";
import { IFetchBilling } from "./board/Board.types";
import { CustomMouseEvent } from "../../../../../commons/types/global.types";

export default function Billing() {
  const [loginUser] = useRecoilState<string | null>(loginUserState);
  const [fetchBoard, setFetchBoard] = useState<IFetchBilling[]>([]);
  const [paymentMethodType, setPaymentMethodType] = useState<number>(0);
  const [nonPaymentLength, setNonPaymentLength] = useState<number>(0);
  const [nonTotalPayment, setNonTotalPayment] = useState<number>(0);
  const [cbValue, setCbValue] = useState(false);

  const PAYMENT_METHOD_TYPE = [
    {
      id: 0,
      name: "신용카드",
      checkedState: true,
    },
    {
      id: 1,
      name: "무통장입금",
      checkedState: false,
    },
    {
      id: 2,
      name: "휴대폰결제",
      checkedState: false,
    },
    {
      id: 3,
      name: "카카오페이",
      checkedState: false,
    },
    {
      id: 4,
      name: "제로페이",
      checkedState: false,
    },
    {
      id: 5,
      name: "티머니결제",
      checkedState: false,
    },
  ];

  const onClickCb = (event: CustomMouseEvent) => {
    const target = event.target as HTMLInputElement;
    setCbValue(target.checked);
  };
  const onClickPaymentButton = () => {
    if (cbValue) {
      if (nonPaymentLength === 0) {
        alert("결제할 금액이 없습니다!");
      } else {
        // 결제페이지 이동
      }
    } else {
      alert("초과 이용 결제 약관에 동의해주세요!");
    }
  };

  useEffect(() => {
    const getFetchBoardData = async () => {
      try {
        const data = await query(
          collection(db, "billing"),
          where("userId", "==", loginUser),
          orderBy("date", "desc")
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setFetchBoard(result);

        const getNonPaymentData = (fetchBoard: IFetchBilling[]) => {
          const nonPaymentData = fetchBoard.filter(
            (el: IFetchBilling) => !el.state
          );
          const totalPrice = nonPaymentData.reduce(
            (total: number, el: IFetchBilling) => total + el.price,
            0
          );
          setNonPaymentLength(nonPaymentData.length);
          setNonTotalPayment(totalPrice);
        };

        getNonPaymentData(result);
      } catch (error) {
        console.error(error);
      }
    };
    void getFetchBoardData();
  }, [loginUser]);

  return (
    <S.Wrapper>
      <Notice>
        · 이용 가능시간은 첫 회 대여시점을 기준으로 계산합니다.
        <br />· 서울자전거 모든 대여소에서 사용이 가능합니다.
        <em>· 서울자전거 환불규정에 따릅니다.</em>· 이용권을 다른 사람에게
        양도할 수 없으며,양도로 인해 발생하는 불이익은 구매자가 책임지셔야
        합니다.
      </Notice>
      <BillingBoard
        boardData={fetchBoard}
        setPaymentMethodType={setPaymentMethodType}
        PAYMENT_METHOD_TYPE={PAYMENT_METHOD_TYPE}
        nonTotalPayment={nonTotalPayment}
        nonPaymentLength={nonPaymentLength}
        onClickPaymentButton={onClickPaymentButton}
        onClickCb={onClickCb}
      />
    </S.Wrapper>
  );
}
