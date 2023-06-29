// Table01
import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Table01 = styled.div`
  width: 100%;
  display: grid;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.05em;
  word-break: keep-all;
  border-top: 1px solid #666666;
  border-bottom: 1px solid #666666;
  &.userInfo {
    grid-template-columns: 225px 1fr;
  }
  &.userCard1 {
    grid-template-columns: 1fr 1fr;
  }
  &.userCard2 {
    grid-template-columns: 170px 1fr;
  }
  &.rentalPw {
    grid-template-columns: 320px 1fr;
  }
  ${mediaQuery[0]} {
    font-size: 15px;
    &.userInfo {
      grid-template-columns: 200px 1fr;
    }
    &.rentalPw {
      text-align: center;
      grid-template-columns: 30% 70%;
    }
  }
  ${mediaQuery[1]} {
    font-size: 14px;
    &.userInfo {
      grid-template-columns: 35% 65%;
    }
    &.userCard2 {
      grid-template-columns: 30% 70%;
    }
  }
`;
export const TableItem01 = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  &.t-head {
    justify-content: center;
    font-weight: 700;
    background: #f9f9f9;
  }
  &.t-address {
    height: 180px;
  }
  ${mediaQuery[0]} {
    padding: 16px 14px;
  }
  ${mediaQuery[1]} {
    height: auto;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 14px 12px;
    &.t-head {
      align-items: center;
    }
    &.t-address {
      height: auto;
    }
  }
`;

export const Message = styled.span`
  color: #999999;
  font-weight: 400;
  font-size: 14px;
  display: inline-block;
  margin-left: 10px;
  strong {
    font-weight: 700;
  }
  ${mediaQuery[0]} {
    font-size: 13px;
  }
  ${mediaQuery[1]} {
    display: block;
    margin-left: 0;
    margin-top: 10px;
  }
`;
