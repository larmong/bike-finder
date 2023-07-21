import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

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

// Table01
export const Table01 = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
  border-top: 2px solid #666666;
  border-bottom: 2px solid #666666;
  border-left: 1px solid #e9e9e9;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
  ${mediaQuery[1]} {
    font-size: 13px;
    grid-template-columns: 1fr 3fr;
  }
  ${mediaQuery[2]} {
    font-size: 12px;
  }
`;
export const TableItem01 = styled.p`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;

  &.t-head {
    font-weight: 700;
    background: #f9f9f9;
  }
  &.t-left {
    justify-content: flex-start;
  }
`;

// Table02
export const Table02 = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr 180px;
  grid-template-rows: 1fr;
  border-top: 2px solid #666666;
  border-bottom: 2px solid #666666;
  border-left: 1px solid #e9e9e9;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
  ${mediaQuery[1]} {
    font-size: 13px;
    grid-template-columns: 1fr 3fr 1fr;
  }
  ${mediaQuery[2]} {
    font-size: 12px;
  }
`;
export const TableItem02 = styled.p`
  padding: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;

  &.t-head {
    font-weight: 700;
    background: #f9f9f9;
  }
  &.t-left {
    justify-content: flex-start;
    text-align: left;
    font-size: 12px;
  }

  &:nth-of-type(10) {
    grid-column: 1 / 4;
  }
  &:nth-of-type(17) {
    grid-column: 1 / 4;
  }
`;

// Table03
export const Table03 = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 60px 60px 60px;
  border-top: 2px solid #666666;
  border-bottom: 2px solid #666666;
  border-left: 1px solid #e9e9e9;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
  ${mediaQuery[1]} {
    font-size: 13px;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  ${mediaQuery[2]} {
    font-size: 12px;
  }
`;
export const TableItem03 = styled.p`
  padding: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;

  &.t-head {
    font-weight: 700;
    background: #f9f9f9;
  }
  &.t-left {
    justify-content: flex-start;
    text-align: left;
  }
`;
