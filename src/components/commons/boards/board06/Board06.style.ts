import styled from "@emotion/styled";

export const Wrapper = styled.div``;

// board
export const Board = styled.div`
  margin-top: 70px;
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
  font-weight: 400;
  color: #666666;
  > span {
    color: #0d8f68;
  }
`;
