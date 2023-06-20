import * as S from "./Header.style";
import { Fragment } from "react";
import { IHeaderUI } from "./Header.types";
import { useRouter } from "next/router";

export default function HeaderUI(props: IHeaderUI) {
  const router = useRouter();

  let HEADER_MENUS: any;
  HEADER_MENUS = [
    { name: "대여소조회", route: "station" },
    { name: "이용권구매", route: "ticket" },
    { name: "문의하기", route: "inquiry" },
    { name: "안전수칙", route: "safety" },
    { name: "시민센터", route: "citizen/notice" },
  ];

  let HEADER_BTN: any;
  props.loginCheck
    ? (HEADER_BTN = [
        { name: "마이페이지", route: "/mypage/userInfo", type: "" },
        { name: "로그아웃", route: "/", type: "line" },
      ])
    : (HEADER_BTN = [
        { name: "로그인", route: "/login", type: "" },
        { name: "회원가입", route: "/join", type: "line" },
      ]);

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
            {HEADER_BTN.map((el, index) => (
              <S.HeaderBtn
                key={index}
                className={el.type}
                onClick={() => router.push(el.route)}
              >
                {el.name}
              </S.HeaderBtn>
            ))}
          </S.BtnGroup>
        </S.Wrapper>
      </S.Container>
    </S.Header>
  );
}
