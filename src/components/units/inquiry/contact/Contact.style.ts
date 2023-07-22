import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";
import dynamic from "next/dynamic";

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
  width: 100%;
  display: flex;
  border-bottom: 1px solid #e9e9e9;
`;
export const Title = styled.div`
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  background: #fafafa;
  ${mediaQuery[1]} {
    width: 180px;
    font-size: 16px;
  }
  ${mediaQuery[2]} {
    display: none;
  }
`;

export const InputItem = styled.div`
  width: 100%;
  padding: 16px 20px;
  height: auto;
  &.editor {
    height: 574px;
  }
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
    &.editor {
      height: 465px;
    }
    input {
      height: 40px;
      padding: 12px;
    }
  }
  ${mediaQuery[2]} {
    &.editor {
      height: 390px;
    }
  }
`;

export const TextItem = styled.p`
  font-size: 16px;
  height: 45px;
  display: flex;
  align-items: center;
  margin-left: 5px;
  ${mediaQuery[1]} {
    font-size: 14px;
    height: 40px;
  }
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

import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
export const Editor = styled(ReactQuill)`
  width: 100%;
  height: 500px;
  ${mediaQuery[1]} {
    height: 400px;
  }
  ${mediaQuery[2]} {
    height: 300px;
  }
`;
