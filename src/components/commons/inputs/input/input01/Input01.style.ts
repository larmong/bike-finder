import styled from "@emotion/styled";

export const InputText = styled.input`
  width: 100%;
  height: 46px;
  padding: 14px 16px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.07em;
  &.bottomBorder {
    height: 40px;
    border: none;
    border-bottom: 1.3px solid #e9e9e9;
    border-radius: 0;
    letter-spacing: 0.5em;
    text-align: center;
  }
  &.left {
    text-align: left;
  }
  &.bottomBorder::placeholder {
    letter-spacing: -1px;
  }
`;
