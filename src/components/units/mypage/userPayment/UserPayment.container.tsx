import * as S from "./UserPayment.style";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { MdError } from "react-icons/md";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import Tab01 from "../../../commons/tabs/tab01/Tab01.container";
import Billing from "./billing/Billing.container";
import Method from "./method/Method.container";
import Refund from "./refund/Refund.container";
import Radio02 from "../../../commons/inputs/radio/radio02/Radio02.container";
import Board04 from "../../../commons/boards/board04/Board04.container";
import { IFetchBoard } from "../../../commons/boards/board04/Board04.types";

export default function UserPayment(props) {
  const router = useRouter();

  const [fetchBoard, setFetchBoard] = useState<IFetchBoard[]>([]);

  const TAB_MENUS = [
    {
      name: "결제내역",
      route: "mypage/userPayment",
    },
    {
      name: "추가과금 결제",
      route: "mypage/userPayment/billing",
    },
    {
      name: "추가과금 수단",
      route: "mypage/userPayment/method",
    },
    {
      name: "환불신청 내역",
      route: "mypage/userPayment/refund",
    },
  ];
  const BOARD_HEAD = [
    "결제일자",
    "결제수단",
    "결제상품",
    "결제금액",
    "이용권개시일",
    "상태",
    "환불/취소",
  ];
  const BOARD_COLUMNS = "120px 120px 1fr 120px 120px 120px 120px";

  const PAYMENT_METHOD_TYPE = [
    {
      id: 0,
      name: "전체",
      checkedState: true,
    },
    {
      id: 1,
      name: "신용카드",
      checkedState: false,
    },
    {
      id: 2,
      name: "무통장입금",
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
  const PAYMENT_DATE_TYPE = [
    {
      id: 0,
      name: "1주일",
      checkedState: false,
    },
    {
      id: 1,
      name: "1개월",
      checkedState: false,
    },
    {
      id: 2,
      name: "3개월",
      checkedState: false,
    },
    {
      id: 3,
      name: "6개월",
      checkedState: false,
    },
    {
      id: 4,
      name: "직접입력",
      checkedState: false,
    },
  ];

  const onClickRefundBtn = () => {
    // 환불신청 버튼
  };

  const [paymentMethodType, setPaymentMethodType] = useState<number>(0);
  const [paymentDateType, setPaymentDateType] = useState<number | undefined>(
    undefined
  );
  const onClickPaymentMethodType = (radioNum) => {
    setPaymentMethodType(Number(radioNum));
  };
  const onClickPaymentDateType = (radioNum) => {
    setPaymentDateType(Number(radioNum));
  };

  useEffect(() => {
    const getFetchBoardData = async () => {
      try {
        const data = await query(
          collection(db, "payment"),
          where("userId", "==", "larmong"),
          orderBy("payment_date", "desc")
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setFetchBoard(result);
      } catch (error) {
        console.error(error);
      }
    };
    getFetchBoardData();
  }, []);

  return (
    <S.Wrapper>
      <Tab01 TAB_MENUS={TAB_MENUS} tabWidth="140px" />
      <S.RefundGuide onClick={() => router.push("/citizen/charges")}>
        <MdError />
        <span>환불규정 안내</span>
      </S.RefundGuide>
      <S.Contents>
        {props.tab === "billing" ? (
          <Billing />
        ) : props.tab === "method" ? (
          <Method />
        ) : props.tab === "refund" ? (
          <Refund />
        ) : (
          <S.UserPayment>
            <Board04
              PAYMENT_METHOD_TYPE={PAYMENT_METHOD_TYPE}
              onClickPaymentMethodType={onClickPaymentMethodType}
              PAYMENT_DATE_TYPE={PAYMENT_DATE_TYPE}
              onClickPaymentDateType={onClickPaymentDateType}
              BOARD_COLUMNS={BOARD_COLUMNS}
              BOARD_HEAD={BOARD_HEAD}
              fetchBoard={fetchBoard}
              onClickRefundBtn={onClickRefundBtn}
            />
          </S.UserPayment>
        )}
      </S.Contents>
    </S.Wrapper>
  );
}
