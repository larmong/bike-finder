import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  background: #fff;
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
  ${mediaQuery[0]} {
    margin-top: 150px;
    height: 350px;
    gap: 20px;
  }
  ${mediaQuery[3]} {
    margin-top: 100px;
    height: 300px;
    img {
      width: 90%;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  font-size: 30px;
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
      font-weight: 700;
    }
  }
  ${mediaQuery[0]} {
    gap: 1px;
    font-size: 26px;
    div {
      gap: 5px;
      span {
        font-size: 45px;
      }
    }
  }
  ${mediaQuery[3]} {
    gap: -1px;
    font-size: 24px;
    div {
      margin-top: -5px;
      span {
        font-size: 40px;
      }
    }
  }
`;
