import * as S from "./Section06.style";
import { Container } from "../../../../commons/style/global.style";
import Title01 from "../../../commons/titles/title01/Title01.container";
import Animation02 from "../../../commons/animations/animation02/Animation02.container";

export default function Section06() {
  const titleData = {
    icon: <img src="/images/main/logo-icon.svg" alt="아이콘" />,
    title: "# 따릉이와 함께",
    dsc: "Instagram에 따릉이와 함께하는 서울을 공유해주세요! 😎",
  };

  return (
    <S.Wrapper>
      <Container>
        <S.Section>
          <Title01
            icon={titleData.icon}
            title={titleData.title}
            dsc={titleData.dsc}
          />
          <S.Contents>
            <Animation02 />
          </S.Contents>
        </S.Section>
      </Container>
    </S.Wrapper>
  );
}
