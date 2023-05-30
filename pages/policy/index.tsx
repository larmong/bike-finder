import * as S from "../../src/components/units/policy/Policy.style";
import Title02 from "../../src/components/commons/titles/title02/Title02.container";
import Tab01 from "../../src/components/commons/tabs/tab01/Tab01.container";
import Use from "../../src/components/units/policy/use/Use.container";

export default function Policy(props) {
  const TAB_MENUS = [
    {
      name: "이용약관",
      route: "policy/use",
      // title: "이용약관 및 방침",
    },
    {
      name: "개인정보처리방침",
      route: "policy/privacy",
      title: "이용약관 및 방침",
    },
    {
      name: "의무와책임",
      route: "policy/duty",
      title: "이용약관 및 방침",
    },
    {
      name: "보험안내",
      route: "policy/insurance",
      title: "이용약관 및 방침",
    },
    {
      name: "도움주신분",
      route: "policy/helped",
      title: "이용약관 및 방침",
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <Title02 title={props.title} />
        <S.Contents>
          <Tab01 TAB_MENUS={TAB_MENUS} tabWidth="170px" />
          <S.Content>{props.pathname === "use" ? <Use /> : ""}</S.Content>
        </S.Contents>
      </S.Container>
    </S.Wrapper>
  );
}
