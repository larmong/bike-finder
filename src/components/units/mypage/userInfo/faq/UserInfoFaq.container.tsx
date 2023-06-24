import * as S from "./UserInfoFaq.style";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import { loginUserState } from "../../../../../commons/store/store";
import { CustomMouseEvent } from "../../../../../commons/types/global.types";
import { IBoardDataType } from "./board/Board.types";
import Board from "./board/Board.container";

export default function UserInfoFaq() {
  const router = useRouter();

  const [fetchBoard, setFetchBoard] = useState<IBoardDataType[]>([]);
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const onClickBoardDetail = (event: CustomMouseEvent) => {
    void router.push(`faq/${event.currentTarget.id}`);
    setFetchBoard(fetchBoard);
  };

  useEffect(() => {
    if (loginUser) {
      const getBoardData = async () => {
        try {
          const boardCollection = collection(db, "faq");
          let boardQuery = query(
            boardCollection,
            where("userId", "==", loginUser),
            orderBy("date", "desc")
          );

          if (searchKeyword !== "") {
            boardQuery = query(
              boardCollection,
              where("userId", "==", loginUser),
              where("title", "==", searchKeyword),
              orderBy("date", "desc")
            );
          }

          const data = await getDocs(boardQuery);
          const result = data.docs.map((doc) => ({
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
      <Board
        onClickBoardDetail={onClickBoardDetail}
        boardData={fetchBoard}
        handleSearch={handleSearch}
      />
    </S.Wrapper>
  );
}
