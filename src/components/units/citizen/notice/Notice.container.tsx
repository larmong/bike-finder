import * as S from "./Notice.style";
import Search01 from "../../../commons/searches/search01/Search01.contaienr";
import Board02 from "../../../commons/boards/board02/Board02.container";
import { useEffect, useState } from "react";
import { IFetchNotice } from "../../../commons/boards/board02/Board02.types";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../commons/libraries/firebase/firebase.config";

export default function Notice() {
  const BOARD_TABLE_TITLE = ["제목", "날짜"];
  const boardTableColumns = "1fr 185px";
  const [fetchNotice, setFetchNotice] = useState<IFetchNotice[]>([]);

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
      <Search01 />
      <Board02
        BOARD_TABLE_TITLE={BOARD_TABLE_TITLE}
        boardTableColumns={boardTableColumns}
        boardData={fetchNotice}
      />
    </S.Wrapper>
  );
}
