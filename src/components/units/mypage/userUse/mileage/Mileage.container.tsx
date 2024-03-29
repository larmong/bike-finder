import * as S from "./Mileage.style";
import MileageBoard from "./board/Board.container";
import { Notice } from "../../../../commons/notices/notice/Notice.style";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import { loginUserState } from "../../../../../commons/store/store";
import { IFetchMileage } from "./board/Board.types";

export default function Mileage() {
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
  ];

  const [loginUser] = useRecoilState<string | null>(loginUserState);
  const [fetchBoard, setFetchBoard] = useState<IFetchMileage[]>([]);
  const [filteredBoard, setFilteredBoard] = useState<IFetchMileage[]>([]);
  const [paymentDateType, setPaymentDateType] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const allMileage: number = totalPrice * 0.1;

  useEffect(() => {
    const getFetchBoardData = async () => {
      try {
        const data = await query(
          collection(db, "mileage"),
          where("userId", "==", loginUser),
          orderBy("date", "desc")
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
    void getFetchBoardData();
  }, [loginUser]);

  useEffect(() => {
    let filteredData = fetchBoard;

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
      filteredData = filteredData.filter((item: IFetchMileage) => {
        const paymentDate = new Date(item.date);
        return paymentDate >= startDate && paymentDate <= currentDate;
      });
    }
    setFilteredBoard(filteredData);
  }, [fetchBoard, paymentDateType]);

  return (
    <S.Wrapper>
      <Notice>
        · 대중교통 환승여부 확인에 4일이 소요되기 때문에 이용당일은 확인되지
        않습니다.
      </Notice>
      <MileageBoard
        boardData={filteredBoard}
        PAYMENT_DATE_TYPE={PAYMENT_DATE_TYPE}
        setPaymentDateType={setPaymentDateType}
        allMileage={allMileage}
      />
    </S.Wrapper>
  );
}
