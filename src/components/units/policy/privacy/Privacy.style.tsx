import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Text = styled.p`
  margin-top: -1px;
  border: 1px solid #e9e9e9;
  padding: 30px 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.02em;
  white-space: pre-wrap;
  span {
    display: block;
    margin: 10px;
    em {
      display: block;
      font-weight: 700;
    }
  }
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
  grid-template-columns: 196px 232px 1fr;
  grid-template-rows: 1fr;
  border-top: 2px solid #666666;
  border-bottom: 2px solid #666666;
  border-left: 1px solid #e9e9e9;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
  ${mediaQuery[1]} {
    font-size: 13px;
    grid-template-columns: 1fr 1fr 2fr;
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
  &.strong {
    color: #dc1919;
    font-weight: 700;
  }

  // 일반회원
  &:nth-of-type(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 5;
  }
  &:nth-of-type(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }

  // 만 13세 회원
  &:nth-of-type(9) {
    grid-column: 1 / 2;
    grid-row: 5 / 8;
  }

  // SNS 회원
  &:nth-of-type(16) {
    grid-column: 1 / 2;
    grid-row: 8 / 12;
  }
  &:nth-of-type(21) {
    grid-column: 2 / 3;
    grid-row: 10 / 12;
  }
`;

// Table02
export const Table02 = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 120px 1fr 260px;
  grid-template-rows: 1fr;
  border-top: 2px solid #666666;
  border-bottom: 2px solid #666666;
  border-left: 1px solid #e9e9e9;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
  ${mediaQuery[1]} {
    font-size: 13px;
    grid-template-columns: 1fr 2fr 1fr 2fr 2fr;
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

  &:nth-of-type(6) {
    grid-column: 1 / 2;
    grid-row: 2 / 5;
  }
  &:nth-of-type(7) {
    grid-column: 2 / 3;
    grid-row: 2 / 5;
  }
  &:nth-of-type(11) {
    grid-row: 3 / 4;
  }
  &:nth-of-type(14) {
    grid-row: 4 / 5;
  }
`;

// Table03
export const Table03 = styled.div`
  display: grid;
  grid-template-columns: 70px 130px 120px 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-top: 2px solid #666666;
  border-bottom: 2px solid #666666;
  border-left: 1px solid #e9e9e9;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
  ${mediaQuery[1]} {
    font-size: 13px;
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr;
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

// Table04
export const Table04 = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-top: 2px solid #666666;
  border-bottom: 2px solid #666666;
  border-left: 1px solid #e9e9e9;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
  ${mediaQuery[1]} {
    font-size: 13px;
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr;
  }
  ${mediaQuery[2]} {
    font-size: 12px;
  }
`;
export const TableItem04 = styled.p`
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
`;

// Table05
export const Table05 = styled.div`
  display: grid;
  grid-template-columns: 70px 200px 1fr;
  grid-template-rows: 50px 1fr;
  border-top: 2px solid #666666;
  border-bottom: 2px solid #666666;
  border-left: 1px solid #e9e9e9;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
  ${mediaQuery[1]} {
    font-size: 13px;
    grid-template-columns: 1fr 3fr 4fr;
  }
  ${mediaQuery[2]} {
    font-size: 12px;
  }
`;
export const TableItem05 = styled.p`
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
