import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const LoginCheck = (Component) => (props) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  useEffect(() => {
    if (accessToken === "") {
      alert("로그인 이용 후 이용 가능합니다!");
      router.push("/login");
    }
  }, []);

  return <Component {...props} />;
};
