import * as S from "../../src/components/units/ticket/Ticket.style";
import Title02 from "../../src/components/commons/titles/title02/Title02.container";
import Day from "../../src/components/units/ticket/day/Day.container";
import Season from "../../src/components/units/ticket/season/Season.container";
import Ticket from "../../src/components/units/ticket/Ticket.container";
import DayGift from "../../src/components/units/ticket/day-gift/DayGift.container";
import SeasonGift from "../../src/components/units/ticket/season-gift/SeasonGift.container";
import Tab01 from "../../src/components/commons/tabs/tab01/Tab01.container";
import { useRouter } from "next/router";

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
          {props.pathname === "season" ? (
            <Season />
          ) : props.pathname === "day" ? (
            <Day />
          ) : props.pathname === "season-gift" ? (
            <SeasonGift />
          ) : props.pathname === "day-gift" ? (
            <DayGift />
          ) : (
            <Ticket />
          )}
        </S.Contents>
      </S.Container>
    </S.Wrapper>
  );
}
