import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
