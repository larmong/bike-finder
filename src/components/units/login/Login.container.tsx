import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { authService } from "../../../commons/libraries/firebase/firebase.config";
import { accessTokenState } from "../../../commons/store/store";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import {
  CustomChangeEvent,
  CustomMouseEvent,
} from "../../../commons/types/global.types";
import LoginUI from "./Login.presenter";

export default function Login() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const onChangeLogin = (event: CustomChangeEvent) => {
    setLoginInfo({
      ...loginInfo,
      [event.target.id]: event.target.value,
    });
  };

  const onClickLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        authService,
        loginInfo.email,
        loginInfo.password
      );
      const user = userCredential.user;
      setAccessToken(await user.getIdToken());
      router.push("/");
    } catch (error) {
      alert("아이디 또는 비밀번호를 확인해주세요!");
    }
  };

  const onClickMoveToLoginMenu = (route: string) => () => {
    router.push(`/${route}`);
  };

  const onClickLoginSocial = async (event: CustomMouseEvent) => {
    const {
      currentTarget: { id },
    } = event;

    let provider:
      | GoogleAuthProvider
      | GithubAuthProvider
      | FacebookAuthProvider
      | undefined;
    if (id === "google") {
      provider = new GoogleAuthProvider();
    } else if (id === "github") {
      provider = new GithubAuthProvider();
    } else if (id === "facebook") {
      provider = new FacebookAuthProvider();
    }

    try {
      if (provider !== undefined) await signInWithPopup(authService, provider);
    } catch (error) {}
  };

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      if (user) {
        router.push("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <LoginUI
      loginInfo={loginInfo}
      onClickLogin={onClickLogin}
      onChangeLogin={onChangeLogin}
      onClickLoginSocial={onClickLoginSocial}
      onClickMoveToLoginMenu={onClickMoveToLoginMenu}
    />
  );
}
