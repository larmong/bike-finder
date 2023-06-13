import * as S from "./UserInfo.style";
import Tab01 from "../../../commons/tabs/tab01/Tab01.container";
import { useRouter } from "next/router";
import UserInfoCard from "./card/UserInfoCard.container";
import UserInfoFaq from "./faq/UserInfoFaq.container";
import RentalPw from "./rentalPw/RentalPw.container";
import Secession from "./secession/Secession.container";

export default function UserInfo(props) {
  const router = useRouter();
  console.log(router.pathname);
  console.log(props.tab);

  const TAB_MENUS = [
    {
      name: "개인정보",
      route: "mypage/userInfo",
    },
    {
      name: "환승카드",
      route: "mypage/userInfo/card",
    },
    {
      name: "대여비밀번호",
      route: "mypage/userInfo/rentalPw",
    },
    {
      name: "문의내역",
      route: "mypage/userInfo/faq",
    },
    {
      name: "회원탈퇴",
      route: "mypage/userInfo/secession",
    },
  ];

  return (
    <S.Wrapper>
      <Tab01 TAB_MENUS={TAB_MENUS} tabWidth="140px" />
      {props.tab === "card" ? (
        <UserInfoCard />
      ) : props.tab === "rental" ? (
        <RentalPw />
      ) : props.tab === "faq" ? (
        <UserInfoFaq />
      ) : props.tab === "secession" ? (
        <Secession />
      ) : (
        <div>개인정보</div>
      )}
    </S.Wrapper>
  );
}
