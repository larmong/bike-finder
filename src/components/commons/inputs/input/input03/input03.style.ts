import styled from "@emotion/styled";

export const InputDateWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputNumber = styled.input`
  width: 100%;
  height: 40px;
  padding: 14px 16px;
  border: none;
  border-bottom: 1.3px solid #e9e9e9;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.5em;
  text-align: center;
  &::placeholder {
    letter-spacing: -1px;
  }
`;
