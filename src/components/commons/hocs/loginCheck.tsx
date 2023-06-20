import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { authService } from "../../../commons/libraries/firebase/firebase.config";

export const LoginCheck = (Component) => (props) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      if (!user) {
        alert("로그인 이용 후 이용 가능합니다!");
        router.push("/login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <Component {...props} />;
};
