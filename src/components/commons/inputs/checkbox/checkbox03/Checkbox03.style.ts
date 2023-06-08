import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CheckboxWrapper = styled.div`
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
export const CheckboxName = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const Essential = styled.em`
  margin: 0 5px 0 0;
  font-weight: 700;
  color: ${(props) => (props.isEssential ? "#DC1919" : "#333333")};
`;

export const Detail = styled.em`
  cursor: pointer;
  margin-left: 10px;
  font-weight: 700;
  font-size: 14px;
  color: #666666;
`;
