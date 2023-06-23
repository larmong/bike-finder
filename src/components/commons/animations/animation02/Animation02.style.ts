import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { css } from "@emotion/react";
import { IIsActive } from "./Animation02.types";

const InstagramLoop = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`;

export const Wrapper = styled.div``;
export const FlowContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  height: 100%;
  display: flex;
  flex: 0 0 auto;
  overflow: hidden;
  transition: 0.3s;
  gap: 30px;
`;

export const InstagramContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  animation: ${(props: IIsActive) =>
    props.isActive
      ? css`
          ${InstagramLoop} 100s linear infinite
        `
      : "none"};
`;
export const Instagram = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

export const InstagramImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const InstagramData = styled.div`
  transition: 0.2s;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  opacity: 0;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    opacity: 1;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }
`;
export const InstagramDataFavorite = styled.div``;
export const InstagramDataComment = styled.div``;
export const Favorite = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("/images/main/favorite.svg");
`;

export const Comment = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("/images/main/comment.svg");
`;
