import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   @font-face {
      font-family: 'BMHANNAPro';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.0/BMHANNAPro.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  *{
    font-family: "BMHANNAPro";
  }
  body{
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
