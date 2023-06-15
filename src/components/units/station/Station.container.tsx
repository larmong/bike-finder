import * as S from "./Station.tyles";
import Title02 from "../../commons/titles/title02/Title02.container";

export default function Station() {
  return (
    <S.Wrapper>
      <S.Container>
        <Title02 title="대여소 조회" />
        <S.Contents>지도</S.Contents>
      </S.Container>
    </S.Wrapper>
  );
}
