import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  padding: 130px 0;
  background: #f9fafa;
  overflow: hidden;
  ${mediaQuery[2]} {
    padding: 100px 0;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Contents = styled.div``;
