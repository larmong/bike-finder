import Animation02UI from "./Animation02.presenter";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { IFetchInstagram } from "./Animation02.types";

export default function Animation02() {
  const [fetchInstagram, setFetchInstagram] = useState<IFetchInstagram[]>([]);
  const [isFirstDivVisible, setIsFirstDivVisible] = useState(true);

  const handleAnimationEnd = () => {
    setIsFirstDivVisible(false);
  };

  useEffect(() => {
    const getInstagramPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "instagram"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          favorite: doc.data().favorite,
          comment: doc.data().comment,
          image: doc.data().image,
        }));
        setFetchInstagram(data);
      } catch (error) {}
    };
    void getInstagramPosts();
  }, []);

  return (
    <Animation02UI
      fetchInstagram={fetchInstagram}
      isFirstDivVisible={isFirstDivVisible}
      handleAnimationEnd={handleAnimationEnd}
    />
  );
}
