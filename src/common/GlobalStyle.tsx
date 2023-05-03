import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'IBMPlexSansKR-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body{
  font-family: 'IBMPlexSansKR-Regular';
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FEE6E6;
  font-size: 0.8rem;
}
`;

export default GlobalStyle;
