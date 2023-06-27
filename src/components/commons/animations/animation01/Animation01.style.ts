import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { css } from "@emotion/react";
import { IIsActive } from "./Animation01.types";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

const textLoop = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`;
export const Wrapper = styled.div`
  position: relative;
  height: 122px;
  ${mediaQuery[0]} {
    height: 100px;
  }
`;
export const FlowContainer = styled.div`
  height: 100%;
  display: flex;
  flex: 0 0 auto;
  overflow: hidden;
  transition: 0.3s;
`;
export const FlowContents = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${(props: IIsActive) =>
    props.isActive
      ? css`
          ${textLoop} 100s linear infinite
        `
      : "none"};
`;
export const Logo = styled.img`
  padding: 0 50px;
  height: 29px;
  ${mediaQuery[0]} {
    height: 22px;
  }
`;

export const FlowGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #ffffff 17.71%,
    rgba(255, 255, 255, 0) 49.96%,
    #ffffff 79.69%
  );
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.02);
`;
