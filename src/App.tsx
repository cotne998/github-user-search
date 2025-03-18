import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles darkMode={darkMode} />
      <Main darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}

export default App;
