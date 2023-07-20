import HistoryBoard from "./board/Board.container";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import { loginUserState } from "../../../../../commons/store/store";
import { IFetchHistory } from "./board/Board.types";

export default function History() {
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
  const [fetchBoard, setFetchBoard] = useState<IFetchHistory[]>([]);
  const [filteredBoard, setFilteredBoard] = useState<IFetchHistory[]>([]);
  const [paymentDateType, setPaymentDateType] = useState<number>(0);

  useEffect(() => {
    const getFetchBoardData = async () => {
      try {
        const data = await query(
          collection(db, "rental"),
          where("userId", "==", loginUser),
          orderBy("rental_date", "desc")
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
      filteredData = filteredData.filter((item: IFetchHistory) => {
        const paymentDate = new Date(item.rental_date);
        return paymentDate >= startDate && paymentDate <= currentDate;
      });
    }
    setFilteredBoard(filteredData);
  }, [fetchBoard, paymentDateType]);

  return (
    <HistoryBoard
      boardData={filteredBoard}
      PAYMENT_DATE_TYPE={PAYMENT_DATE_TYPE}
      setPaymentDateType={setPaymentDateType}
    />
  );
}
