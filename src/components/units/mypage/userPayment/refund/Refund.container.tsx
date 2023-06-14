import * as S from "./Refund.style";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import { IFetchBoard } from "../../../../commons/boards/board05/Board05.types";
import Board06 from "../../../../commons/boards/board06/Board06.container";

export default function Refund() {
  const [fetchBoard, setFetchBoard] = useState<IFetchBoard[]>([]);

  const BOARD_HEAD = ["신청일자", "환불금액", "결제상품", "상태", "비고"];
  const BOARD_COLUMNS = "120px 120px 200px 120px 1fr";
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
          collection(db, "refund"),
          where("userId", "==", "larmong"),
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
    getFetchBoardData();
  }, []);

  return (
    <S.Wrapper>
      <Board06
        BOARD_COLUMNS={BOARD_COLUMNS}
        BOARD_HEAD={BOARD_HEAD}
        fetchBoard={fetchBoard}
        SEARCH_TYPE={SEARCH_TYPE}
        onClickSearchType={onClickSearchType}
      />
    </S.Wrapper>
  );
}
