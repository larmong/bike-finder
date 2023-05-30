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
  top: 130px;
  left: 20px;
  display: grid;
  grid-template-columns: 300px 1fr;
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
`;

// Table02
export const Table02 = styled.div`
  width: calc(100% - 40px);
  position: absolute;
  top: 375px;
  left: 20px;
  display: grid;
  grid-template-columns: 180px 1fr 180px;
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
  width: calc(100% - 40px);
  position: absolute;
  top: 1430px;
  left: 20px;
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 60px 60px 60px;
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
