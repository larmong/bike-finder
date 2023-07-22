import styled from "@emotion/styled";
import { mediaQuery } from "../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div``;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  ${mediaQuery[1]} {
    justify-content: center;
    gap: 20px;
  }
`;

export const Notice = styled.div`
  margin-top: -1px;
  padding: 30px 20px;
  border: 1px solid #e9e9e9;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: -0.07em;

  strong {
    display: block;
    font-weight: 700;
    em {
      color: #dc1919;
    }
  }
`;
