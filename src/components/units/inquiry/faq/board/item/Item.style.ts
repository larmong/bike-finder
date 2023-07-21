import styled from "@emotion/styled";
import { mediaQuery } from "../../../../../../commons/style/mediaQuery.style";

export const BoardTitle = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 96px;
  grid-template-rows: 50px;
  border-bottom: 1px solid #e9e9e9;
  cursor: pointer;
  ${mediaQuery[1]} {
    grid-template-columns: 1fr 75px;
  }
  ${mediaQuery[2]} {
    font-size: 14px;
    grid-template-columns: 1fr 55px;
    grid-template-rows: 45px;
  }
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
  ${mediaQuery[1]} {
    padding: 0 20px;
    svg {
      display: none;
    }
  }
  ${mediaQuery[2]} {
    padding: 0 10px;
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
  ${mediaQuery[1]} {
    padding: 0 20px;
  }
  ${mediaQuery[2]} {
    padding: 0 10px;
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
  ${mediaQuery[2]} {
    padding: 16px 10px;
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
  ${mediaQuery[2]} {
    font-size: 14px;
    line-height: 20px;
  }
`;
