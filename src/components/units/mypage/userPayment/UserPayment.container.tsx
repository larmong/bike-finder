import * as S from "./UserPayment.style";
import { MdError } from "react-icons/md";
import { useRouter } from "next/router";
import { IPropsUserPayment } from "./UserPayment.types";
import Tab01 from "../../../commons/tabs/tab01/Tab01.container";
import Billing from "./billing/Billing.container";
import Method from "./method/Method.container";
import Refund from "./refund/Refund.container";
import Payment from "./payment/Payment.container";

export default function UserPayment(props: IPropsUserPayment) {
  const router = useRouter();
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
      {props.tab === "method" ? (
        ""
      ) : (
        <S.RefundGuide onClick={() => router.push("/citizen/charges")}>
          <MdError />
          <span>환불규정 안내</span>
        </S.RefundGuide>
      )}
      <S.Contents>
        {props.tab === "billing" ? (
          <Billing />
        ) : props.tab === "method" ? (
          <Method />
        ) : props.tab === "refund" ? (
          <Refund />
        ) : (
          <S.UserPayment>
            <Payment tab={props.tab} />
          </S.UserPayment>
        )}
      </S.Contents>
    </S.Wrapper>
  );
}
