import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Space Mono", monospace;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }


  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
