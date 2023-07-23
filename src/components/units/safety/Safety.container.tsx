import * as S from "./Safety.style";
import { Container } from "../../../commons/style/global.style";
import Title02 from "../../commons/titles/title02/Title02.container";

export default function Safety() {
  const safety = [
    {
      title: "출발 전 점검",
      content: "이용 전 브레이크, 타이어, 체인,\n안장 조임을 꼭 확인하세요!",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Fsafety%2Fsafety1.png?alt=media&token=7b2149f0-7284-4812-a40b-79534ad3498d",
    },
    {
      title: "안전모 착용",
      content: "안전한 주행을 위해\n주행시 안전모를 착용하세요!",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Fsafety%2Fsafety2.png?alt=media&token=c3ae2182-6273-4280-82ce-416065673e38",
    },
    {
      title: "음주 운전 금지",
      content:
        "자전거도 차와 같이 교통법규를 지켜야 합니다.\n음주 후 이용시 도로교통법에 따라 처벌받습니다.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Fsafety%2Fsafety3.png?alt=media&token=485fc319-dd9e-4432-ba29-463686d974f8",
    },
    {
      title: "자전거 도로 이용",
      content:
        "자전거 도로를 이용하고, 없는 경우\n차도 우측 가장자리에 붙어서 통행합니다.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Fsafety%2Fsafety4.png?alt=media&token=df2af83c-6161-425b-8220-81f6b4f64db3",
    },
    {
      title: "횡단보도 이용시",
      content: "횡단보도에서는 자전거를 끌고\n보행해야 합니다.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Fsafety%2Fsafety5.png?alt=media&token=e2b0873e-9307-4582-b450-bbb93972f32e",
    },
    {
      title: "주행중 기타행위 금지",
      content: "주행시 핸들을 놓거나 이어폰,\n핸드폰을 사용하지 않습니다.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Fsafety%2Fsafety6.png?alt=media&token=5867c9b5-e888-494e-803e-47b64d0b39a9",
    },
  ];
  return (
    <S.Wrapper>
      <Container>
        <Title02 title="안전수칙" />
        <S.CardContainer>
          {safety.map((el, index: number) => (
            <S.Card key={index + 1}>
              <S.CardImage src={`${el.image}`} alt="safety" />
              <S.CardTitle>{el?.title}</S.CardTitle>
              <S.CardContent>{el?.content}</S.CardContent>
            </S.Card>
          ))}
        </S.CardContainer>
      </Container>
    </S.Wrapper>
  );
}
