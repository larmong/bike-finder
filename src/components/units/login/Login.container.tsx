import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { firebaseApp } from "../../../commons/libraries/firebase/firebase.config";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoginUI from "./Login.presenter";

export default function Login() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const auth = getAuth(firebaseApp);
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeLogin = (name) => (event: ChangeEvent<HTMLInputElement>) => {
    if (name === "email") {
      setEmail(event.target.value);
    } else if (name === "password") {
      setPassword(event.target.id);
    }
  };

  const onClickLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setAccessToken(await user.getIdToken());
      router.push("/mypage/userInfo");
    } catch (error) {
      alert("아이디 또는 비밀번호를 확인해주세요!");
    }
  };

  const onClickMoveToLoginMenu = (route) => () => {
    router.push(`/${route}`);
  };

  const onClickLoginSocial = async (event: MouseEvent<HTMLElement>) => {
    const {
      currentTarget: { id },
    } = event;

    let provider;
    if (id === "google") {
      provider = new GoogleAuthProvider();
    } else if (id === "github") {
      provider = new GithubAuthProvider();
    } else if (id === "facebook") {
      provider = new FacebookAuthProvider();
    }

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {}
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
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
