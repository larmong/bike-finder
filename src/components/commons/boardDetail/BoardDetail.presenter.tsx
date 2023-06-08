import * as S from "./BoardDetail.style";
import { MdArrowBackIosNew } from "react-icons/md";
import { useEffect, useState } from "react";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../commons/libraries/firebase/firebase.config";
import { useRouter } from "next/router";

export default function BoardDetailUI() {
  const router = useRouter();
  const boardId: string = String(router.query._id);
  const [fetchBoard, setFetchBoard] = useState({});

  useEffect(() => {
    if (boardId) {
      const getBoard = async () => {
        const data = await query(
          collection(db, "notice"),
          where(documentId(), "==", boardId)
        );
        const getBoard = await getDocs(data);
        const result: any = getBoard.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setFetchBoard(result[0]);
      };
      void getBoard();
    }
  }, [boardId]);

  return (
    <S.Detail>
      <S.DetailHead>
        <S.BackBtn onClick={() => router.back()}>
          <MdArrowBackIosNew />
        </S.BackBtn>
        <S.BoardTitle>{fetchBoard?.title}</S.BoardTitle>
        <S.BoardDate>
          <span>Date: </span>
          {fetchBoard?.date}
        </S.BoardDate>
      </S.DetailHead>
      <S.DetailBody>{fetchBoard?.content}</S.DetailBody>
    </S.Detail>
  );
}
