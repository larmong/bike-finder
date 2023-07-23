import * as S from "./Login.style";
import Input01 from "../../commons/inputs/input/input01/Input01.container";
import Button01 from "../../commons/buttons/button01/Button01.container";
import { IAuthList, IMenuList, IPropsLoginUI } from "./Login.types";

export default function LoginUI(props: IPropsLoginUI) {
  const AUTH_LIST: IAuthList[] = [
    {
      name: "google",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Flogin%2Fgoogle.svg?alt=media&token=9fbc8cf7-4895-4498-b9a8-9f116523c1b0",
    },
    {
      name: "github",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Flogin%2Fgithub.svg?alt=media&token=8dade062-379d-4ec2-b796-d8b298238135",
    },
    {
      name: "facebook",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Flogin%2Ffacebook.svg?alt=media&token=675c6186-5a76-4507-9342-61eed1db66ea",
    },
  ];
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
          {AUTH_LIST.map((el: IAuthList, index: number) => (
            <S.Auth key={index} onClick={props.onClickLoginSocial} id={el.name}>
              <img src={`${el.image}`} alt={el.name} />
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
