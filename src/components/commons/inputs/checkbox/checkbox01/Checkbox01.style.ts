import styled from "@emotion/styled";
import { mediaQuery } from "../../../../../commons/style/mediaQuery.style";

export const Checkbox = styled.div`
  margin: 0 auto;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const CheckboxBtn = styled.input`
  &[type="checkbox"] {
    position: relative;
    cursor: pointer;
    appearance: none;
    width: 16px;
    height: 16px;
    background-size: cover;
    border: 1px solid #d6d6d6;
  }
  &[type="checkbox"]:checked {
    width: 16px;
    height: 16px;
    background-image: url("/images/input/cb-on.svg");
    background-size: cover;
    border: 2px solid #0d8f68;
  }
  ${mediaQuery[2]} {
    &[type="checkbox"] {
      width: 13px;
      height: 13px;
    }
    &[type="checkbox"]:checked {
      width: 13px;
      height: 13px;
    }
  }
`;

export const CheckboxName = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  margin-top: 1px;
  em {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.05em;
    color: #999999;
  }
  ${mediaQuery[2]} {
    font-size: 13px;
    letter-spacing: -1.5px;
    em {
      font-size: 13px;
      letter-spacing: -0.05em;
    }
  }
`;
