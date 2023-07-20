import styled from "@emotion/styled";
import { IIsColumns } from "./Board.types";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const BoardWrapper = styled.div`
  overflow: hidden;
  ${mediaQuery[1]} {
    font-size: 14px;
  }
`;
export const Board = styled.div`
  overflow: scroll;
`;

export const BoardHead = styled.div`
  height: 58px;
  display: grid;
  grid-template-columns: ${(props: IIsColumns) => props.isColumns};
  text-align: center;
  align-items: center;
  background: #f9f9f9;
  font-weight: 700;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
  ${mediaQuery[1]} {
    height: 50px;
  }
`;
export const BoardBody = styled.div``;

export const BoardItemWrapper = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: ${(props: IIsColumns) => props.isColumns};
  text-align: center;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  color: #666666;
  ${mediaQuery[1]} {
    height: 42px;
  }
`;

export const BoardItem = styled.span`
  padding: 0 20px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &.board-item-left {
    text-align: left;
  }
  span {
    cursor: pointer;
  }
  strong {
    font-weight: 500;
    &.on {
      font-weight: 700;
      color: #0d8f68;
    }
  }
  ${mediaQuery[1]} {
    padding: 0 10px;
    font-size: 14px;
  }
`;

export const NoticeBoardItem = styled.span`
  padding: 0 20px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  color: #333333;
  &.board-item-left {
    text-align: left;
  }
  em {
    font-size: 17px;
    display: inline-block;
    margin-right: 20px;
    color: #0d8f68;
  }
  span {
    cursor: pointer;
  }
  ${mediaQuery[1]} {
    padding: 0 10px;
    font-size: 14px;
    &.board-item-left {
      font-size: 14px;
    }
    em {
      font-size: 15px;
      margin-right: 10px;
    }
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

// SearchWrapper
export const SearchWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;
  border-top: 1px solid #e9e9e9;
  ${mediaQuery[2]} {
    width: calc(100% - 2px);
    margin-top: -1px;
  }
`;
export const Search = styled.div`
  display: flex;
  border: 1px solid #e9e9e9;
  margin-top: -1px;
`;
export const SearchHead = styled.div`
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
  ${mediaQuery[0]} {
    width: 130px;
  }
`;
export const SearchBody = styled.div`
  width: calc(100% - 139px);
  padding: 18px 30px;
  ${mediaQuery[0]} {
    width: calc(100% - 130px);
    padding: 18px;
  }
`;

export const BoardTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #444444;
  margin-bottom: 20px;
`;

// Billing
export const BillingContainer = styled.div``;
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
