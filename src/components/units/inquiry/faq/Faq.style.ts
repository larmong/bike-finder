import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Tab = styled.ul`
  height: 50px;
  display: flex;
  ${mediaQuery[0]} {
    flex-wrap: wrap;
    height: auto;
  }
`;
export const Manus = styled.li`
  width: 16.66%;
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
    width: 33.33%;
    height: 40px;
    margin-top: -1px;
    &:first-of-type {
      margin-left: -1px;
    }
  }
  ${mediaQuery[2]} {
    width: 50%;
    height: 35px;
    font-size: 14px;
  }
`;
