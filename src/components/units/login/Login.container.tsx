import * as S from "./Login.style";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { firebaseApp } from "../../../commons/libraries/firebase/firebase.config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import Input01 from "../../commons/inputs/input/input01/Input01.container";
import Button01 from "../../commons/buttons/button01/Button01.container";

export default function Login() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  const AUTH_LIST = ["google", "apple", "facebook", "twitter"];
  const MENU_LIST = [
    { name: "회원가입", route: "join" },
    { name: "아이디 찾기", route: "idInquiry" },
    { name: "비밀번호 변경", route: "pwInquiry" },
  ];

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      const auth = getAuth(firebaseApp);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      setAccessToken(await user.getIdToken());
      console.log(await user.getIdToken());

      router.push("/mypage/userInfo");
    } catch (error) {
      alert("아이디 또는 비밀번호를 확인해주세요!");
      console.error(error);
    }
  };

  return (
    <S.Wrapper>
      <S.LoginWrapper>
        <S.Logo></S.Logo>
        <S.InputGroup>
          <Input01
            inputType="text"
            onChangeValue={onChangeEmail}
            valueData={email}
            placeholderData="아이디를 입력해주세요."
          />
          <Input01
            inputType="password"
            onChangeValue={onChangePassword}
            valueData={password}
            placeholderData="비밀번호를 입력해주세요."
          />
        </S.InputGroup>
        <S.LoginMenu>
          {MENU_LIST.map((el, index) => (
            <S.Menu key={index} onClick={() => router.push(`/${el.route}`)}>
              {el.name}
            </S.Menu>
          ))}
        </S.LoginMenu>
        <S.AuthGroup>
          {AUTH_LIST.map((el: string, index: number) => (
            <S.Auth key={index}>
              <img src={`images/login/${el}.svg`} alt={el} />
            </S.Auth>
          ))}
        </S.AuthGroup>
        <Button01
          onClickButton={onClickLogin}
          btnWidth="100%"
          btnText="로그인"
        />
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
