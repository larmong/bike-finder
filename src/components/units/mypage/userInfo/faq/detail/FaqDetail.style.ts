import styled from "@emotion/styled";
import { mediaQuery } from "../../../../../../commons/style/mediaQuery.style";

export const Detail = styled.div`
  padding: 30px;
  border: 1px solid #e9e9e9;
  background: rgba(249, 249, 249, 0.5);
  ${mediaQuery[2]} {
    padding: 0 16px 16px 16px;
  }
`;
export const DetailHead = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  height: 80px;
  font-weight: 700;
  border-bottom: 1px solid #cccccc;
  ${mediaQuery[2]} {
    height: 70px;
    padding: 0 5px;
  }
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
  ${mediaQuery[1]} {
    width: 40px;
    height: 40px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
  ${mediaQuery[2]} {
    width: 35px;
    height: 35px;
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;
export const BoardTitle = styled.p`
  padding: 0 20px;
  width: calc(100% - 200px);
  font-size: 18px;
  ${mediaQuery[1]} {
    padding: 0 14px;
    font-size: 16px;
  }
  ${mediaQuery[2]} {
    padding: 0 10px;
    width: calc(100% - 40px);
    font-size: 14px;
  }
`;
export const BoardDate = styled.p`
  width: 150px;
  text-align: center;
  font-size: 14px;
  color: #999999;
  ${mediaQuery[2]} {
    display: none;
  }
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
  ${mediaQuery[2]} {
    gap: 6px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
export const AnswerState = styled.div`
  font-weight: 700;
  font-size: 20px;
  &.on {
    color: #0d8f68;
  }
  ${mediaQuery[2]} {
    font-size: 15px;
  }
`;

export const DetailBody = styled.div`
  line-height: 25px;
  white-space: pre-wrap;
  padding: 50px 20px;
  color: #666666;
  ${mediaQuery[2]} {
    font-size: 14px;
    padding: 25px 5px;
    line-height: 18px;
  }
`;
