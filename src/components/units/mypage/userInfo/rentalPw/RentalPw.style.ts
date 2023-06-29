import styled from "@emotion/styled";
import { mediaQuery } from "../../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${mediaQuery[3]} {
    margin-top: 20px;
  }
`;
export const Message = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #dc1919;
  margin-bottom: -20px;
  br {
    display: none;
  }
  ${mediaQuery[1]} {
    font-size: 14px;
    br {
      display: block;
    }
  }
  ${mediaQuery[3]} {
    letter-spacing: -2px;
  }
`;
