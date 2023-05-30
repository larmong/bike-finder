import { Text } from "./Use.style";
import { useEffect, useState } from "react";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import {
  query,
  collection,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

export default function Use() {
  const [fetchUse, setFetchUse] = useState<string>("");
  useEffect(() => {
    const getUseData = async () => {
      try {
        const data = await query(
          collection(db, "policy"),
          where(documentId(), "==", "use")
        );
        const getData = await getDocs(data);
        const result = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFetchUse(result[0].data);
      } catch (error) {
        console.error(error);
      }
    };
    getUseData();
  }, []);

  return <Text>{fetchUse}</Text>;
}
