import { InfoGroup, InfoTitle, Wrapper, Youtube } from "./Info.style";

export default function Info() {
  return (
    <Wrapper>
      <InfoGroup>
        <InfoTitle>대여방법</InfoTitle>
        <Youtube
          width="100%"
          height="600"
          url="https://www.youtube.com/watch?v=2i2FpMWQBnU"
          rel={0}
        ></Youtube>
      </InfoGroup>
      <InfoGroup>
        <InfoTitle>반납방법</InfoTitle>
        <Youtube
          width="100%"
          height="600"
          url="https://www.youtube.com/watch?v=qV8lem9vy8U"
          rel={0}
        ></Youtube>
      </InfoGroup>
    </Wrapper>
  );
}
