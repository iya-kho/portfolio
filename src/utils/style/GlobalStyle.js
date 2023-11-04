import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto Mono', monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Exo 2', sans-serif;
    text-transform: uppercase;
    color: ${colors.secondary}
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  .inWrap {
    max-width: 1400px;
    margin: 0 auto;
  }

  header, 
  #home {
    background-color:${colors.primary}
  }

  header > *,
  #home > * {
    color: #fff
  }

`;
