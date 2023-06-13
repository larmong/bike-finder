import * as S from "./UserInfoFaq.style";
import { MouseEvent, useEffect, useState } from "react";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Search01 from "../../../../commons/searches/search01/Search01.contaienr";
import Board03 from "../../../../commons/boards/board03/Board03.container";
import { useRouter } from "next/router";

export default function UserInfoFaq() {
  const router = useRouter();

  const BOARD_TABLE_TITLE = ["제목", "답변상태", "날짜"];
  const boardTableColumns = "1fr 185px 185px";

  const [fetchFaq, setFetchFaq] = useState([]);

  const onClickBoardDetail = (event: MouseEvent<HTMLElement>) => {
    router.push(`faq/${event.currentTarget.id}`);
    setFetchFaq(fetchFaq);
  };

  useEffect(() => {
    const getNoticeData = async () => {
      try {
        const data = await query(
          collection(db, "faq"),
          orderBy("date", "desc")
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setFetchFaq(result);
      } catch (error) {
        console.error(error);
      }
    };
    getNoticeData();
  }, []);

  return (
    <S.Wrapper>
      <Search01 />
      <Board03
        onClickBoardDetail={onClickBoardDetail}
        BOARD_TABLE_TITLE={BOARD_TABLE_TITLE}
        boardTableColumns={boardTableColumns}
        boardData={fetchFaq}
      />
    </S.Wrapper>
  );
}
