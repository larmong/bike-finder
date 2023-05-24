import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background: #fff;
`;

export const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

export const Contents = styled.div`
  height: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  img {
    width: 60%;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  font-size: 30px;
  p {
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    span {
      font-family: "EnjoyStories", Arial, sans-serif;
      font-size: 55px;
      line-height: 60px;
      color: #0d8f68;
    }
  }
`;
