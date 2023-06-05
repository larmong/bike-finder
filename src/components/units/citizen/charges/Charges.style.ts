import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 75px;
`;

export const Notice = styled.div`
  margin-top: -1px;
  padding: 30px 20px;
  border: 1px solid #e9e9e9;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: -0.07em;
  strong {
    display: block;
    font-weight: 700;
    color: #dc1919;
  }
`;

export const CitizenGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CitizenTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #444444;
`;

// Table01
export const Table01 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  border-left: 1px solid #e9e9e9;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
`;
export const TableItem01 = styled.p`
  padding: 12px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;

  &.t-head {
    font-weight: 700;
    background: #666666;
    color: #ffffff;
  }
  &.t-bg {
    background: #f9f9f9;
  }
  &.t-left {
    justify-content: flex-start;
    text-align: left;
  }
  &.t-none-line {
    line-height: 25px;
  }

  &:nth-of-type(2) {
    grid-column: 2 / 5;
    grid-row: 1 / 2;
  }
  &:nth-of-type(3) {
    grid-column: 5 / 7;
    grid-row: 1 / 2;
  }

  &:nth-of-type(4) {
    grid-column: 1 / 2;
    grid-row: 2 / 7;
  }
  &:nth-of-type(5) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  &:nth-of-type(15) {
    grid-column: 1 / 2;
    grid-row: 7 / 8;
  }
  &:nth-of-type(16) {
    grid-column: 2 / 7;
    grid-row: 7 / 8;
  }
  &:nth-of-type(17) {
    grid-column: 1 / 2;
    grid-row: 8 / 10;
  }
  &:nth-of-type(18) {
    grid-column: 2 / 7;
    grid-row: 8 / 10;
  }
  &:nth-of-type(19) {
    grid-column: 1 / 2;
    grid-row: 10 / 12;
  }
  &:nth-of-type(20) {
    grid-column: 2 / 7;
    grid-row: 10 / 12;
  }
`;

// Table02
export const Table02 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 160px 1fr;
  grid-template-rows: 1fr;
  border-top: 2px solid #666666;
  border-bottom: 2px solid #666666;
  border-left: 1px solid #e9e9e9;

  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.05em;
`;
export const TableItem02 = styled.p`
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

// Table03
export const Table03 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 110px 110px 1fr 1fr 1fr;
  border-left: 1px solid #e9e9e9;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
`;
export const TableItem03 = styled.p`
  padding: 12px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;

  &.t-head {
    font-weight: 700;
    background: #666666;
    color: #ffffff;
  }
  &.t-bg {
    background: #f9f9f9;
  }
  &.t-strong {
    color: #dc1919;
  }

  &:nth-of-type(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
  &:nth-of-type(2) {
    grid-column: 3 / 5;
    grid-row: 1 / 2;
  }
  &:nth-of-type(3) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }
  &:nth-of-type(4) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }
  &:nth-of-type(5) {
    grid-column: 5 / 6;
    grid-row: 1 / 3;
  }
  &:nth-of-type(6) {
    grid-column: 1 / 2;
    grid-row: 3 / 7;
  }
  &:nth-of-type(7) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
  &:nth-of-type(8) {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }
  &:nth-of-type(9) {
    grid-column: 2 / 3;
    grid-row: 5 / 6;
  }
  &:nth-of-type(10) {
    grid-column: 2 / 3;
    grid-row: 6 / 7;
  }
  &:nth-of-type(11) {
    grid-column: 3 / 4;
    grid-row: 3 / 7;
  }
  &:nth-of-type(12) {
    grid-column: 4 / 5;
    grid-row: 3 / 5;
  }
  &:nth-of-type(13) {
    grid-column: 4 / 5;
    grid-row: 5 / 7;
  }
  &:nth-of-type(14) {
    grid-column: 5 / 6;
    grid-row: 3 / 7;
  }
  &:nth-of-type(15) {
    grid-column: 1 / 3;
    grid-row: 7 / 8;
  }
  &:nth-of-type(16) {
    grid-column: 3 / 6;
    grid-row: 7 / 8;
  }
  &:nth-of-type(17) {
    grid-column: 1 / 6;
    grid-row: 8 / 9;
  }
`;
