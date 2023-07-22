import styled from "@emotion/styled";
import { IIsEssential } from "./Checkbox03.types";
import { mediaQuery } from "../../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Checkbox = styled.div``;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
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

export const CheckboxName = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  ${mediaQuery[2]} {
    font-size: 14px;
    letter-spacing: -1.5px;
  }
`;

export const Essential = styled.em`
  margin: 0 5px 0 0;
  font-weight: 700;
  color: ${(props: IIsEssential) =>
    props.isEssential ? "#DC1919" : "#333333"};
`;

export const Detail = styled.em`
  cursor: pointer;
  margin-left: 10px;
  font-weight: 700;
  font-size: 14px;
  color: #666666;
  ${mediaQuery[2]} {
    display: none;
  }
`;
