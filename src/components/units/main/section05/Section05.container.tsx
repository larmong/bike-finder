import * as S from "./Section05.style";
import Title01 from "../../../commons/title/Title01.container";
import { MdDirectionsBike } from "react-icons/md";

export default function Section05() {
  const contents = [
    {
      title: "자전거",
      dsc: "누구나 이용할 수 있는 자전거로, 내구성이 강한 소재와 고급기어를 사용하여 시민들의 주행 안정성과 편의성을 최우선으로 제작하였습니다.",
    },
    {
      title: "거치대",
      dsc: "거치대는 자전거를 안전하게 세워 보관하는 시설이며 따릉이 고유 색상과 형대를 지녀 복잡한 서울 시내에서 쉽게 눈에 띄도록 제작되었습니다.",
    },
  ];
  const titleData = {
    icon: <MdDirectionsBike />,
    title: "대여소 구성요소",
    dsc: "따릉이 대여소 구성요소에는 자전거와 거치대가 있습니다.",
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
                  src={`/images/main/Component${index + 1}.png`}
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
