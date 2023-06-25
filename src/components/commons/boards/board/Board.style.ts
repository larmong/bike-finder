import styled from "@emotion/styled";
import { IIsColumns } from "./Board.types";

export const Board = styled.div``;

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
  margin-bottom: 40px;
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
`;
export const SearchBody = styled.div`
  padding: 18px 30px;
`;
