import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Timer = styled.div`
  position: absolute;
  right: -50px;
  z-index: 1;
  width: 40px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: #0d8f68;
  ${mediaQuery[2]} {
    position: initial;
    margin-left: 10px;
  }
`;
