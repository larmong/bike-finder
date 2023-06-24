import * as S from "./Notice.style";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { IFetchNotice } from "./board/Board.types";
import { CustomMouseEvent } from "../../../../commons/types/global.types";
import NoticeBoard from "./board/Board.container";

export default function Notice() {
  const router = useRouter();

  const [fetchBoard, setFetchBoard] = useState<IFetchNotice[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const onClickBoardDetail = (event: CustomMouseEvent) => {
    void router.push(`notice/${event.currentTarget.id}`);
  };

  useEffect(() => {
    const getBoardData = async () => {
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
        })) as IFetchNotice[];
        const combinedResult = [...trueResult, ...falseResult];
        setFetchBoard(combinedResult);
      } catch (error) {}
    };
    void getBoardData();
  }, []);

  return (
    <S.Wrapper>
      <NoticeBoard
        onClickBoardDetail={onClickBoardDetail}
        handleSearch={handleSearch}
        boardData={fetchBoard}
      />
    </S.Wrapper>
  );
}
