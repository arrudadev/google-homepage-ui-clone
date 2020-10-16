import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, input, button {
    font-family: Arial, sans-serif;
  }

  html, body {
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
  }
`;
