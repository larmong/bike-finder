import styled from "@emotion/styled";
import { mediaQuery } from "../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div``;

export const Contents = styled.div`
  padding: 0 20px;
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
