import HeaderUI from "./Header.presenter";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { authService } from "../../../../commons/libraries/firebase/firebase.config";

export default function Header() {
  const [loginCheck, setLoginCheck] = useState(false);
  const router = useRouter();

  const onClickMoveToMenus = (event: MouseEvent<HTMLElement>) => {
    router.push(`/${event.currentTarget.id}`);
  };

  const onClickHeaderBtn = (route: string) => () => {
    if (route === "_logout") {
      alert("로그아웃 하시겠습니까?");
      authService.signOut();
      setLoginCheck(false);
    } else {
      router.push(route);
    }
  };

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      if (user) {
        setLoginCheck(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [loginCheck]);

  return (
    <HeaderUI
      onClickMoveToMenus={onClickMoveToMenus}
      onClickHeaderBtn={onClickHeaderBtn}
      loginCheck={loginCheck}
    />
  );
}
