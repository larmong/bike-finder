import HeaderUI from "./Header.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { authService } from "../../../../commons/libraries/firebase/firebase.config";
import { loginUidState, loginUserState } from "../../../../commons/store/store";
import { CustomMouseEvent } from "../../../../commons/types/global.types";

export default function Header() {
  const [loginCheck, setLoginCheck] = useState(false);
  const [loginUserUid, setLoginUserUid] = useRecoilState(loginUidState);
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);
  const router = useRouter();

  const onClickMoveToMenus = (event: CustomMouseEvent) => {
    router.push(`/${event.currentTarget.id}`);
  };

  const onClickHeaderBtn = (route: string) => () => {
    if (route === "_logout") {
      alert("로그아웃 하시겠습니까?");
      void authService.signOut();
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
        setLoginUserUid(user.uid);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [loginUser]);

  return (
    <HeaderUI
      onClickMoveToMenus={onClickMoveToMenus}
      onClickHeaderBtn={onClickHeaderBtn}
      loginCheck={loginCheck}
    />
  );
}
