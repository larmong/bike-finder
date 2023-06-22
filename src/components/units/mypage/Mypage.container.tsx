import * as S from "./Mypage.style";
import { useRouter } from "next/router";
import Title02 from "../../commons/titles/title02/Title02.container";
import UserInfo from "./userInfo/UserInfo.container";
import UserPayment from "./userPayment/UserPayment.container";
import UserUse from "./userUse/UserUse.container";
import Tab02 from "../../commons/tabs/tab02/Tab02.container";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../commons/libraries/firebase/firebase.config";
import { IFetchUser } from "./userInfo/UserInfo.types";
import { CustomMouseEvent } from "../../../commons/types/global.types";
import { useRecoilState } from "recoil";
import { loginUserState } from "../../../commons/store/store";

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
  const [loginUser, setLoginUser] = useRecoilState<string | null>(
    loginUserState
  );

  const onClickMoveToTabMenus = (event: CustomMouseEvent) => {
    router.push(`/mypage/${event.currentTarget.id}`);
  };

  const [fetchUser, setFetchUser] = useState<IFetchUser[]>([]);

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
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    getFaqData();
  }, [loginUser]);

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
            <UserInfo tab={props.tab} fetchUser={fetchUser} />
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
