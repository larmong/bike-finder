import * as S from "./Faq.style";
import { useEffect, useState } from "react";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { ITabMenu } from "./Faq.types";
import InquiryFaqBoard from "./board/Board.container";
import { IPropsBoardItem } from "./board/Board.types";

export default function Faq() {
  const TAB_MENUS: ITabMenu[] = [
    {
      num: "0",
      name: "대여 및 반납",
    },
    {
      num: "1",
      name: "자전거 추가 배치",
    },
    {
      num: "2",
      name: "대여소(개설/폐쇄)",
    },
    {
      num: "3",
      name: "결제/환불/마일리지",
    },
    {
      num: "4",
      name: "자전거 및 시설 관리",
    },
    {
      num: "5",
      name: "앱 또는 홈페이지 문의",
    },
  ];

  const [tabNum, setTabNum] = useState<number>(0);
  const [fetchFaq, setFetchFaq] = useState<IPropsBoardItem[]>([]);

  const getFaqData = async (index: number) => {
    try {
      const data = await query(
        collection(db, "inquiry"),
        where("type", "==", String(index))
      );
      const getData = await getDocs(data);
      const result: any = getData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFetchFaq(result);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickMoveToTabMenus = (index: number) => {
    setTabNum(index);
    void getFaqData(index);
  };

  useEffect(() => {
    void getFaqData(tabNum);
  }, []);

  return (
    <>
      <S.Tab>
        {TAB_MENUS.map((el: ITabMenu, index: number) => (
          <S.Manus
            key={index}
            className={index === Number(tabNum) ? "target" : ""}
            onClick={() => onClickMoveToTabMenus(index)}
          >
            {el.name}
          </S.Manus>
        ))}
      </S.Tab>
      <InquiryFaqBoard fetchData={fetchFaq} isHead={false} />
    </>
  );
}
