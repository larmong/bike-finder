import * as S from "./Mypage.style";
import { Container } from "../../../commons/style/global.style";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../commons/libraries/firebase/firebase.config";
import { loginUserState } from "../../../commons/store/store";
import { ITabMenus } from "../../commons/tabs/tab01/Tab01.types";
import { CustomMouseEvent } from "../../../commons/types/global.types";
import { IFetchUser, IPropsMyPageUI } from "./Mypage.types";
import Tab02 from "../../commons/tabs/tab02/Tab02.container";
import Title02 from "../../commons/titles/title02/Title02.container";
import UserUse from "./userUse/UserUse.container";
import UserInfo from "./userInfo/UserInfo.container";
import UserPayment from "./userPayment/UserPayment.container";

export default function MyPageUI(props: IPropsMyPageUI) {
  const router = useRouter();
  const TAB_MENUS: ITabMenus[] = [
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

  const [loginUser] = useRecoilState<string | null>(loginUserState);
  const [fetchUser, setFetchUser] = useState<IFetchUser[]>([]);

  const onClickMoveToTabMenus = (event: CustomMouseEvent) => {
    void router.push(`/mypage/${event.currentTarget.id}`);
  };

  useEffect(() => {
    const getFaqData = async () => {
      try {
        const data = await query(
          collection(db, "user"),
          where("email", "==", loginUser)
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFetchUser(result);
      } catch (error) {}
    };
    void getFaqData();
  }, [loginUser]);

  return (
    <S.Wrapper>
      <Container>
        <Title02 title="마이페이지" />
        <Tab02
          TAB_MENUS={TAB_MENUS}
          pathname={props.pathname}
          onClickMoveToTabMenus={onClickMoveToTabMenus}
        />
        <S.Contents>
          {props.pathname === "userInfo" ? (
            <UserInfo tab={props.tab} fetchUser={fetchUser[0]} />
          ) : props.pathname === "userPayment" ? (
            <UserPayment tab={props.tab} />
          ) : props.pathname === "userUse" ? (
            <UserUse tab={props.tab} />
          ) : (
            ""
          )}
        </S.Contents>
      </Container>
    </S.Wrapper>
  );
}
