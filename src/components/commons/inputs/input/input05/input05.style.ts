import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ZipcodeWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const InputZipcode = styled.input`
  text-align: center;
  width: 100px;
  height: 40px;
  padding: 14px 16px;
  border: none;
  border-bottom: 1.3px solid #e9e9e9;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1em;
  margin-right: 20px;
  &.bottomBorder::placeholder {
    letter-spacing: -1px;
  }
`;
export const PostCodeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  background: #0d8f68;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.07em;
  color: #ffffff;
`;

export const InputAddress = styled.input`
  width: 100%;
  height: 40px;
  padding: 14px 16px;
  border: none;
  border-bottom: 1.3px solid #e9e9e9;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1em;
  text-align: left;
  &.bottomBorder::placeholder {
    letter-spacing: -1px;
  }
`;
