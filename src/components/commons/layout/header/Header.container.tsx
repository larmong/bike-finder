import HeaderUI from "./Header.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authService } from "../../../../commons/libraries/firebase/firebase.config";
import { CustomMouseEvent } from "../../../../commons/types/global.types";
import { loginUserState } from "../../../../commons/store/store";
import { useRecoilState } from "recoil";

export default function Header() {
  const [loginCheck, setLoginCheck] = useState(false);
  const [loginUser, setLoginUser] = useRecoilState<string | null>(
    loginUserState
  );
  const router = useRouter();

  const onClickMoveToMenus = (event: CustomMouseEvent) => {
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
        setLoginUser(user.email);
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
