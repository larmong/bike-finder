import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { css } from "@emotion/react";

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
  animation: ${(props) =>
    props.isActive
      ? css`
          ${textLoop} 80s linear infinite
        `
      : "none"};
`;
export const Logo = styled.img`
  padding: 0 50px;
  height: 29px;
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
`;
