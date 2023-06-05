import { CitizenGroup, CitizenTitle, Wrapper, Youtube } from "./Info.style";

export default function Info() {
  return (
    <Wrapper>
      <CitizenGroup>
        <CitizenTitle>대여방법</CitizenTitle>
        <Youtube
          width="100%"
          height="600"
          url="https://www.youtube.com/watch?v=2i2FpMWQBnU"
          rel={0}
        ></Youtube>
      </CitizenGroup>
      <CitizenGroup>
        <CitizenTitle>반납방법</CitizenTitle>
        <Youtube
          width="100%"
          height="600"
          url="https://www.youtube.com/watch?v=qV8lem9vy8U"
          rel={0}
        ></Youtube>
      </CitizenGroup>
    </Wrapper>
  );
}
