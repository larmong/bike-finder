import * as S from "./Section02.style";
import { Container } from "../../../../commons/style/global.style";

export default function Section02() {
  return (
    <S.Wrapper>
      <Container>
        <S.Contents>
          <S.Text>
            <p>자전거와 함께하는 건강한 도시,</p>
            <div>
              세계적인 자전거 도시 <span>서울</span>
            </div>
          </S.Text>
          <img src="/images/main/seoul.png" alt="seoul" />
        </S.Contents>
      </Container>
    </S.Wrapper>
  );
}
