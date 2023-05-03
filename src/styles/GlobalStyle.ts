import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'GangwonEdu_OTFBoldA'
  }
  `;
