import * as S from "./Section03.style";
import Title01 from "../../../commons/title/Title01.container";
import {
  MdCorporateFare,
  MdAir,
  MdFilterHdr,
  MdGamepad,
  MdPark,
} from "react-icons/md";

export default function Section03() {
  const contents = [
    {
      icon: MdCorporateFare,
      title: "건강한 자전거 도시",
      dsc: "자전거 이용을 적극 활성화하여 서울 시민의 건강한 생활 습관 형성을 유도합니다.",
    },
    {
      icon: MdAir,
      title: "깨끗한 자전거 도시",
      dsc: "대기오염과 온실가스 발생을 줄이는 환경 친화적인 도시 구현을 지향합니다.",
    },
    {
      icon: MdFilterHdr,
      title: "녹색 성장 선도 도시",
      dsc: "저탄소 녹색 성장을 실현하기위해 친환경 교통 수단 활성화에 노력하고 있습니다.",
    },
    {
      icon: MdGamepad,
      title: "편리한 자전거 도시",
      dsc: "지역 내 곳곳에 스테이션을 배치하여 어디에서나 이동의 편리성 증진을 실현합니다.",
    },
  ];
  const titleData = {
    icon: <MdPark />,
    title: "지구를 지키는 따릉이",
    dsc: "현재 서울 시민 3명중 1명이 따릉이를 이용하고 있다는 사실을 알고 계시나요?\n2022년 따릉이 이용에 따른 누적 탄소 저감량은 약 1,968t에 달한다는 통계가 나왔어요!",
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Section>
          <Title01
            icon={titleData.icon}
            title={titleData.title}
            dsc={titleData.dsc}
          />
          <S.Contents>
            <S.ContLeft>
              {contents.map((item, index) => (
                <S.Cont key={index}>
                  <S.ContIconContainer>
                    <item.icon style={S.iconStyle} />
                  </S.ContIconContainer>
                  <S.ContText>
                    <S.ContTitle>{item.title}</S.ContTitle>
                    <S.ContDsc>{item.dsc}</S.ContDsc>
                  </S.ContText>
                </S.Cont>
              ))}
            </S.ContLeft>
            <S.ContRight></S.ContRight>
          </S.Contents>
        </S.Section>
      </S.Container>
    </S.Wrapper>
  );
}
