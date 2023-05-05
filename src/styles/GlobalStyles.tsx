import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'IBMPlexSansKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    cursor: default;

    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url('../../public/Imgs/backgroundImg.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }


`;

export default GlobalStyle;
