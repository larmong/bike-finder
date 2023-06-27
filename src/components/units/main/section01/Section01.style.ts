import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  height: 600px;
  background: #f9fafa;
  display: flex;
  align-items: center;
  ${mediaQuery[0]} {
    padding-top: 65px;
  }
`;

// 배너
export const Banner = styled.div`
  height: 445px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BannerLeft = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
export const BannerRight = styled.div`
  width: 550px;
  height: 100%;
  background-image: url("/images/main/banner.png");
  background-size: cover;
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
`;
export const HeaderBtn = styled.button`
  background: #0d8f68;
  color: #ffffff;
`;
export const HeaderBtnLine = styled.button`
  border: 1px solid #0d8f68;
  color: #0d8f68;
`;

export const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
`;
