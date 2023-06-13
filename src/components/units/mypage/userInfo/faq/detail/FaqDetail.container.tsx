import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../../../../commons/libraries/firebase/firebase.config";
import BoardDetail02 from "../../../../../commons/boardDetail/boardDetail02/BoardDetail02.container";
import { IFetchBoard } from "../../../../../commons/boardDetail/boardDetail02/BoardDetail02.types";

export default function FaqDetail() {
  const router = useRouter();
  const boardId: string = String(router.query._id);
  const [fetchBoard, setFetchBoard] = useState<IFetchBoard>();

  useEffect(() => {
    if (boardId) {
      const getBoard = async () => {
        const data = await query(
          collection(db, "faq"),
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

  return <BoardDetail02 fetchBoard={fetchBoard} />;
}
