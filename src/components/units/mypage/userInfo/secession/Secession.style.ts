import styled from "@emotion/styled";
import { mediaQuery } from "../../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div``;

export const Contents = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  ${mediaQuery[1]} {
    margin-top: 50px;
    gap: 30px;
  }
`;
export const Message = styled.div`
  text-align: center;
  p {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    em {
      color: #dc1919;
    }
  }
  span {
    font-size: 20px;
    line-height: 30px;
    color: #666666;
    br {
      &:last-of-type {
        display: none;
      }
    }
  }
  ${mediaQuery[1]} {
    p {
      margin-bottom: 10px;
      font-size: 24px;
      line-height: 20px;
    }
    span {
      font-size: 14px;
      line-height: 14px;
      letter-spacing: -1px;
      br {
        &:last-of-type {
          display: block;
        }
      }
    }
  }
`;
