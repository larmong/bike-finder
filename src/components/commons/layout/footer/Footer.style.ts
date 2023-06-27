import styled from "@emotion/styled";
import { IIsActive } from "./Footer.types";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Footer = styled.footer`
  width: 100%;
  height: 361px;
  background: #455062;
  padding: 65px 0;
  display: ${(props: IIsActive) => (props.isActive ? "none" : "block")};
  ${mediaQuery[1]} {
    height: auto;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

// 메뉴
export const Menus = styled.div`
  display: flex;
  gap: 50px;

  ${mediaQuery[1]} {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
export const Menu = styled.div`
  position: relative;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    right: -25px;
    top: 0;
    width: 1px;
    height: 18px;
    background: rgba(255, 255, 255, 0.3);
  }
  &:last-child::after {
    content: none;
  }
  &:nth-of-type(2) {
    color: #fff;
    font-weight: 700;
  }
  ${mediaQuery[1]} {
    font-size: 14px;
    &::after {
      content: none;
    }
  }
`;

// sns
export const Sns = styled.div`
  display: flex;
  gap: 25px;
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  ${mediaQuery[1]} {
    gap: 15px;
    width: 100%;
    justify-content: center;
  }
`;

// info
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    p {
      br {
        display: none;
      }
      color: rgba(255, 255, 255, 0.8);
      span {
        color: #fff;
        font-weight: 700;
        display: inline-block;
        margin-right: 5px;
        &:nth-of-type(2n) {
          margin-left: 10px;
        }
      }
    }
  }
  ${mediaQuery[1]} {
    gap: 15px;
    div {
      gap: 2px;
      p {
        font-size: 14px;
        text-align: center;
        line-height: 20px;
        br {
          display: block;
        }
      }
    }
  }
`;

export const Copy = styled.div`
  font-size: 14px;
  color: #fff;
  ${mediaQuery[1]} {
    font-size: 12px;
  }
`;
