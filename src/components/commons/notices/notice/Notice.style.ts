import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Notice = styled.div`
  margin-top: -1px;
  padding: 30px 20px;
  border: 1px solid #e9e9e9;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.07em;
  line-height: 23px;
  span {
    margin: 5px 0;
    display: block;
    font-weight: 700;
    color: #dc1919;
  }
  strong {
    padding: 3px;
    background: #333333;
    color: #fff;
    font-weight: 700;
  }
  ${mediaQuery[1]} {
    padding: 20px 15px;
    font-size: 14px;
    line-height: 21px;
    span {
      margin: 0;
      display: block;
      font-weight: 700;
      color: #dc1919;
    }
  }
  ${mediaQuery[2]} {
    margin: -1px;
    padding: 12px;
  }
`;
