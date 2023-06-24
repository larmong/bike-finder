import * as S from "./UserInfoFaq.style";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import { loginUserState } from "../../../../../commons/store/store";
import { CustomMouseEvent } from "../../../../../commons/types/global.types";
import Board from "./board/Board.container";
import { IBoardDataType } from "./board/Board.types";

export default function UserInfoFaq() {
  const router = useRouter();

  const [fetchBoard, setFetchBoard] = useState<IBoardDataType[]>([]);
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);

  const onClickBoardDetail = (event: CustomMouseEvent) => {
    void router.push(`faq/${event.currentTarget.id}`);
    setFetchBoard(fetchBoard);
  };

  useEffect(() => {
    if (loginUser) {
      const getBoardData = async () => {
        try {
          const data = await query(
            collection(db, "faq"),
            where("userId", "==", loginUser),
            orderBy("date", "desc")
          );
          const getData = await getDocs(data);
          const result = getData.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as IBoardDataType[];
          setFetchBoard(result);
        } catch (error) {}
      };
      void getBoardData();
    }
  }, [loginUser]);

  return (
    <S.Wrapper>
      <Board onClickBoardDetail={onClickBoardDetail} boardData={fetchBoard} />
    </S.Wrapper>
  );
}
