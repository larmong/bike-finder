import HeaderUI from "./Header.presenter";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../../../../commons/libraries/firebase/firebase.config";

export default function Header() {
  const [loginCheck, setLoginCheck] = useState(false);
  const router = useRouter();

  const onClickMoveToMenus = (event: MouseEvent<HTMLElement>) => {
    router.push(`/${event.currentTarget.id}`);
  };

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoginCheck(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <HeaderUI onClickMoveToMenus={onClickMoveToMenus} loginCheck={loginCheck} />
  );
}
