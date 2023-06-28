import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  height: 600px;
  background: #f9fafa;
  display: flex;
  align-items: center;
  ${mediaQuery[0]} {
    padding-top: 65px;
    height: 800px;
  }
  ${mediaQuery[3]} {
    padding-top: 80px;
    height: 100vh;
  }
`;

// 배너
export const Banner = styled.div`
  height: 445px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mediaQuery[0]} {
    height: 800px;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 50px;
  }
  ${mediaQuery[3]} {
    gap: 60px;
  }
`;
export const BannerLeft = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 35px;
  ${mediaQuery[0]} {
    text-align: center;
  }
`;
export const BannerRight = styled.div`
  width: 550px;
  height: 100%;
  background-image: url("/images/main/banner.png");
  background-size: cover;
  ${mediaQuery[0]} {
    width: 400px;
    height: 320px;
  }
  ${mediaQuery[3]} {
    width: 250px;
    height: 200px;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
  }
  em {
    color: #0d8f68;
  }
  span {
    display: block;
    margin-top: 9px;
    font-family: "EnjoyStories", Arial, sans-serif;
    font-size: 25px;
    line-height: 28px;
    br {
      display: none;
    }
  }
  ${mediaQuery[0]} {
    p {
      font-size: 32px;
      line-height: 42px;
    }
  }
  ${mediaQuery[3]} {
    p {
      font-size: 28px;
      line-height: 36px;
    }
    span {
      font-size: 25px;
      line-height: 24px;
      br {
        display: block;
      }
    }
  }
`;

// 버튼
export const BtnGroup = styled.div`
  display: flex;
  gap: 20px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    letter-spacing: 0.02em;
    font-size: 16px;
  }
  ${mediaQuery[0]} {
    margin: 0 auto;
  }
  ${mediaQuery[3]} {
    gap: 10px;
  }
`;
export const HeaderBtn = styled.button`
  background: #0d8f68;
  color: #ffffff;
`;
export const HeaderBtnLine = styled.button`
  border: 1px solid #0d8f68;
  color: #0d8f68;
`;
