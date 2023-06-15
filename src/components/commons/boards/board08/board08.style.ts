import styled from "@emotion/styled";

export const Wrapper = styled.div``;

// board
export const Board = styled.div``;

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

export const RadioWrapper = styled.div`
  margin: 40px 0 20px 0;
`;
