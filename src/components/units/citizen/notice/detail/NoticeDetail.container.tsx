import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { IFetchBoard } from "../../../../commons/boardDetail/boardDetail01/BoardDetail01.types";
import BoardDetail01 from "../../../../commons/boardDetail/boardDetail01/BoardDetail01.container";

export default function NoticeDetail() {
  const router = useRouter();
  const boardId: string = String(router.query._id);
  const [fetchBoard, setFetchBoard] = useState<IFetchBoard>();

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

  return <BoardDetail01 fetchBoard={fetchBoard} />;
}
