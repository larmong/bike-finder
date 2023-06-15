import * as S from "./UserUse.style";
import Tab01 from "../../../commons/tabs/tab01/Tab01.container";
import Mileage from "./mileage/Mileage.container";
import Pass from "./pass/Pass.container";
import { useEffect, useState } from "react";
import { IFetchBoard } from "../../../commons/boards/board05/Board05.types";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import Board07 from "../../../commons/boards/board07/board07.container";

export default function UserUse(props) {
  const TAB_MENUS = [
    {
      name: "대여반납 이력",
      route: "mypage/userUse",
    },
    {
      name: "이용권 내역",
      route: "mypage/userUse/pass",
    },
    {
      name: "마일리지 내역",
      route: "mypage/userUse/mileage",
    },
  ];

  const [fetchBoard, setFetchBoard] = useState<IFetchBoard[]>([]);

  const BOARD_HEAD = ["자전거", "대여일시", "대여소", "반납일시", "반납대여소"];
  const BOARD_COLUMNS = "1fr 1fr 1fr 1fr 1fr";
  const SEARCH_TYPE = [
    {
      id: 0,
      name: "전체",
      checkedState: true,
    },
    {
      id: 1,
      name: "1주일",
      checkedState: false,
    },
    {
      id: 2,
      name: "1개월",
      checkedState: false,
    },
    {
      id: 3,
      name: "3개월",
      checkedState: false,
    },
    {
      id: 4,
      name: "6개월",
      checkedState: false,
    },
    {
      id: 5,
      name: "직접입력",
      checkedState: false,
    },
  ];

  const [searchType, setSearchType] = useState<number>(0);

  const onClickSearchType = (radioNum) => {
    setSearchType(Number(radioNum));
  };

  useEffect(() => {
    const getFetchBoardData = async () => {
      try {
        const data = await query(
          collection(db, "rental"),
          where("userId", "==", "larmong"),
          orderBy("rental_date", "desc")
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setFetchBoard(result);
      } catch (error) {
        console.error(error);
      }
    };
    getFetchBoardData();
  }, []);

  return (
    <S.Wrapper>
      <Tab01 TAB_MENUS={TAB_MENUS} tabWidth="140px" />
      <S.Contents>
        {props.tab === "pass" ? (
          <Pass />
        ) : props.tab === "mileage" ? (
          <Mileage />
        ) : (
          <S.UserUse>
            <Board07
              BOARD_COLUMNS={BOARD_COLUMNS}
              BOARD_HEAD={BOARD_HEAD}
              fetchBoard={fetchBoard}
              SEARCH_TYPE={SEARCH_TYPE}
              onClickSearchType={onClickSearchType}
            />
          </S.UserUse>
        )}
      </S.Contents>
    </S.Wrapper>
  );
}
