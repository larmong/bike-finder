import styled from "@emotion/styled";
import { IIsHead } from "./Board.types";

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

export const BoardBodyWrapper = styled.div<{ isHead: IIsHead }>`
  border-bottom: ${(props) => (props.isHead ? "1px solid #999999" : "none")};
`;

export const BoardBody = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
export const BoardItem = styled.span`
  padding: 0 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
