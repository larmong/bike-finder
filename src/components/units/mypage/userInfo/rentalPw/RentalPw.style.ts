import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const Message = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #dc1919;
  margin-bottom: -20px;
`;

// Table01
export const Table01 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 320px 1fr;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.05em;
  border-top: 1px solid #666666;
  border-bottom: 1px solid #666666;
`;
export const TableItem01 = styled.p`
  height: 100px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e9e9e9;
  &.t-head {
    font-weight: 700;
    background: #f9f9f9;
  }
`;
