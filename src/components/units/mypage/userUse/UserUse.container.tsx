import * as S from "./UserUse.style";
import Tab01 from "../../../commons/tabs/tab01/Tab01.container";
import Mileage from "./mileage/Mileage.container";
import Pass from "./pass/Pass.container";

export default function UserUse(props) {
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
      {props.tab === "pass" ? (
        <Pass />
      ) : props.tab === "mileage" ? (
        <Mileage />
      ) : (
        <div>이용정보</div>
      )}
    </S.Wrapper>
  );
}
