import * as S from "./UserPayment.style";
import Tab01 from "../../../commons/tabs/tab01/Tab01.container";
import Billing from "./billing/Billing.container";
import Method from "./method/Method.container";
import Refund from "./refund/Refund.container";

export default function UserPayment(props) {
  const TAB_MENUS = [
    {
      name: "결제내역",
      route: "mypage/userPayment",
    },
    {
      name: "추가과금 결제",
      route: "mypage/userPayment/billing",
    },
    {
      name: "추가과금 수단",
      route: "mypage/userPayment/method",
    },
    {
      name: "환불신청 내역",
      route: "mypage/userPayment/refund",
    },
  ];

  return (
    <S.Wrapper>
      <Tab01 TAB_MENUS={TAB_MENUS} tabWidth="140px" />
      {props.tab === "billing" ? (
        <Billing />
      ) : props.tab === "method" ? (
        <Method />
      ) : props.tab === "refund" ? (
        <Refund />
      ) : (
        <div>결제관리</div>
      )}
    </S.Wrapper>
  );
}
