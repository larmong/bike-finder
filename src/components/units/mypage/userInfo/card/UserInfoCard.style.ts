import styled from "@emotion/styled";
import { mediaQuery } from "../../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  width: calc(100% - 4px);
  display: flex;
  flex-direction: column;
  gap: 60px;
  ${mediaQuery[2]} {
    gap: 40px;
  }
`;

export const Section01 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;
export const Section02 = styled.div``;
