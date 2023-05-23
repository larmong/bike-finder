import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const textLoop = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`;
export const FlowContainer = styled.div`
  .flow-text {
    display: flex;
    flex: 0 0 auto;
    overflow: hidden;
    transition: 0.3s;
  }

  .flow-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 122px;

    animation: ${({ isActive }) =>
      isActive ? `${textLoop} 10s linear` : "none"};
    animation: ${textLoop} 10s linear;

    img {
      padding: 0 50px;
      height: 29px;
    }
  }
`;
