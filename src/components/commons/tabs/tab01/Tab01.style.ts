import styled from "@emotion/styled";
import { ITabWidth } from "./Tab01.types";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Tab = styled.ul`
  height: 50px;
  display: flex;
  ${mediaQuery[0]} {
    height: 45px;
  }
  ${mediaQuery[2]} {
    flex-wrap: wrap;
    height: auto;
  }
`;
export const Manus = styled.li<ITabWidth & { isLength: number }>`
  width: ${(props: ITabWidth) => props.tabWidth};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e9e9e9;
  margin-left: -1px;
  font-size: 16px;
  line-height: 20px;
  color: #999999;
  cursor: pointer;
  &:first-of-type {
    margin-left: 0;
  }
  &.target {
    background: #0d8f68;
    color: #ffffff;
  }
  ${mediaQuery[0]} {
    width: calc(100% / ${(props) => props.isLength});
    font-size: 15px;
  }
  ${mediaQuery[2]} {
    width: 50%;
    font-size: 14px;
    height: 35px;
    margin-top: -1px;
    &:first-of-type {
      margin-left: -1px;
    }
    &:nth-of-type(2n) {
      margin-left: -1px;
    }
  }
`;
