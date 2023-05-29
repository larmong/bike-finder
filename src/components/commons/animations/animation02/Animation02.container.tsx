import Animation02UI from "./Animation02.presenter";
import firebase from "firebase/compat";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import DocumentData = firebase.firestore.DocumentData;

export default function Animation02() {
  const [fetchInstagram, setFetchInstagram] = useState<DocumentData[]>([]);
  const [isFirstDivVisible, setIsFirstDivVisible] = useState(true);

  const handleAnimationEnd = () => {
    setIsFirstDivVisible(false);
  };

  useEffect(() => {
    const getInstagramPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "instagram"));
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFetchInstagram(data);
      } catch (error) {
        console.error(error);
      }
    };
    getInstagramPosts();
  }, []);

  return (
    <Animation02UI
      fetchInstagram={fetchInstagram}
      isFirstDivVisible={isFirstDivVisible}
      handleAnimationEnd={handleAnimationEnd}
    />
  );
}
