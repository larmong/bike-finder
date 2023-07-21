import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const RankingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const RankingGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RankingTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

// Table01
export const UserRankingTable = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 185px 1fr 185px;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.05em;
  ${mediaQuery[2]} {
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 13px;
  }
`;
export const TableItem01 = styled.p`
  padding: 14px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e9e9e9;

  &.t-head {
    font-weight: 700;
    background: #f9f9f9;
    border-top: 1px solid #999999;
    border-bottom: 1px solid #999999;
  }
`;
