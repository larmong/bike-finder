import { css } from "@emotion/react";

export const GlobalStyle = css`
  // 100, 300, 400, 500, 700
  @font-face {
    font-family: "SpoqaHanSansNeo";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "EnjoyStories";
    font-weight: 300;
    font-style: normal;
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/tvn/EnjoyStoriesLight.ttf")
      format("truetype");
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "SpoqaHanSansNeo", Arial, sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #333333;
  }
  em {
    font-style: normal;
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
