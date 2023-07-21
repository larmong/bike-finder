import HelpedBoard from "./board/Board.container";
import { useEffect, useState } from "react";
import { query, collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { IFetchData } from "./Helped.types";

export default function Helped() {
  const [fetchBoard, setFetchBoard] = useState<IFetchData[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

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

        void setFetchBoard(result);
      } catch (error) {
        console.error(error);
      }
    };
    void getHelpedData();
  }, []);

  return <HelpedBoard handleSearch={handleSearch} boardData={fetchBoard} />;
}
