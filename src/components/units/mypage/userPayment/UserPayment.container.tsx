import * as S from "./UserPayment.style";
import { MdError } from "react-icons/md";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  documentId,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { loginUserState } from "../../../../commons/store/store";
import { IFetchPayment } from "./board/Board.types";
import { IPropsUserPayment } from "./UserPayment.types";
import Tab01 from "../../../commons/tabs/tab01/Tab01.container";
import Billing from "./billing/Billing.container";
import Method from "./method/Method.container";
import Refund from "./refund/Refund.container";
import PaymentBoard from "./board/Board.container";
import { CustomMouseEvent } from "../../../../commons/types/global.types";

export default function UserPayment(props: IPropsUserPayment) {
  const router = useRouter();

  const [loginUser] = useRecoilState<string | null>(loginUserState);
  const [fetchBoard, setFetchBoard] = useState<IFetchPayment[]>([]);
  const [filteredBoard, setFilteredBoard] = useState<IFetchPayment[]>([]);
  const [paymentMethodType, setPaymentMethodType] = useState<number>(0);
  const [paymentDateType, setPaymentDateType] = useState<number>(0);

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
      name: "전체",
      checkedState: true,
    },
    {
      id: 1,
      name: "1주일",
      checkedState: false,
    },
    {
      id: 2,
      name: "1개월",
      checkedState: false,
    },
    {
      id: 3,
      name: "3개월",
      checkedState: false,
    },
    {
      id: 4,
      name: "6개월",
      checkedState: false,
    },
    {
      id: 5,
      name: "1년",
      checkedState: false,
    },
  ];

  useEffect(() => {
    const getFetchBoardData = async () => {
      try {
        const data = await query(
          collection(db, "payment"),
          where("userId", "==", loginUser),
          orderBy("payment_date", "desc")
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFetchBoard(result);
      } catch (error) {}
    };
    void getFetchBoardData();
  }, [loginUser]);

  useEffect(() => {
    let filteredData = fetchBoard;
    if (props.tab === "method") {
      setFilteredBoard(filteredData);
      return;
    }
    if (paymentMethodType !== 0) {
      filteredData = filteredData.filter((item) =>
        item.method.includes(
          String(PAYMENT_METHOD_TYPE[paymentMethodType].name)
        )
      );
    }
    if (paymentDateType !== 0) {
      const currentDate = new Date();
      let startDate = new Date();

      if (paymentDateType === 1) {
        startDate.setDate(currentDate.getDate() - 7);
      } else if (paymentDateType === 2) {
        startDate.setMonth(currentDate.getMonth() - 1);
      } else if (paymentDateType === 3) {
        startDate.setMonth(currentDate.getMonth() - 3);
      } else if (paymentDateType === 4) {
        startDate.setMonth(currentDate.getMonth() - 6);
      } else if (paymentDateType === 5) {
        startDate.setFullYear(currentDate.getFullYear() - 1);
      }
      filteredData = filteredData.filter((item: IFetchPayment) => {
        const paymentDate = new Date(item.payment_date);
        return paymentDate >= startDate && paymentDate <= currentDate;
      });
    }
    setFilteredBoard(filteredData);
  }, [fetchBoard, props.tab, paymentMethodType, paymentDateType]);

  const onClickRefundBtn = async (event: CustomMouseEvent) => {
    const target = event.currentTarget as HTMLInputElement;
    try {
      const data = query(
        collection(db, "payment"),
        where(documentId(), "==", target.id)
      );
      const result = await getDocs(data);
      result.forEach((doc) => {
        const updatedBoard = fetchBoard.map((item: IFetchPayment) => {
          if (item.id === target.id) {
            return {
              ...item,
              state: 1,
            };
          }
          return item;
        });
        setDoc(doc.ref, {
          ...updatedBoard[0],
        });
      });
      alert("환불 신청이 완료되었습니다.");
    } catch (error) {
      console.log(error);
    }
    void router.push("/mypage/userPayment");
  };

  return (
    <S.Wrapper>
      <Tab01 TAB_MENUS={TAB_MENUS} tabWidth="140px" />
      {props.tab === "method" ? (
        ""
      ) : (
        <S.RefundGuide onClick={() => router.push("/citizen/charges")}>
          <MdError />
          <span>환불규정 안내</span>
        </S.RefundGuide>
      )}
      <S.Contents>
        {props.tab === "billing" ? (
          <Billing />
        ) : props.tab === "method" ? (
          <Method />
        ) : props.tab === "refund" ? (
          <Refund />
        ) : (
          <S.UserPayment>
            <PaymentBoard
              onClickRefundBtn={onClickRefundBtn}
              boardData={filteredBoard}
              setPaymentMethodType={setPaymentMethodType}
              setPaymentDateType={setPaymentDateType}
              PAYMENT_METHOD_TYPE={PAYMENT_METHOD_TYPE}
              PAYMENT_DATE_TYPE={PAYMENT_DATE_TYPE}
            />
          </S.UserPayment>
        )}
      </S.Contents>
    </S.Wrapper>
  );
}
