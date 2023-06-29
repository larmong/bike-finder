import styled from "@emotion/styled";
import { mediaQuery } from "../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div``;

export const Contents = styled.div`
  margin-top: 60px;
  ${mediaQuery[2]} {
    margin-top: 45px;
  }
`;
