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
    gap: 20px;
    font-size: 20px;
    line-height: 25px;
    svg {
      width: 27px;
      height: 27px;
    }
  }
  ${mediaQuery[3]} {
    gap: 12px;
    font-size: 18px;
    line-height: 20px;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
