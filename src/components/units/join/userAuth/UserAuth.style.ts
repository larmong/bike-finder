import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const InputGroup = styled.div`
  margin: 0 auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${mediaQuery[2]} {
    width: 100%;
  }
`;
export const InputItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputCont = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const InputTitle = styled.p`
  width: 80px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  ${mediaQuery[1]} {
    width: 60px;
    margin-right: 10px;
  }
`;
