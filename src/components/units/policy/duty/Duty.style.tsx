import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Text = styled.p`
  margin-top: -1px;
  border: 1px solid #e9e9e9;
  padding: 30px 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -0.02em;
  white-space: pre-wrap;
  ${mediaQuery[2]} {
    padding: 16px;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.04em;
  }
`;
