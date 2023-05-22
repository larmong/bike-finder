import { css } from "@emotion/react";

export const GlobalStyle = css`
  * {
    font-family: "NotoSans400", Menlo, Courier, monospace;
    font-size: 16px;
    margin: 0;
    box-sizing: border-box;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button {
    border: 0;
    cursor: pointer;
    background: #fff;
  }
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
  }
  input::placeholder,
  textarea::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #bdbdbd;
  }
`;
