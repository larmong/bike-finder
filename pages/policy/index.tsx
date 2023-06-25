import * as S from "../../src/components/units/policy/Policy.style";
import Title02 from "../../src/components/commons/titles/title02/Title02.container";
import Tab01 from "../../src/components/commons/tabs/tab01/Tab01.container";
import Use from "../../src/components/units/policy/use/Use.container";
import Duty from "../../src/components/units/policy/duty/Duty.container";
import Privacy from "../../src/components/units/policy/privacy/Privacy.container";
import Insurance from "../../src/components/units/policy/insurance/Insurance.container";
import Helped from "../../src/components/units/policy/helped/Helped.container";
import { Container } from "../../src/commons/style/global.style";

export default function Policy(props) {
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
      <Container>
        <Title02 title={props.title} />
        <S.Contents>
          <Tab01 TAB_MENUS={TAB_MENUS} tabWidth="170px" />
          <S.Content>
            {props.pathname === "use" ? (
              <Use />
            ) : props.pathname === "privacy" ? (
              <Privacy />
            ) : props.pathname === "duty" ? (
              <Duty />
            ) : props.pathname === "insurance" ? (
              <Insurance />
            ) : props.pathname === "helped" ? (
              <Helped />
            ) : (
              <></>
            )}
          </S.Content>
        </S.Contents>
      </Container>
    </S.Wrapper>
  );
}
