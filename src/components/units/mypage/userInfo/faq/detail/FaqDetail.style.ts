import styled from "@emotion/styled";

export const Detail = styled.div`
  padding: 30px;
  border: 1px solid #e9e9e9;
  background: rgba(249, 249, 249, 0.5);
`;
export const DetailHead = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  height: 80px;
  font-weight: 700;
  border-bottom: 1px solid #cccccc;
`;

export const BackBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  color: #fff;
  background: #0d8f68;
  border-radius: 50%;
  svg {
    width: 20px;
    height: 20px;
  }
`;
export const BoardTitle = styled.p`
  padding: 0 20px;
  width: calc(100% - 200px);
  font-size: 18px;
`;
export const BoardDate = styled.p`
  width: 200px;
  text-align: center;
  font-size: 14px;
  color: #999999;
`;
export const AnswerWrapper = styled.div`
  margin-top: 80px;
`;
export const Answer = styled.p``;
export const AnswerIcon = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 14px;
  svg {
    width: 30px;
    height: 30px;
    color: #0d8f68;
  }
`;
export const AnswerState = styled.div`
  font-weight: 700;
  font-size: 20px;
  &.on {
    color: #0d8f68;
  }
`;

export const DetailBody = styled.div`
  line-height: 25px;
  white-space: pre-wrap;
  padding: 50px 20px;
  color: #666666;
`;
