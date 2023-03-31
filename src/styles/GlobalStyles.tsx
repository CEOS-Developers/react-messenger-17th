import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    /* outline: none; */
    /* border: none; */
    cursor: pointer;
  }
`;

export default GlobalStyle;
