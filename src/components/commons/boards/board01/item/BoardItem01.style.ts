import styled from "@emotion/styled";

export const BoardTitle = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 96px;
  grid-template-rows: 50px;
  border-bottom: 1px solid #e9e9e9;
  cursor: pointer;
`;

export const BoardItem = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  svg {
    width: 25px;
    height: 25px;
    padding-bottom: 2px;
  }
`;

export const BoardIcon = styled.div`
  padding: 0 40px;
  display: inline-block;
  text-align: center;
  svg {
    rotate: 90deg;
  }
  &.open {
    svg {
      rotate: -90deg;
    }
  }
`;

export const BoardCont = styled.div`
  grid-column: 1 / 3;
  padding: 30px 20px;
  background: #fafafa;
  display: flex;
  border-bottom: 1px solid #e9e9e9;

  svg {
    width: 30px;
    height: 30px;
    color: #0d8f68;
  }
  svg.true {
    rotate: 90deg;
  }
`;

export const BoardContText = styled.div`
  width: calc(100% - 30px);
  background: #fafafa;
  margin-left: 10px;
  margin-top: 2px;
  font-size: 16px;
  line-height: 30px;
  color: #777;
  white-space: pre-wrap;
  span {
    display: inline-block;
    font-weight: 700;
    color: #333;
    margin-right: 5px;
  }
`;
