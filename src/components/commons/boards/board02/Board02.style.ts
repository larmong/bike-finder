import styled from "@emotion/styled";

export const Board = styled.div``;

export const BoardHead = styled.div`
  height: 58px;
  display: grid;
  grid-template-columns: 1fr 185px;
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
  grid-template-columns: 1fr 185px;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  color: #666666;
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
`;
