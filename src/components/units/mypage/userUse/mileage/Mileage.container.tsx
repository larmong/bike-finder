import * as S from "./Mileage.style";
import { useEffect, useState } from "react";
import { IFetchBoard } from "../../../../commons/boards/board05/Board05.types";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import Board09 from "../../../../commons/boards/board09/board09.container";

export default function Mileage() {
  const [fetchBoard, setFetchBoard] = useState<IFetchBoard[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const BOARD_HEAD = ["적립일자", "이용권", "마일리지", "대여일시"];
  const BOARD_COLUMNS = "200px 1fr 200px 200px";
  const SEARCH_TYPE = [
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
      name: "직접입력",
      checkedState: false,
    },
  ];

  const [searchType, setSearchType] = useState<number>(0);

  const onClickSearchType = (radioNum) => {
    setSearchType(Number(radioNum));
  };

  useEffect(() => {
    const getFetchBoardData = async () => {
      try {
        const data = await query(
          collection(db, "mileage"),
          where("userId", "==", "larmong"),
          orderBy("date", "desc")
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setFetchBoard(result);

        const getAllMileageData = (fetchBoard) => {
          const totalPriceData = fetchBoard.reduce(
            (total, el) => total + el.price,
            0
          );
          setTotalPrice(totalPriceData);
        };

        getAllMileageData(result);
      } catch (error) {
        console.error(error);
      }
    };
    getFetchBoardData();
  }, []);
  return (
    <S.Wrapper>
      <S.Notice>
        · 대중교통 환승여부 확인에 4일이 소요되기 때문에 이용당일은 확인되지
        않습니다.
      </S.Notice>
      <Board09
        BOARD_COLUMNS={BOARD_COLUMNS}
        BOARD_HEAD={BOARD_HEAD}
        fetchBoard={fetchBoard}
        totalPrice={totalPrice}
        SEARCH_TYPE={SEARCH_TYPE}
        onClickSearchType={onClickSearchType}
      />
    </S.Wrapper>
  );
}
