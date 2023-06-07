import * as S from "./Board02.style";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { IFetchNotice } from "./Board02.types";
import Pagination01 from "../../paginations/pagination01/Pagination01.container";

export default function Board02UI(props) {
  const [fetchNoticeTop, setFetchNoticeTop] = useState<IFetchNotice[]>([]);
  const [fetchNotice, setFetchNotice] = useState<IFetchNotice[]>([]);
  const noticeLength: Number = fetchNotice.length;

  useEffect(() => {
    const getNoticeTopData = async () => {
      try {
        const data = await query(
          collection(db, "notice"),
          where("top", "==", true)
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setFetchNoticeTop(result);
      } catch (error) {
        console.error(error);
      }
    };
    const getNoticeData = async () => {
      try {
        const data = await query(
          collection(db, "notice"),
          where("top", "==", false)
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setFetchNotice(result);
      } catch (error) {
        console.error(error);
      }
    };
    getNoticeTopData();
    getNoticeData();
  }, []);

  return (
    <S.Board>
      <S.BoardHead>
        <S.BoardItem>제목</S.BoardItem>
        <S.BoardItem>날짜</S.BoardItem>
      </S.BoardHead>
      <S.BoardBody>
        {/* 공지 */}
        {fetchNoticeTop?.map((el) => (
          <S.BoardItemWrapper key={el.id}>
            <S.NoticeBoardItem className="board-item-left">
              <em>공지</em>
              <span>{el.title}</span>
            </S.NoticeBoardItem>
            <S.NoticeBoardItem>{el.date}</S.NoticeBoardItem>
          </S.BoardItemWrapper>
        ))}
        {/* 게시글 */}
        {fetchNotice?.map((el) => (
          <S.BoardItemWrapper key={el.id}>
            <S.BoardItem className="board-item-left">
              <span>{el.title}</span>
            </S.BoardItem>
            <S.BoardItem>{el.date}</S.BoardItem>
          </S.BoardItemWrapper>
        ))}
      </S.BoardBody>
      <Pagination01 noticeLength={noticeLength} />
    </S.Board>
  );
}
