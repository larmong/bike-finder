import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

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
`;

export const Section01 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;
export const Section02 = styled.div``;

// Table01
export const Table01 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 470px 1fr;
  font-size: 14px;
  line-height: 14px;
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
  &.t-head {
    justify-content: center;
    font-weight: 700;
    background: #f9f9f9;
  }
`;

// Table02
export const Table02 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 220px 1fr;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.05em;
  border-top: 1px solid #666666;
  border-bottom: 1px solid #666666;
`;
export const TableItem02 = styled.div`
  height: 70px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #e9e9e9;
  &.t-head {
    text-align: center;
    font-weight: 700;
    background: #f9f9f9;
  }
  span {
    display: block;
    margin-bottom: 8px;
  }
`;
