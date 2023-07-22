import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-weight: 700;
  font-size: 25px;
  line-height: 31px;
  text-align: center;
  color: #999999;
  svg {
    width: 31px;
    height: 31px;
  }
  span.target {
    color: #0d8f68;
  }
  ${mediaQuery[2]} {
  }
`;
