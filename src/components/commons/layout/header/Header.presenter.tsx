import * as S from "./Header.style";
import {
  IHeaderBtn,
  IHeaderMBtn,
  IHeaderMenus,
  IHeaderUI,
} from "./Header.types";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { Container } from "../../../../commons/style/global.style";
import { TiUser } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { MdLogout, MdMenu } from "react-icons/md";
import MobileMenu from "../../../units/header/MobileMenu.container";

export default function HeaderUI(props: IHeaderUI) {
  const router = useRouter();
  let HEADER_BTN: IHeaderBtn[];
  let HEADER_M_BTN: IHeaderMBtn[];

  const HEADER_MENUS: IHeaderMenus[] = [
    { name: "대여소조회", route: "station" },
    { name: "이용권구매", route: "ticket" },
    { name: "문의하기", route: "inquiry" },
    { name: "안전수칙", route: "safety" },
    { name: "시민센터", route: "citizen/notice" },
  ];
  props.loginCheck
    ? (HEADER_BTN = [
        { name: "마이페이지", route: "/mypage/userInfo", type: "" },
        { name: "로그아웃", route: "_logout", type: "line" },
      ])
    : (HEADER_BTN = [
        { name: "로그인", route: "/login", type: "" },
        { name: "회원가입", route: "/join", type: "line" },
      ]);
  props.loginCheck
    ? (HEADER_M_BTN = [{ name: "로그아웃", route: "_logout", type: "logout" }])
    : (HEADER_M_BTN = [{ name: "로그인", route: "/login", type: "login" }]);

  return (
    <>
      <S.Header_M>
        <S.MenuIcon onClick={props.onClickMobileMenuOpen}>
          {props.mobileMenu ? <AiOutlineClose /> : <MdMenu />}
        </S.MenuIcon>
        <S.Logo_M onClick={props.onClickMoveToMainPage}></S.Logo_M>
        <S.BtnGroup_M>
          {HEADER_M_BTN.map((el, index: number) => (
            <S.HeaderBtn_M
              key={index}
              className={el.type}
              onClick={props.onClickHeaderBtn(el.route)}
            >
              {el.name === "로그인" ? <TiUser /> : <MdLogout />}
            </S.HeaderBtn_M>
          ))}
        </S.BtnGroup_M>
      </S.Header_M>
      {props.mobileMenu ? (
        <S.Menu_M>
          <MobileMenu
            loginCheck={props.loginCheck}
            loginUser={props.loginUser}
            onClickMoveToMobileMenus={props.onClickMoveToMobileMenus}
          />
        </S.Menu_M>
      ) : (
        ""
      )}

      <S.Header isActive={router.pathname === "/"}>
        <Container>
          <S.Wrapper>
            <S.Logo onClick={() => router.push("/")}></S.Logo>
            <S.Nav>
              {HEADER_MENUS.map((el: IHeaderMenus, index: number) => (
                <Fragment key={index}>
                  <S.Menu id={el.route} onClick={props.onClickMoveToMenus}>
                    {el.name}
                  </S.Menu>
                </Fragment>
              ))}
            </S.Nav>
            <S.BtnGroup>
              {HEADER_BTN.map((el: IHeaderBtn, index: number) => (
                <S.HeaderBtn
                  key={index}
                  className={el.type}
                  onClick={props.onClickHeaderBtn(el.route)}
                >
                  {el.name}
                </S.HeaderBtn>
              ))}
            </S.BtnGroup>
          </S.Wrapper>
        </Container>
      </S.Header>
    </>
  );
}
