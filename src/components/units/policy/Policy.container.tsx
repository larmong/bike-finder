import * as S from "./Policy.style";
import Title02 from "../../commons/titles/title02/Title02.container";
import Tab01 from "../../commons/tabs/tab01/Tab01.container";

export default function Policy() {
  const TAB_MENUS = [
    {
      name: "이용약관",
      route: "policy/use",
    },
    {
      name: "개인정보처리방침",
      route: "policy/privacy",
    },
    {
      name: "의무와책임",
      route: "policy/duty",
    },
    {
      name: "보험안내",
      route: "policy/insurance",
    },
    {
      name: "도움주신분",
      route: "policy/helped",
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        {/* TODO: title도 각 페이지에서 props로 넘겨주기 */}
        <Title02 title="이용약관 및 방침" />
        <S.Contents>
          <Tab01 TAB_MENUS={TAB_MENUS} />
        </S.Contents>
      </S.Container>
    </S.Wrapper>
  );
}
