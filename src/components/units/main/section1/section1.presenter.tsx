import * as S from "./section1.style";
import Animation01 from "../../../commons/animations/animation01/animation01.container";

export default function Section1UI() {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Banner>
            <S.BannerLeft>
              <S.Text>
                <p>
                  <em>따릉이</em>와 함께
                  <br />
                  서울을 누빌 준비 되셨나요?
                </p>
                <span>
                  누구나 쉽고 편리하게 이용할 수 있는 저탄소 이동수단 따릉이!
                </span>
              </S.Text>
              <S.BtnGroup>
                <S.HeaderBtn>대여/반납 방법</S.HeaderBtn>
                <S.HeaderBtnLine>이용요금안내</S.HeaderBtnLine>
              </S.BtnGroup>
            </S.BannerLeft>
            <S.BannerRight></S.BannerRight>
          </S.Banner>
          <div></div>
        </S.Container>
      </S.Wrapper>
      <Animation01 />
    </>
  );
}
