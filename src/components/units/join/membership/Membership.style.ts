import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

// Table01
export const Table01 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 225px 1fr;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.05em;
  border-top: 1px solid #666666;
  border-bottom: 1px solid #666666;
  ${mediaQuery[1]} {
    grid-template-columns: 1fr 2.1fr;
  }
`;

export const TableItem01 = styled.div`
  height: 70px;
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  span {
    position: relative;
  }

  &.t-head {
    justify-content: center;
    font-weight: 700;
    background: #f9f9f9;
  }
  &.t-essential {
    span::after {
      content: "*";
      position: absolute;
      top: 0;
      left: -10px;
      color: red;
    }
  }

  &.t-address {
    height: 170px;
  }

  ${mediaQuery[2]} {
    font-size: 14px;
    height: 65px;
    padding: 12px;
    text-align: center;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;
    &.t-head {
      word-break: break-all;
    }
    &.t-address {
      height: 170px;
    }
  }
`;
