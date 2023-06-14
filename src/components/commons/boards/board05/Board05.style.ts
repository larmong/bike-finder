import styled from "@emotion/styled";

export const Wrapper = styled.div``;

// board
export const Board = styled.div``;
export const BoardTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #444444;
  margin-bottom: 20px;
`;

export const BoardHead = styled.div`
  height: 58px;
  display: grid;
  grid-template-columns: ${(props) => props.isColumns};
  text-align: center;
  align-items: center;
  background: #f9f9f9;
  font-weight: 700;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
`;
export const BoardBody = styled.div``;

export const BoardItemWrapper = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: ${(props) => props.isColumns};
  text-align: center;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  font-weight: 400;
  color: #666666;
`;

export const BoardItem = styled.span`
  padding: 0 16px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  &.board-item-left {
    text-align: left;
  }
`;
export const BoardItemState = styled.span`
  &.red {
    color: #dc1919;
  }
  &.blue {
    color: #1938dc;
  }
`;

export const BillingWrapper = styled.div`
  position: relative;
  margin-top: 40px;
  margin-bottom: 100px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #999999;
  }
`;
export const Billing = styled.div`
  display: flex;
  border: 1px solid #e9e9e9;
  margin-top: -1px;
`;
export const BillingHead = styled.div`
  width: 139px;
  padding: 18px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  color: #666666;
  background: #f9f9f9;
  border-right: 1px solid #e9e9e9;
`;
export const BillingBody = styled.div`
  padding: 18px 30px;
  font-weight: 400;
  color: #666666;
  > span {
    color: #0d8f68;
  }
`;

export const TotalPayment = styled.div`
  margin-top: -1px;
  width: 100%;
  height: 85px;
  padding: 30px;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.07em;
  display: flex;
  justify-content: space-between;
  background: #f9f9f9;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
  p:last-of-type {
    span {
      color: #0d8f68;
    }
  }
`;

export const BillingBottom = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
