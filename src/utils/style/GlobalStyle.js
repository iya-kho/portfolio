import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './variables';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${fonts.primary};
  }

  h1, h2 {
    font-family: ${fonts.secondary};
    text-transform: uppercase;
    font-size: 40px;
  }

  h2 {
    color: ${colors.secondary};
    padding-bottom: 25px;
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
    padding-left: 15px;
    padding-right: 15px;
  }

  .sectionVertPadding {
    padding-top: 50px;
  }

  header, 
  #home {
    background-color: ${colors.primary};
  }

  header > *,
  #home > * {
    color: #fff
  }

  .custom-type-animation-cursor::after {
    content: '|';
    animation: cursor 1.1s infinite step-start;
  }

  @keyframes cursor {
    50% {
      opacity: 0;
    }
  }

`;
