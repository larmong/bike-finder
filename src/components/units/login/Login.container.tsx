import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { authService } from "../../../commons/libraries/firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoginUI from "./Login.presenter";
import {
  CustomChangeEvent,
  CustomMouseEvent,
} from "../../../commons/types/global.types";

export default function Login() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeLogin = (name: string) => (event: CustomChangeEvent) => {
    if (name === "email") {
      setEmail(event.target.value);
    } else if (name === "password") {
      setPassword(event.target.value);
    }
  };

  const onClickLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        authService,
        email,
        password
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
      email={email}
      password={password}
      onClickLogin={onClickLogin}
      onClickMoveToLoginMenu={onClickMoveToLoginMenu}
      onChangeLogin={onChangeLogin}
      onClickLoginSocial={onClickLoginSocial}
    />
  );
}
