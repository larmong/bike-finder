import * as S from "./Login.style";
import { useState } from "react";
import { useRouter } from "next/router";
import Input01 from "../../commons/inputs/input/input01/Input01.container";
import Button01 from "../../commons/buttons/button01/Button01.container";

export default function Login() {
  const router = useRouter();

  const AUTH_LIST = ["google", "apple", "facebook", "twitter"];
  const MENU_LIST = [
    { name: "회원가입", route: "join" },
    { name: "아이디 찾기", route: "/" },
    { name: "비밀번호 변경", route: "/" },
  ];

  const [userId, setUserId] = useState<number | undefined>(undefined);
  const [userPw, serUserPw] = useState<number | undefined>(undefined);

  const onChangeUserId = (event) => {
    setUserId(event.target.value);
  };
  const onChangeUserPw = (event) => {
    serUserPw(event.target.value);
  };

  const onClickButton = () => {
    // 로그인기능
  };

  return (
    <S.Wrapper>
      <S.LoginWrapper>
        <S.Logo></S.Logo>
        <S.InputGroup>
          <Input01
            inputType="text"
            onChangeValue={onChangeUserId}
            valueData={userId}
            placeholderData="아이디를 입력해주세요."
          />
          <Input01
            inputType="password"
            onChangeValue={onChangeUserPw}
            valueData={userPw}
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
          onClickButton={onClickButton}
          btnWidth="100%"
          btnText="로그인"
        />
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
