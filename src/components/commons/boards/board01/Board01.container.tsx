import Board01UI from "./Board01.presenter";
import { useEffect, useState } from "react";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { query, collection, getDocs, orderBy } from "firebase/firestore";
import { IFetchHelped } from "./Board01.types";

export default function Board01() {
  const [fetchHelped, setFetchHelped] = useState<IFetchHelped[]>([]);

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

  return <Board01UI fetchHelped={fetchHelped} />;
}
