import React, { useState } from "react";
import styled from "styled-components";

export const TempConverter = () => {
  const [temp, setTemp] = useState({ type: "celsius", value: 0, emoji: "🥶" });
  const [error, setError] = useState(null);

  const handleTempInput = (e, type) => {
    // Make sure the input is a number/decimal
    const validated = e.target.value.match(/^[+-]?\d*\.?\d{0,100}$/);
    const value = e.target.value;
    // If the input is not a number, set the error message
    if (validated) {
      // Set the emoji to display
      let emoji = "🥶";
      if (type === "celsius") {
        if (value <= 8 || value === "-") {
          emoji = "🥶";
        } else if (value > 8 && value <= 16) {
          emoji = "😬";
        } else if (value > 16 && value <= 24) {
          emoji = "😊";
        } else if (value > 24 && value <= 32) {
          emoji = "😅";
        } else {
          emoji = "🥵";
        }
      } else {
        if (value <= 46 || value === "-") {
          emoji = "🥶";
        } else if (value > 46 && value <= 60) {
          emoji = "😬";
        } else if (value > 60 && value <= 75) {
          emoji = "😊";
        } else if (value > 75 && value <= 89) {
          emoji = "😅";
        } else {
          emoji = "🥵";
        }
      }

      // Set the new value and emoji
      setTemp({ type: type, value: value, emoji: emoji });

      // Clear the error message
      setError(null);
    } else {
      setError("Please enter a valid temperature");
    }
  };

  const handleReset = () => {
    setTemp({ type: "celsius", value: 0, emoji: "🥶" });
    setError(null);
  };

  // Convert the temperature from celsius to fahrenheit
  let fahrenheit =
    temp.type === "celsius" && temp.value !== "" && temp.value !== "-"
      ? (temp.value * 9) / 5 + 32
      : temp.value;

  // Convert the temperature from fahrenheit to celsius
  let celsius =
    temp.type === "fahrenheit" && temp.value !== "" && temp.value !== "-"
      ? ((temp.value - 32) * 5) / 9
      : temp.value;

  return (
    <StyledContent>
      <StyledContainer>
        <StyledParagraph>
          Input a temperature below in either Celsius or Fahrenheit
        </StyledParagraph>
        <StyledEmoji>{temp.emoji}</StyledEmoji>
        <StyledError>{error}</StyledError>
        <StyledInputWrapper>
          <label htmlFor="celsius">Celsius</label>
          <StyledInput
            type="text"
            name="celsius"
            id="celsius"
            value={celsius}
            onChange={(e) => handleTempInput(e, "celsius")}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <label htmlFor="fahrenheit">Fahrenheit</label>
          <StyledInput
            type="text"
            name="fahrenheit"
            id="fahrenheit"
            value={fahrenheit}
            onChange={(e) => handleTempInput(e, "fahrenheit")}
          />
        </StyledInputWrapper>
        <StyledResetButton onClick={handleReset}>Reset</StyledResetButton>
      </StyledContainer>
    </StyledContent>
  );
};

const StyledContent = styled.main`
  min-height: calc(100vh - 170px);
`;

const StyledContainer = styled.div(
  ({ theme }) => `
    background-color: ${theme.colors.box};
    color: ${theme.colors.text};
    ${theme.colors.boxShadow && `box-shadow: ${theme.colors.boxShadow}`};
    display: flex;
    flex-direction: column;
    margin: 60px auto;
    max-width: 280px;
    padding: 20px;
    border-radius: 5px;
    `
);

// Styled Components
const StyledParagraph = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const StyledInput = styled.input(
  ({ theme }) => `
    all: unset;
    margin: 10px 0;
    background-color: ${theme.colors.box};
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.text};
    padding: 5px;
    border-radius: 5px;
    :focus {
      border: 1px solid ${theme.colors.accent};
    }
    `
);

const StyledEmoji = styled.div`
  font-size: 100px;
  margin: 0 auto;
  opacity: ${({ theme }) => theme.colors.emojiOpacity};
`;

const StyledResetButton = styled.button(
  ({ theme }) => `
    margin-toP: 10px;
    background-color: ${theme.colors.accent};
    color: ${theme.colors.buttonTextColor};
    border: none;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    `
);

const StyledError = styled.div`
  color: ${({ theme }) => theme.colors.error};
  margin: 10px 0;
`;
