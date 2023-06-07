import * as S from "./Board02.style";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { IFetchNotice } from "./Board02.types";
import Pagination01 from "../../paginations/pagination01/Pagination01.container";

export default function Board02UI(props) {
  const [fetchNotice, setFetchNotice] = useState<IFetchNotice[]>([]);
  const noticeLength: Number = fetchNotice.length;

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedNotice = fetchNotice.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
    console.log(currentPage);
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
    <S.Board>
      <S.BoardHead>
        <S.BoardItem>제목</S.BoardItem>
        <S.BoardItem>날짜</S.BoardItem>
      </S.BoardHead>
      <S.BoardBody>
        {paginatedNotice?.map((el) =>
          el.top === true ? (
            <S.BoardItemWrapper key={el.id}>
              <S.NoticeBoardItem className="board-item-left">
                <em>공지</em>
                <span>{el.title}</span>
              </S.NoticeBoardItem>
              <S.NoticeBoardItem>{el.date}</S.NoticeBoardItem>
            </S.BoardItemWrapper>
          ) : (
            <S.BoardItemWrapper key={el.id}>
              <S.BoardItem className="board-item-left">
                <span>{el.title}</span>
              </S.BoardItem>
              <S.BoardItem>{el.date}</S.BoardItem>
            </S.BoardItemWrapper>
          )
        )}
      </S.BoardBody>
      <Pagination01
        noticeLength={noticeLength}
        pageSize={pageSize}
        handlePageChange={handlePageChange}
      />
    </S.Board>
  );
}
