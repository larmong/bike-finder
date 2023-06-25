import styled from "@emotion/styled";
import { IIsActive } from "./Footer.types";

export const Footer = styled.footer`
  width: 100%;
  height: 361px;
  background: #455062;
  padding: 65px 0;
  display: ${(props: IIsActive) => (props.isActive ? "none" : "block")};
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
`;
export const Copy = styled.div`
  font-size: 12px;
  color: #fff;
`;
