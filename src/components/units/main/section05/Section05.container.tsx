import * as S from "./Section05.style";
import Title01 from "../../../commons/titles/title01/Title01.container";
import { MdDirectionsBike } from "react-icons/md";
import { Container } from "../../../../commons/style/global.style";

export default function Section05() {
  const contents = [
    {
      title: "자전거",
      dsc: "누구나 이용할 수 있는 자전거로, 내구성이 강한 소재와 고급기어를 사용하여 시민들의 주행 안정성과 편의성을 최우선으로 제작하였습니다.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Fmain%2FComponent1.png?alt=media&token=ae41923f-2bfe-4fb0-9cb5-4a5f09fc9a9f",
    },
    {
      title: "거치대",
      dsc: "거치대는 자전거를 안전하게 세워 보관하는 시설이며 따릉이 고유 색상과 형대를 지녀 복잡한 서울 시내에서 쉽게 눈에 띄도록 제작되었습니다.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Fmain%2FComponent2.png?alt=media&token=3d6e8372-655d-438f-b25f-089e17ad1678",
    },
  ];
  const titleData = {
    icon: <MdDirectionsBike />,
    title: "대여소 구성요소",
    dsc: "따릉이 대여소 구성요소에는 자전거와 거치대가 있습니다.",
    image: "",
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
            {contents.map((item, index: number) => (
              <S.Cont key={index}>
                <S.ContImgContainer>
                  <S.ContImg src={`${item.image}`} alt="guide" />
                </S.ContImgContainer>
                <S.ContText>
                  <S.ContTitle>{item.title}</S.ContTitle>
                  <S.ContDsc>{item.dsc}</S.ContDsc>
                </S.ContText>
              </S.Cont>
            ))}
          </S.Contents>
        </S.Section>
      </Container>
    </S.Wrapper>
  );
}
