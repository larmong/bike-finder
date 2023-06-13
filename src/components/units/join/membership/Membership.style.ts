import styled from "@emotion/styled";

export const Progress = styled.div`
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
`;

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
`;
export const TableItem01 = styled.p`
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
`;
