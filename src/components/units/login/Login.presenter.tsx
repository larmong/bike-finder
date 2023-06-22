import * as S from "./Login.style";
import Input01 from "../../commons/inputs/input/input01/Input01.container";
import Button01 from "../../commons/buttons/button01/Button01.container";
import { IAuthList, IMenuList, IPropsLoginUI } from "./Login.types";

export default function LoginUI(props: IPropsLoginUI) {
  const AUTH_LIST: IAuthList[] = ["google", "github", "facebook"];
  const MENU_LIST: IMenuList[] = [
    { name: "회원가입", route: "join" },
    { name: "아이디 찾기", route: "idInquiry" },
    { name: "비밀번호 변경", route: "pwInquiry" },
  ];

  return (
    <S.Wrapper>
      <S.LoginWrapper>
        <S.Logo></S.Logo>
        <S.InputGroup>
          <Input01
            inputType="text"
            onChangeValue={props.onChangeLogin}
            valueData={props.loginInfo.email}
            inputId="email"
            placeholderData="아이디를 입력해주세요."
          />
          <Input01
            inputType="password"
            onChangeValue={props.onChangeLogin}
            valueData={props.loginInfo.password}
            inputId="password"
            placeholderData="비밀번호를 입력해주세요."
          />
        </S.InputGroup>
        <S.AuthGroup>
          {AUTH_LIST.map((el: string, index: number) => (
            <S.Auth key={index} onClick={props.onClickLoginSocial} id={el}>
              <img src={`images/login/${el}.svg`} alt={el} />
            </S.Auth>
          ))}
        </S.AuthGroup>
        <S.LoginMenu>
          {MENU_LIST.map((el: IMenuList, index: number) => (
            <S.Menu
              key={index}
              onClick={props.onClickMoveToLoginMenu(el.route)}
            >
              {el.name}
            </S.Menu>
          ))}
        </S.LoginMenu>
        <Button01
          onClickButton={props.onClickLogin}
          btnWidth="100%"
          btnText="로그인"
        />
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
