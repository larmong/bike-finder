import * as S from "./Header.style";
import { Fragment } from "react";
import { IHeaderUI } from "./Header.types";
import { useRouter } from "next/router";

export default function HeaderUI(props: IHeaderUI) {
  const router = useRouter();

  let HEADER_MENUS: any;
  HEADER_MENUS = [
    { name: "따릉이", route: "" },
    { name: "대여소조회", route: "station" },
    { name: "이용권구매", route: "ticket" },
    { name: "안전수칙", route: "safety" },
    { name: "시민센터", route: "citizen" },
  ];

  // accessToken \없을때 (비회원)
  let HEADER_BTN: any;
  HEADER_BTN = [
    { name: "로그인", route: "/login" },
    { name: "회원가입", route: "/join" },
  ];

  return (
    <S.Header isActive={router.pathname === "/"}>
      <S.Container>
        <S.Wrapper>
          <S.Logo onClick={() => router.push("/")}></S.Logo>
          <S.Nav>
            {HEADER_MENUS.map((el: any, index: any) => (
              <Fragment key={index}>
                <S.Menu id={el.route} onClick={props.onClickMoveToMenus}>
                  {el.name}
                </S.Menu>
              </Fragment>
            ))}
          </S.Nav>
          <S.BtnGroup>
            <S.HeaderBtnLine>{HEADER_BTN[0].name}</S.HeaderBtnLine>
            <S.HeaderBtn>{HEADER_BTN[1].name}</S.HeaderBtn>
          </S.BtnGroup>
        </S.Wrapper>
      </S.Container>
    </S.Header>
  );
}
