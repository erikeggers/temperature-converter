import React, { useState, createContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { light, dark } from "./themes";
import { Header } from "./components/header";
import { TempConverter } from "./components/tempConverter";
import { Footer } from "./components/footer";

// Theme map
const themesMap = {
  light,
  dark,
};

// Create a context for the theme
export const ThemeContext = createContext();

const App = () => {

  // See if the user has a dark theme set on their computer
  const getUsersTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // console.log(getCurrentTheme());
  const [currentTheme, setCurrentTheme] = useState(getUsersTheme ? "dark" : "light");

  const theme = { colors: themesMap[currentTheme] };

  // Toggle theme
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header/>
          <TempConverter />
          <Footer/>
        </Wrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;

// Styled Components
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;
