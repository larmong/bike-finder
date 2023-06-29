import styled from "@emotion/styled";
import { mediaQuery } from "../../../../../commons/style/mediaQuery.style";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ZipcodeWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${mediaQuery[2]} {
    gap: 10px;
  }
`;
export const InputZipcode = styled.input`
  text-align: center;
  width: 100px;
  height: 46px;
  padding: 14px 16px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.1em;
  margin-right: 20px;
  &.bottomBorder {
    font-size: 14px;
    height: 40px;
    border: none;
    border-radius: 0;
    border-bottom: 1.3px solid #e9e9e9;
  }
  &.bottomBorder::placeholder {
    letter-spacing: -1px;
  }
  &::placeholder {
    letter-spacing: -1px;
  }
  ${mediaQuery[0]} {
    width: 95px;
    height: 42px;
    padding: 14px 16px;
    font-size: 15px;
    margin-right: 10px;
  }
  ${mediaQuery[2]} {
    width: 50%;
    height: 38px;
    padding: 0;
    font-size: 14px;
    margin-right: 0;
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
  ${mediaQuery[0]} {
    width: auto;
    padding: 0 14px;
    height: 38px;
    font-weight: 500;
    font-size: 15px;
  }
  ${mediaQuery[2]} {
    width: 50%;
    height: 38px;
    padding: 0;
    font-size: 14px;
  }
`;

export const InputAddress = styled.input`
  width: 100%;
  height: 46px;
  padding: 14px 16px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -1px;
  text-align: left;
  &.bottomBorder {
    font-size: 14px;
    height: 40px;
    border: none;
    border-radius: 0;
    border-bottom: 1.3px solid #e9e9e9;
  }
  &.bottomBorder::placeholder {
    letter-spacing: -1px;
  }
  &::placeholder {
    letter-spacing: -1px;
  }
  ${mediaQuery[0]} {
    height: 42px;
    padding: 14px 16px;
    font-size: 15px;
    margin-right: 10px;
  }
  ${mediaQuery[2]} {
    font-size: 14px;
  }
`;
