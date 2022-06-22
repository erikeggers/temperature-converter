import React, { useContext } from "react";
import styled, { useTheme } from "styled-components";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../App";

export const Header = () => {
  // Get the theme contenxt
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  // Get the theme from styled-components
  const theme = useTheme();

  return (
    <StyledHeader>
      <h1>Temperature Converter</h1>
      <ReactSwitch
        onChange={toggleTheme}
        checked={currentTheme === "dark"}
        checkedHandleIcon={<StyledIcon>🌚</StyledIcon>}
        uncheckedHandleIcon={<StyledIcon>🌞</StyledIcon>}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={theme.colors.toggleBackground}
        onHandleColor={theme.colors.accent}
        offHandleColor={theme.colors.accent}
      />
    </StyledHeader>
  );
};

// Styled Components
const StyledHeader = styled.header(
  ({ theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.header};
    color: ${theme.colors.text};
    h1 {
      margin: 0;
    }
    padding: 1rem;
    .react-switch-bg {
      background-color: ${theme.colors.accent};
    }
  `
);

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 20px;
  padding-right: 2;
`;
