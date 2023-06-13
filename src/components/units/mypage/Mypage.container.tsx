import * as S from "./Mypage.style";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import Title02 from "../../commons/titles/title02/Title02.container";
import UserInfo from "./userInfo/UserInfo.container";
import UserPayment from "./userPayment/UserPayment.container";
import UserUse from "./userUse/UserUse.container";
import Tab02 from "../../commons/tabs/tab02/Tab02.container";

export default function MyPageUI(props) {
  const router = useRouter();
  const TAB_MENUS = [
    {
      route: "userInfo",
      name: "회원정보",
    },
    {
      route: "userPayment",
      name: "결제관리",
    },
    {
      route: "userUse",
      name: "이용정보",
    },
  ];

  const onClickMoveToTabMenus = (event: MouseEvent<HTMLElement>) => {
    router.push(`/mypage/${event.currentTarget.id}`);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <Title02 title="마이페이지" />
        <Tab02
          TAB_MENUS={TAB_MENUS}
          pathname={props.pathname}
          onClickMoveToTabMenus={onClickMoveToTabMenus}
        />
        <S.Contents>
          {props.pathname === "userInfo" ? (
            <UserInfo tab={props.tab} />
          ) : props.pathname === "userPayment" ? (
            <UserPayment tab={props.tab} />
          ) : props.pathname === "userUse" ? (
            <UserUse tab={props.tab} />
          ) : (
            ""
          )}
        </S.Contents>
      </S.Container>
    </S.Wrapper>
  );
}
