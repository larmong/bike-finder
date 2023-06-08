import * as S from "../../src/components/units/join/Join.style";
import Join from "../../src/components/units/join/Join.container";
import Minor from "../../src/components/units/join/minor/Minor.container";
import General from "../../src/components/units/join/general/General.container";
import Title02 from "../../src/components/commons/titles/title02/Title02.container";

export default function JoinPage(props) {
  return (
    <S.Wrapper>
      <S.Container>
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
      </S.Container>
    </S.Wrapper>
  );
}
