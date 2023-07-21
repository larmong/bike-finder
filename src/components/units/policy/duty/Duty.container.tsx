import { Text } from "./Duty.style";
import { useEffect, useState } from "react";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import {
  query,
  collection,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

export default function Duty() {
  const [fetchDuty, setFetchDuty] = useState<string>("");
  useEffect(() => {
    const getDutyData = async () => {
      try {
        const data = await query(
          collection(db, "policy"),
          where(documentId(), "==", "duty")
        );
        const getData = await getDocs(data);
        const result = getData.docs.map((doc) => ({
          ...doc.data(),
        }));
        setFetchDuty(result[0].data);
      } catch (error) {
        console.error(error);
      }
    };
    void getDutyData();
  }, []);

  return <Text>{fetchDuty}</Text>;
}
