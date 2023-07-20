import HistoryBoard from "./board/Board.container";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import { loginUserState } from "../../../../../commons/store/store";
import { IFetchPass } from "./board/Board.types";

export default function Pass() {
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

  const [loginUser] = useRecoilState<string | null>(loginUserState);
  const [fetchBoard, setFetchBoard] = useState<IFetchPass[]>([]);
  const [userPass, setUserPass] = useState<IFetchPass[]>([]);
  const [receivedPass, setReceivedPass] = useState<IFetchPass[]>([]);
  const [sentPass, setSentPass] = useState<IFetchPass[]>([]);
  const [passType, setPassType] = useState<number>(0);

  useEffect(() => {
    const getFetchBoardData = async () => {
      try {
        const data = await query(
          collection(db, "pass"),
          where("userId", "==", loginUser),
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
  }, [loginUser]);

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
