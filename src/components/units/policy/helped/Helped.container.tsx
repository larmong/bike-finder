import * as S from "./Helped.style";
import Search01 from "../../../commons/searches/search01/Search01.contaienr";
import Board01 from "../../../commons/boards/board01/Board01.container";
import { useEffect, useState } from "react";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { query, collection, getDocs, orderBy } from "firebase/firestore";
import { IFetchData } from "./Helped.types";

export default function Helped() {
  const [fetchHelped, setFetchHelped] = useState<IFetchData[]>([]);

  useEffect(() => {
    const getHelpedData = async () => {
      try {
        const data = await query(
          collection(db, "helped"),
          orderBy("date", "desc")
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setFetchHelped(result);
      } catch (error) {
        console.error(error);
      }
    };
    getHelpedData();
  }, []);

  return (
    <S.Wrapper>
      <Search01 />
      <Board01 fetchData={fetchHelped} isHead={true} />
    </S.Wrapper>
  );
}
