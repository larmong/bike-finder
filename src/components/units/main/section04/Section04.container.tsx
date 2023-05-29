import * as S from "./Section04.style";
import Title01 from "../../../commons/titles/title01/Title01.container";
import { MdDock } from "react-icons/md";

export default function Section04() {
  const contents = [
    {
      title: "대여소란?",
      dsc: "대여소는 서울자전거 따릉이를 대여하고 반납할 수 있는 무인 정류장 형태의 자전거 거치 시설 입니다.",
    },
    {
      title: "대여소 위치",
      dsc: "대여소는 지하철 출입구, 버스정류장, 주택단지, 관공서, 학교, 은행 등 접근이 편리한 주변 생활시설 및 통행장소를 중심으로 운영하고 있습니다.",
    },
    {
      title: "이용방법",
      dsc: '대여소가 설치된 곳이면 어디에서나 “따릉이 앱"을 통해서 서울 자전거를 대여하고 반납할 수 있습니다.',
    },
  ];
  const titleData = {
    icon: <MdDock />,
    title: "대여소 안내",
    dsc: "따릉이 대여소에 대한 간략한 안내입니다.",
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
            {contents.map((item, index: number) => (
              <S.Cont key={index}>
                <S.ContImg
                  src={`/images/main/guide${index + 1}.png`}
                  alt="guide"
                />
                <S.ContText>
                  <S.ContTitle>{item.title}</S.ContTitle>
                  <S.ContDsc>{item.dsc}</S.ContDsc>
                </S.ContText>
              </S.Cont>
            ))}
          </S.Contents>
        </S.Section>
      </S.Container>
    </S.Wrapper>
  );
}
