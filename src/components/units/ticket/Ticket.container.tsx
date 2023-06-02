import * as S from "../inquiry/Inquiry.style";
import Card01 from "../../commons/cards/card01/Card01.container";

export default function Ticket() {
  const cardList = [
    {
      type: true,
      title: "정기권",
      dsc: "1시간권, 2시간권을 선택하실 수 있습니다.",
      route: "season",
    },
    {
      type: true,
      title: "일일권",
      dsc: "1시간권, 2시간권을 선택하실 수 있습니다.",
      route: "day",
    },
    {
      type: false,
      title: "정기권 선물하기",
      dsc: "정기권을 선물하실 수 있습니다.",
      route: "season-gift",
    },
    {
      type: false,
      title: "일일권 선물하기",
      dsc: "일일권을 선물하실 수 있습니다.",
      route: "day-gift",
    },
  ];

  return (
    <S.Content>
      {cardList.map((el) => (
        <Card01 key={el.route} route={el.route} type={el.type} title={el.title} dsc={el.dsc} />
      ))}
    </S.Content>
  );
}
