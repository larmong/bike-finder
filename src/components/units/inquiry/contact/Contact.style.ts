import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;

export const ContactWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #666666;
  border-bottom: 1px solid #666666;
`;

export const ContactItem = styled.div`
  display: flex;
  border-bottom: 1px solid #e9e9e9;
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 240px;
    min-height: 65px;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    background: #fafafa;
  }
  ${mediaQuery[1]} {
    span {
      width: 180px;
      min-height: 60px;
      font-size: 16px;
    }
  }
  ${mediaQuery[2]} {
    span {
      width: 100px;
      font-size: 14px;
    }
  }
`;

export const InputItem = styled.div`
  width: 100%;
  padding: 10px 20px;
  input {
    width: 100%;
    height: 45px;
    border: 1px solid #e9e9e9;
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    padding: 14px 16px;
  }
  ${mediaQuery[1]} {
    padding: 12px;
    input {
      height: 40px;
      padding: 12px;
    }
  }
`;

export const TextItem = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  ${mediaQuery[1]} {
    font-size: 14px;
  }
`;

export const ContItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding: 15px 20px;
`;

export const Notice = styled.div`
  width: 100%;
  padding: 40px;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: justify;
  background: #fafafa;
  color: #666666;
  span {
    color: #dc1919;
  }
  ${mediaQuery[1]} {
    padding: 26px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.2px;
  }
  ${mediaQuery[2]} {
    padding: 20px;
    font-size: 14px;
    line-height: 18px;
  }
`;
