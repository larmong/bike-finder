import * as S from "./Notice.style";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { IFetchNotice } from "../../../commons/boards/board02/Board02.types";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import Search01 from "../../../commons/searches/search01/Search01.contaienr";
import Board02 from "../../../commons/boards/board02/Board02.container";
import Board from "./board/Board.container";
import { IBoardDetailType } from "./board/Board.types";
import { CustomMouseEvent } from "../../../../commons/types/global.types";

export default function Notice() {
  const BOARD_DETAIL: IBoardDetailType = {
    title: ["제목", "상태", "날짜"],
    columns: "1fr 185px 185px",
  };
  const [fetchNotice, setFetchNotice] = useState<IFetchNotice[]>([]);

  const onClickBoardDetail = (event: CustomMouseEvent) => {
    router.push(`notice/${event.currentTarget.id}`);
  };

  useEffect(() => {
    const getNoticeData = async () => {
      try {
        const trueData = await query(
          collection(db, "notice"),
          where("top", "==", true),
          orderBy("date", "desc")
        );
        const trueGetData = await getDocs(trueData);
        const trueResult: any = trueGetData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const falseData = await query(
          collection(db, "notice"),
          where("top", "==", false),
          orderBy("date", "desc")
        );
        const falseGetData = await getDocs(falseData);
        const falseResult: any = falseGetData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const combinedResult = [...trueResult, ...falseResult];
        setFetchNotice(combinedResult);
      } catch (error) {
        console.error(error);
      }
    };
    getNoticeData();
  }, []);

  return (
    <S.Wrapper>
      <Board
        BOARD_DETAIL={BOARD_DETAIL}
        boardData={fetchNotice}
        onClickBoardDetail={onClickBoardDetail}
      />
    </S.Wrapper>
  );
}
