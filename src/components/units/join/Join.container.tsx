import * as S from "./Join.style";
import Card01 from "../../commons/cards/card01/Card01.container";

export default function Join() {
  const cardList = [
    {
      type: true,
      title: "만 13세 이하",
      dsc: "만 13세 이하는 보호자 본인인증을 통해서 회원가입이 가능합니다.",
      route: "minor",
    },
    {
      type: false,
      title: "만 14세 이상",
      dsc: "만 14세 이상은 일반회원으로, 본인인증이 필요합니다.",
      route: "general",
    },
  ];

  return (
    <>
      <S.Notice>
        <span>회원가입 안내</span>· 서울자전거 따릉이는 만14세 이상(일반회원),
        만 13세로 구분하여 회원가입이 가능합니다.
        <strong>
          · 만 13세는 보호자(부모,법정대리인) 본인인증을 통해서 회원가입이
          가능하므로, <em>반드시 보호자 핸드폰에서 진행</em>하여 주시기
          바랍니다.
        </strong>
        · 위의 사항에 동의할 경우에만 아래의 가입하기 버튼을 눌러 진행하여 주기
        바랍니다.
      </S.Notice>
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
    </>
  );
}
