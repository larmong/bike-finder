import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IBoardDataType } from "../board/Board.types";
import { db } from "../../../../../../commons/libraries/firebase/firebase.config";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import FaqDetailUI from "./FaqDetail.presenter";

export default function FaqDetail() {
  const router = useRouter();
  const boardId: string = String(router.query._id);
  const [fetchBoard, setFetchBoard] = useState<IBoardDataType>();

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

  return <FaqDetailUI fetchBoard={fetchBoard} />;
}
