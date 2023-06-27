import * as S from "./Section01.style";
import { Container } from "../../../../commons/style/global.style";
import { useRouter } from "next/router";
import Animation01 from "../../../commons/animations/animation01/Animation01.container";

export default function Section01() {
  const router = useRouter();
  return (
    <>
      <S.Wrapper>
        <Container>
          <S.Banner>
            <S.BannerLeft>
              <S.Text>
                <p>
                  <em>따릉이</em>와 함께
                  <br />
                  서울을 누빌 준비 되셨나요?
                </p>
                <span>
                  누구나 쉽고 편리하게 이용할 수 있는
                  <br /> 저탄소 이동수단 따릉이!
                </span>
              </S.Text>
              <S.BtnGroup>
                <S.HeaderBtn onClick={() => router.push("/citizen/info")}>
                  대여/반납 방법
                </S.HeaderBtn>
                <S.HeaderBtnLine
                  onClick={() => router.push("/citizen/charges")}
                >
                  이용요금안내
                </S.HeaderBtnLine>
              </S.BtnGroup>
            </S.BannerLeft>
            <S.BannerRight></S.BannerRight>
          </S.Banner>
        </Container>
      </S.Wrapper>
      <Animation01 />
    </>
  );
}
