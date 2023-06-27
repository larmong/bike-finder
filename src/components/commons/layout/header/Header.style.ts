import styled from "@emotion/styled";
import { IIsActive } from "./Header.types";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: ${(props: IIsActive) =>
    props.isActive ? "none" : "1px solid #e9e9e9"};
  background: ${(props: IIsActive) => (props.isActive ? "#f9fafa" : "#ffffff")};
  ${mediaQuery[0]} {
    display: none;
  }
`;
export const Wrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 로고
export const Logo = styled.div`
  width: 147px;
  height: 32.32px;
  background-image: url("/images/logo.svg");
  background-size: cover;
  cursor: pointer;
`;

// 메뉴
export const Nav = styled.nav`
  display: flex;
  gap: 50px;
`;

export const Menu = styled.span`
  position: relative;
  cursor: pointer;
  &:before {
    transition: 0.35s;
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);

    width: 0;
    height: 3px;
    background: #0d8f68;
  }
  &:hover {
    &:before {
      width: 110%;
    }
  }
`;

// 버튼
export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const HeaderBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 36px;
  background: #0d8f68;
  border-radius: 5px;
  letter-spacing: 0.02em;
  color: #ffffff;

  &.line {
    background: none;
    border: 1px solid #0d8f68;
    border-radius: 5px;
    letter-spacing: 0.02em;
    color: #0d8f68;
  }
`;

// 모바일
export const Header_M = styled.header`
  display: none;
  ${mediaQuery[0]} {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    width: 100%;
    height: 65px;
    padding: 0 30px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e9e9e9;
    background: #fff;
    z-index: 999;
  }
`;
export const MenuIcon = styled.div`
  cursor: pointer;
  svg {
    width: 40px;
    height: 40px;
  }
`;
export const Logo_M = styled.div`
  width: 123px;
  height: 27px;
  background-image: url("/images/logo.svg");
  background-size: cover;
  cursor: pointer;
`;

export const BtnGroup_M = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const HeaderBtn_M = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background: #0d8f68;
  border-radius: 50%;
  color: #ffffff;
  &.login {
    svg {
      width: 100%;
      height: 100%;
    }
  }
  &.logout {
    svg {
      width: 80%;
      height: 80%;
      margin-left: 4px;
    }
  }
`;

export const Menu_M = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 998;
`;
