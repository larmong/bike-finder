import styled from "@emotion/styled";

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
`;

// Table01
export const Table01 = styled.div`
  width: calc(100% - 40px);
  position: absolute;
  top: 630px;
  left: 20px;
  display: grid;
  grid-template-columns: 196px 232px 1fr;
  grid-template-rows: 1fr;
  border-top: 2px solid #666666;
  border-bottom: 2px solid #666666;
  border-left: 1px solid #e9e9e9;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
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
  &:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 5;
  }
  &:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }

  // 만 13세 회원
  &:nth-child(9) {
    grid-column: 1 / 2;
    grid-row: 5 / 8;
  }

  // SNS 회원
  &:nth-child(16) {
    grid-column: 1 / 2;
    grid-row: 8 / 12;
  }
  &:nth-child(21) {
    grid-column: 2 / 3;
    grid-row: 10 / 12;
  }
`;

// Table02
export const Table02 = styled.div`
  width: calc(100% - 40px);
  position: absolute;
  top: 1530px;
  left: 20px;
  display: grid;
  grid-template-columns: 100px 1fr 120px 1fr 260px;
  grid-template-rows: 1fr;
  border-top: 2px solid #666666;
  border-bottom: 2px solid #666666;
  border-left: 1px solid #e9e9e9;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
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

  &:nth-child(6) {
    grid-column: 1 / 2;
    grid-row: 2 / 5;
  }
  &:nth-child(7) {
    grid-column: 2 / 3;
    grid-row: 2 / 5;
  }
  &:nth-child(11) {
    grid-row: 3 / 4;
  }
  &:nth-child(14) {
    grid-row: 4 / 5;
  }
`;

// Table03
export const Table03 = styled.div`
  width: calc(100% - 40px);
  position: absolute;
  top: 1970px;
  left: 20px;
  display: grid;
  grid-template-columns: 70px 130px 120px 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-top: 2px solid #666666;
  border-bottom: 2px solid #666666;
  border-left: 1px solid #e9e9e9;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
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
  width: calc(100% - 40px);
  position: absolute;
  top: 2220px;
  left: 20px;
  display: grid;
  grid-template-columns: 70px 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-top: 2px solid #666666;
  border-bottom: 2px solid #666666;
  border-left: 1px solid #e9e9e9;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
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
  width: calc(100% - 40px);
  position: absolute;
  top: 2804px;
  left: 20px;
  display: grid;
  grid-template-columns: 70px 200px 1fr;
  grid-template-rows: 50px 1fr;
  border-top: 2px solid #666666;
  border-bottom: 2px solid #666666;
  border-left: 1px solid #e9e9e9;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
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
