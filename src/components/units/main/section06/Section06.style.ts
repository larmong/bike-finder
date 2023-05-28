import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 130px 0;
  background: #f9fafa;
`;

export const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
  height: 100%;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Contents = styled.div`
  margin-top: 80px;
  display: flex;
  gap: 30px;
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
