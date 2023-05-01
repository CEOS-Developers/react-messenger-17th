import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'GmarketSansMedium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body{
  font-family: 'GmartketSansMedium';
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FEE6E6;
  font-size: 0.8rem;
}
`;

export default GlobalStyle;
