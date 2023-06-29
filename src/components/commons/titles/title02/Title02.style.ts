import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const PagesTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 34px;
  ${mediaQuery[2]} {
    gap: 7px;
  }
`;

export const Circle = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 6px solid #0d8f68;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 11.33px;
    height: 11.33px;
    border-radius: 50%;
    background: #0d8f68;
  }
  ${mediaQuery[0]} {
    width: 30px;
    height: 30px;
    &::after {
      width: 9px;
      height: 9px;
    }
  }
  ${mediaQuery[2]} {
    width: 26px;
    height: 26px;
    border: 5px solid #0d8f68;
    &::after {
      width: 7px;
      height: 7px;
    }
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 34px;
  line-height: 43px;
  letter-spacing: -0.1em;
  ${mediaQuery[0]} {
    font-size: 28px;
    line-height: 43px;
  }
  ${mediaQuery[2]} {
    font-size: 22px;
    line-height: 22px;
    margin-top: 2px;
  }
`;
