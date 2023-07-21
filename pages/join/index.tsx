import * as S from "../../src/components/units/join/Join.style";
import { Container } from "../../src/commons/style/global.style";
import Join from "../../src/components/units/join/Join.container";
import Minor from "../../src/components/units/join/minor/Minor.container";
import General from "../../src/components/units/join/general/General.container";
import Title02 from "../../src/components/commons/titles/title02/Title02.container";

export interface IPropsJoinPage {
  pathname: string;
}

export default function JoinPage(props: IPropsJoinPage) {
  return (
    <S.Wrapper>
      <Container>
        <Title02 title="회원가입" />
        <S.Contents>
          {props.pathname === "minor" ? (
            <Minor />
          ) : props.pathname === "general" ? (
            <General />
          ) : (
            <Join />
          )}
        </S.Contents>
      </Container>
    </S.Wrapper>
  );
}
