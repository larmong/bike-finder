import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Tab = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
  ${mediaQuery[0]} {
    gap: 20px;
  }
`;
export const Manus = styled.li`
  position: relative;
  width: 80px;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: #aaaaaa;
  cursor: pointer;
  &::before {
    position: absolute;
    content: "";
    width: 80px;
    height: 3px;
    left: 50%;
    bottom: -8px;
    transform: translateX(-50%);
    background: #aaaaaa;
  }
  &.target {
    color: #0d8f68;
  }
  &.target::before {
    background: #0d8f68;
  }
  ${mediaQuery[0]} {
    width: 68px;
    font-size: 18px;
    line-height: 22px;
    &::before {
      width: 70px;
      height: 3px;
    }
  }
  ${mediaQuery[2]} {
    width: 61px;
    font-size: 16px;
    line-height: 18px;
    &::before {
      width: 63px;
      height: 2.5px;
    }
  }
`;
