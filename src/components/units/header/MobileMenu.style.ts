import styled from "@emotion/styled";
import { mediaQuery } from "../../../commons/style/mediaQuery.style";

export const Menu_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 65px 30px 0 30px;
  min-height: 100vh;
  max-height: calc(100vh + 30px);
  background: #ffffff;
  ${mediaQuery[2]} {
    padding: 65px 20px 0 20px;
    max-height: calc(100vh + 20px);
  }
`;

export const Menu_Content = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid #e9e9e9;
  ${mediaQuery[2]} {
    gap: 5px;
  }
`;
export const Menu_UserName = styled.p`
  font-weight: bold;
  letter-spacing: 1.23px;
  font-family: "EnjoyStories", Arial, sans-serif;
  font-size: 50px;
  ${mediaQuery[2]} {
    font-size: 44px;
  }
`;
export const Menu_Text = styled.p`
  font-size: 26px;
  letter-spacing: 0.6px;
  span {
    color: #0d8f68;
    font-weight: 700;
  }
  ${mediaQuery[2]} {
    font-size: 24px;
  }
`;

// notice
export const Notice_M = styled.div`
  border-bottom: 1px solid #e9e9e9;
  padding: 30px 0;
`;
export const Notice_Container = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 16px;
  gap: 16px;
  border-radius: 5px;
  background: #333333;
  ${mediaQuery[2]} {
  }
`;
export const Notice = styled.li`
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  svg {
    width: 14px;
    height: 14px;
    margin-left: 10px;
  }
  &:last-of-type {
    border-bottom: none;
  }
`;
export const Notice_Title = styled.p`
  width: calc(100% - 14px);
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    color: #42b794;
    font-weight: 700;
  }
`;

// menu
export const Menu_Title = styled.div`
  margin: 30px 0 30px 11px;
  position: relative;
  font-size: 20px;
  font-weight: 700;
  &::after {
    content: "";
    position: absolute;
    left: -11px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background: #333333;
    font-size: 18px;
    letter-spacing: 0.54px;
    overflow: hidden;
  }
`;
export const Menu_Container = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
export const Menu_Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(25% - 12px);
  height: auto;
  border-radius: 5px;
  padding: 20px 0;
  background: #fafafa;
  gap: 10px;
  cursor: pointer;
  ${mediaQuery[2]} {
    width: calc(33.33% - 10.66px);
  }
`;
export const Menu_Icon = styled.div`
  width: 50px;
  height: 50px;
  color: #0d8f68;
  svg {
    width: 100%;
    height: 100%;
  }
  ${mediaQuery[2]} {
    width: 40px;
    height: 40px;
  }
`;
export const Menu_Name = styled.div`
  display: flex;
  height: 35px;
  text-align: center;
  align-items: center;
  font-size: 15px;
  white-space: pre-wrap;
  font-weight: 700;
  ${mediaQuery[2]} {
    font-size: 14px;
  }
`;

// footer
export const Footer_M = styled.div`
  margin-top: auto;
  padding: 30px 0;
  border-top: 1px solid #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  svg {
    width: 24px;
    height: 24px;
  }
  ${mediaQuery[2]} {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
export const ServiceCenter = styled.p`
  font-size: 16px;
  margin-top: 5px;
  font-weight: 700;
  letter-spacing: 1px;
  ${mediaQuery[2]} {
    font-size: 14px;
  }
`;
