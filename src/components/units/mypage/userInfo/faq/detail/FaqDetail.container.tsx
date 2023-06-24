import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FaqDetailUI from "./FaqDetail.presenter";
import { db } from "../../../../../../commons/libraries/firebase/firebase.config";
import { IFetchFaq } from "../board/Board.types";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default function FaqDetail() {
  const router = useRouter();
  const boardId: string = String(router.query._id);
  const [fetchBoard, setFetchBoard] = useState<IFetchFaq>();

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
