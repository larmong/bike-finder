import * as S from "./Billing.style";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { IFetchBoard } from "../../../../commons/boards/board05/Board05.types";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import Board05 from "../../../../commons/boards/board05/Board05.container";

export default function Billing() {
  const [fetchBoard, setFetchBoard] = useState<IFetchBoard[]>([]);
  const [nonPaymentLength, setNonPaymentLength] = useState<number>(0);
  const [nonTotalPayment, setNonTotalPayment] = useState<number>(0);

  const BOARD_HEAD = ["대여일시", "미납내역", "미납금액", "상태"];
  const BOARD_COLUMNS = "120px 1fr 120px 120px";
  const PAYMENT_METHOD_TYPE = [
    {
      id: 0,
      name: "신용카드",
      checkedState: false,
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

  const [paymentMethodType, setPaymentMethodType] = useState<number>(0);

  const onClickPaymentMethodType = (radioNum) => {
    setPaymentMethodType(Number(radioNum));
  };

  const onClickPaymentButton = () => {
    // 초과 이용 내역 결제 버튼
  };

  useEffect(() => {
    const getFetchBoardData = async () => {
      try {
        const data = await query(
          collection(db, "billing"),
          where("userId", "==", "larmong"),
          orderBy("date", "desc")
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setFetchBoard(result);

        const getNonPaymentData = (fetchBoard) => {
          const nonPaymentData = fetchBoard.filter((el) => el.state === false);
          const totalPrice = nonPaymentData.reduce(
            (total, el) => total + el.price,
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
    getFetchBoardData();
  }, []);

  return (
    <S.Wrapper>
      <S.Notice>
        · 이용 가능시간은 첫 회 대여시점을 기준으로 계산합니다.
        <br />· 서울자전거 모든 대여소에서 사용이 가능합니다.
        <strong>· 서울자전거 환불규정에 따릅니다.</strong>· 이용권을 다른
        사람에게 양도할 수 없으며,양도로 인해 발생하는 불이익은 구매자가
        책임지셔야 합니다.
      </S.Notice>
      <Board05
        PAYMENT_METHOD_TYPE={PAYMENT_METHOD_TYPE}
        onClickPaymentMethodType={onClickPaymentMethodType}
        BOARD_COLUMNS={BOARD_COLUMNS}
        BOARD_HEAD={BOARD_HEAD}
        fetchBoard={fetchBoard}
        onClickPaymentButton={onClickPaymentButton}
        nonPaymentLength={nonPaymentLength}
        nonTotalPayment={nonTotalPayment}
      />
    </S.Wrapper>
  );
}
