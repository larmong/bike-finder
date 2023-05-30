import styled from "@emotion/styled";

export const Board = styled.div``;
export const BoardHead = styled.div`
  display: grid;
  grid-template-rows: 58px;
  background: #f9f9f9;

  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  text-align: center;

  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
`;
export const BoardBodyWrapper = styled.div`
  border-bottom: 1px solid #999999;
`;
export const BoardBody = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 96px;
  grid-template-rows: 50px;
  border-bottom: 1px solid #e9e9e9;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
export const BoardIcon = styled.div`
  cursor: pointer;
  padding: 0 40px;
  display: inline-block;
  text-align: center;
  svg {
    rotate: -90deg;
  }
`;
export const BoardItem = styled.span`
  padding: 0 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BoardCont = styled.div`
  grid-column: 1 / 3;
  padding: 30px 20px;
  background: #fafafa;
  display: flex;
  border-top: 1px solid #e9e9e9;
  svg {
    width: 30px;
    height: 30px;
    color: #0d8f68;
  }
`;
export const BoardContText = styled.div`
  background: #fafafa;
  margin-left: 10px;
  margin-top: 2px;
  font-size: 16px;
  line-height: 30px;
  color: #777;
  span {
    display: inline-block;
    font-weight: 700;
    color: #333;
  }
`;
