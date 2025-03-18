import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
  darkMode: boolean;
}

const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  body {
    background-color: ${({ darkMode }) => (darkMode ? "#141D2F" : "#F6F8FF")};
    font-family: "Space Mono", monospace;
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
    padding: 3.1rem 2.4rem 7.9rem;
  }
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Space Mono", monospace;
  transition: 0.2s;
}

html {
  font-size: 62.5%;
}



#root {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.lower-wrap {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.info-div {
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
}

.avatar-div {
  display: block;
}

@media only screen and (min-width: 48rem) {
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .lower-wrap {
    flex-direction: row;
    gap: 6.5rem;
  }

  .info-div {
    gap: 3.2rem;
  }
}
  



  
`;

export default GlobalStyles;
