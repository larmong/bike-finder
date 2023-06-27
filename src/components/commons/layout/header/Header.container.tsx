import HeaderUI from "./Header.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { authService } from "../../../../commons/libraries/firebase/firebase.config";
import {
  loginUidState,
  loginUserState,
  mobileMenuState,
} from "../../../../commons/store/store";
import { CustomMouseEvent } from "../../../../commons/types/global.types";

export default function Header() {
  const router = useRouter();
  const [, setLoginUserUid] = useRecoilState(loginUidState);
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);
  const [mobileMenu, setMobileMenu] = useRecoilState<boolean>(mobileMenuState);
  const [loginCheck, setLoginCheck] = useState(false);

  const onClickHeaderBtn = (route: string) => () => {
    if (route === "_logout") {
      alert("로그아웃 하시겠습니까?");
      void authService.signOut();
      setLoginCheck(false);
    } else {
      void router.push(route);
    }
  };

  const onClickMobileMenuOpen = () => {
    setMobileMenu((prev: boolean) => !prev);
  };

  const onClickMoveToMenus = (event: CustomMouseEvent) => {
    void router.push(`/${event.currentTarget.id}`);
  };

  const onClickMoveToMainPage = () => {
    void router.push("/");
    setMobileMenu(false);
  };
  const onClickMoveToMobileMenus = (event: CustomMouseEvent) => {
    const target = event.currentTarget as HTMLInputElement;
    void router.push(`/${target.id}`);
    setMobileMenu(false);
  };

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenu]);

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
      loginUser={loginUser}
      loginCheck={loginCheck}
      mobileMenu={mobileMenu}
      onClickHeaderBtn={onClickHeaderBtn}
      onClickMoveToMenus={onClickMoveToMenus}
      onClickMobileMenuOpen={onClickMobileMenuOpen}
      onClickMoveToMainPage={onClickMoveToMainPage}
      onClickMoveToMobileMenus={onClickMoveToMobileMenus}
    />
  );
}
