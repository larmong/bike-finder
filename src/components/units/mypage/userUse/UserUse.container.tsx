import * as S from "./UserUse.style";
import { IPropsUserUse } from "./UserUse.types";
import Pass from "./pass/Pass.container";
import Tab01 from "../../../commons/tabs/tab01/Tab01.container";
import Mileage from "./mileage/Mileage.container";
import History from "./History/History.container";

export default function UserUse(props: IPropsUserUse) {
  const TAB_MENUS = [
    {
      name: "대여반납 이력",
      route: "mypage/userUse",
    },
    {
      name: "이용권 내역",
      route: "mypage/userUse/pass",
    },
    {
      name: "마일리지 내역",
      route: "mypage/userUse/mileage",
    },
  ];

  return (
    <S.Wrapper>
      <Tab01 TAB_MENUS={TAB_MENUS} tabWidth="140px" />
      <S.Contents>
        {props.tab === "pass" ? (
          <Pass />
        ) : props.tab === "mileage" ? (
          <Mileage />
        ) : (
          <S.UserUse>
            <History />
          </S.UserUse>
        )}
      </S.Contents>
    </S.Wrapper>
  );
}
