import styled from "@emotion/styled";
import { mediaQuery } from "../../../../../commons/style/mediaQuery.style";

export const InputPhoneWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const InputPhone = styled.input`
  text-align: center;
  width: 28%;
  height: 40px;
  padding: 14px 16px;
  border: none;
  border-bottom: 1.3px solid #e9e9e9;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1em;
  &::placeholder {
    letter-spacing: -1px;
  }
  ${mediaQuery[2]} {
    padding: 14px 10px;
  }
`;
