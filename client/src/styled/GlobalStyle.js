import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: wheat;
    color: chocolate;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    ::-webkit-scrollbar {
      width: 5px;
      height: 8px;
      background-color: #aaa;
    }
    ::-webkit-scrollbar-thumb {
        background: #000;
    }
  }
`;

export default GlobalStyle;
