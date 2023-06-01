import * as S from "./Inquiry.style";
import Card01 from "../../commons/cards/card01/Card01.container";

export default function Inquiry() {
  const cardList = [
    {
      type: true,
      title: "자주하는 질문",
      dsc: "자주하는 질문을 이용하시면 보다 빠르게 답변을 얻으실 수 있습니다.",
      route: "faq",
    },
    {
      type: false,
      title: "1 : 1 문의하기",
      dsc: "자주하는 질문을 이용하시면 보다 빠르게 답변을 얻으실 수 있습니다.",
      route: "contact",
    },
  ];

  return (
    <S.Content>
      {cardList.map((el) => (
        <Card01
          key={el.route}
          route={el.route}
          type={el.type}
          title={el.title}
          dsc={el.dsc}
        />
      ))}
    </S.Content>
  );
}
