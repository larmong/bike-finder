import styled from "@emotion/styled";
import { mediaQuery } from "../../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Checkbox = styled.input`
  display: none;
  & + label {
    cursor: pointer;
    width: 16px;
    height: 16px;
    background-size: cover;
    border: 1px solid #d6d6d6;
  }
  &:checked + label {
    width: 16px;
    height: 16px;
    background-image: url("/images/input/cb-on.svg");
    background-size: cover;
    border: 2px solid #0d8f68;
  }
`;
export const CheckboxName = styled.span`
  width: calc(100% - 24px);
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  margin-top: 3px;
  em {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.05em;
    color: #999999;
  }
  ${mediaQuery[1]} {
  }
`;
