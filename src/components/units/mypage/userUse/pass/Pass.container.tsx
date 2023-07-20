import * as S from "./Pass.style";
import { useEffect, useState } from "react";
import { IFetchBoard } from "../../../../commons/boards/board05/Board05.types";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import Board08 from "../../../../commons/boards/board08/board08.container";
import HistoryBoard from "./board/Board.container";
import { IFetchPass } from "./board/Board.types";

export default function Pass() {
  const [fetchBoard, setFetchBoard] = useState<IFetchBoard[]>([]);
  const [userPass, setUserPass] = useState<IFetchBoard[]>([]);
  const [receivedPass, setReceivedPass] = useState<IFetchBoard[]>([]);
  const [sentPass, setSentPass] = useState<IFetchBoard[]>([]);

  const PASS_TYPE = [
    {
      id: 0,
      name: "이용권현황",
      checkedState: true,
    },
    {
      id: 1,
      name: "받은이용권",
      checkedState: false,
    },
    {
      id: 2,
      name: "보낸이용권",
      checkedState: false,
    },
  ];
  const [passType, setPassType] = useState<number>(0);

  useEffect(() => {
    const getFetchBoardData = async () => {
      try {
        const data = await query(
          collection(db, "pass"),
          where("userId", "==", "larmong"),
          orderBy("date", "desc")
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setFetchBoard(result);

        const getFilterData = (fetchBoard: IFetchPass[]) => {
          const userPassData = fetchBoard.filter(
            (el: IFetchPass) => el.type === 0
          );
          const receivedPassData = fetchBoard.filter(
            (el: IFetchPass) => el.type === 1
          );
          const sentPassData = fetchBoard.filter(
            (el: IFetchPass) => el.type === 2
          );
          setUserPass(userPassData);
          setReceivedPass(receivedPassData);
          setSentPass(sentPassData);
        };
        getFilterData(result);
      } catch (error) {
        console.error(error);
      }
    };
    void getFetchBoardData();
  }, []);

  return (
    <HistoryBoard
      boardData={
        passType === 0
          ? userPass
          : passType === 1
          ? receivedPass
          : passType === 2
          ? sentPass
          : userPass
      }
      setPassType={setPassType}
      PASS_TYPE={PASS_TYPE}
    />
  );
}
