import Section01 from "../src/components/units/main/section01/Section01.container";
import Section02 from "../src/components/units/main/section02/Section02.container";
import Section03 from "../src/components/units/main/section03/Section03.container";
import Section04 from "../src/components/units/main/section04/Section04.container";
import Section05 from "../src/components/units/main/section05/Section05.container";
import Section06 from "../src/components/units/main/section06/Section06.container";
import styled from "@emotion/styled";
import { mediaQuery } from "../src/commons/style/mediaQuery.style";

const Wrapper = styled.div`
  margin: -40px 0 -130px 0;
  ${mediaQuery[0]} {
    margin: -100px 0 -110px 0;
  }
  ${mediaQuery[2]} {
    margin: -40px 0 -85px 0;
  }
`;

export default function Main() {
  return (
    <Wrapper>
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
    </Wrapper>
  );
}
