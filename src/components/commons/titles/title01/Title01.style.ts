import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleIcon = styled.div`
  svg {
    width: 50px;
    height: 50px;
    color: #0d8f68;
  }
  ${mediaQuery[0]} {
    svg {
      width: 40px;
      height: 40px;
    }
    img {
      width: 60px;
    }
  }
`;
export const Title = styled.h3`
  margin: 20px 0 10px 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  ${mediaQuery[0]} {
    margin: 10px 0 0 0;
    font-size: 30px;
  }
  ${mediaQuery[2]} {
    margin: 5px 0 0 0;
    font-size: 26px;
  }
`;
export const TitleDsc = styled.p`
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #979797;
  white-space: pre-wrap;
  ${mediaQuery[0]} {
    font-size: 16px;
    line-height: 22px;
  }
  ${mediaQuery[2]} {
    font-size: 14px;
    line-height: 20px;
    white-space: initial;
  }
`;
