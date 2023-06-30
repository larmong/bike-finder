import styled from "@emotion/styled";
import { mediaQuery } from "../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div``;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 42px 42px;
  ${mediaQuery[1]} {
    gap: 30px 30px;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  padding: 40px 15px;
  width: calc(33.33% - 28px);
  height: auto;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  ${mediaQuery[1]} {
    width: calc(50% - 15px);
  }
  ${mediaQuery[2]} {
    width: 100%;
    height: auto;
  }
`;
export const CardImage = styled.img`
  width: 65%;
  margin-bottom: 20px;
`;
export const CardTitle = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  ${mediaQuery[0]} {
    font-size: 22px;
    line-height: 20px;
  }
`;
export const CardContent = styled.p`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: #666666;
  white-space: pre-wrap;
  height: 54px;
  ${mediaQuery[0]} {
    white-space: initial;
    word-break: keep-all;
  }
`;
