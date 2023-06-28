import styled from "@emotion/styled";
import { mediaQuery } from "../../../../../commons/style/mediaQuery.style";

export const InputCardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${mediaQuery[0]} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const InputCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${mediaQuery[0]} {
    width: 100%;
  }
`;
export const InputCard = styled.input`
  text-align: center;
  width: 120px;
  height: 40px;
  padding: 14px 16px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1em;
  ${mediaQuery[0]} {
    padding: 10px 12px;
    width: calc(33.33% - 17px);
    height: 38px;
  }
`;
export const CardMessage = styled.span`
  color: #999999;
  font-weight: 400;
  font-size: 14px;
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
  strong {
    font-weight: 700;
  }
  ${mediaQuery[0]} {
    margin-left: 5px;
    margin-top: 0;
  }
`;
