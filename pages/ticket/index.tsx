import * as S from "../../src/components/units/ticket/Ticket.style";
import Title02 from "../../src/components/commons/titles/title02/Title02.container";
import Ticket from "../../src/components/units/ticket/Ticket.container";
import Tab01 from "../../src/components/commons/tabs/tab01/Tab01.container";
import { useRouter } from "next/router";
import TicketPayment from "../../src/components/units/ticket/ticketPayment/TicketPayment.container";

export default function TicketPage(props) {
  const router = useRouter();

  const TAB_MENUS = [
    {
      name: "정기권",
      route: "ticket/season",
    },
    {
      name: "일일권",
      route: "ticket/day",
    },
    {
      name: "정기권 선물",
      route: "ticket/season-gift",
    },
    {
      name: "일일권 선물",
      route: "ticket/day-gift",
    },
  ];
  const SEASON_TICKET_TYPE = [
    {
      name: "7일(1시간권)",
      price: 3000,
    },
    {
      name: "30일(1시간권)",
      price: 5000,
    },
    {
      name: "180일(1시간권)",
      price: 15000,
    },
    {
      name: "365일(1시간권)",
      price: 30000,
    },
    {
      name: "7일(2시간권)",
      price: 4000,
    },
    {
      name: "30일(2시간권)",
      price: 7000,
    },
    {
      name: "180일(2시간권)",
      price: 20000,
    },
    {
      name: "365일(2시간권)",
      price: 40000,
    },
  ];

  const DAY_TICKET_TYPE = [
    {
      name: "일일 회원(1시간권)",
      price: 1000,
    },
    {
      name: "일일 회원(2시간권)",
      price: 2000,
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <Title02 title="이용권 구매" />
        <S.Contents>
          {router.pathname === "/ticket" ? (
            ""
          ) : (
            <Tab01 TAB_MENUS={TAB_MENUS} tabWidth="140px" />
          )}
          {props.pathname === "season" || props.pathname === "season-gift" ? (
            <TicketPayment
              pathname={props.pathname}
              ticketData={SEASON_TICKET_TYPE}
            />
          ) : props.pathname === "day" || props.pathname === "day-gift" ? (
            <TicketPayment
              pathname={props.pathname}
              ticketData={DAY_TICKET_TYPE}
            />
          ) : (
            <Ticket />
          )}
        </S.Contents>
      </S.Container>
    </S.Wrapper>
  );
}
