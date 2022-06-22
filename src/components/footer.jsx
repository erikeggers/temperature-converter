import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <span>Erik Eggers - 2022</span>
    </StyledFooter>
  );
};

// Styled Components
const StyledFooter = styled.footer(
  ({ theme }) => `
    height: 40px;
    text-align: center;
    padding: 20px auto;
    color: ${theme.colors.text};
  `
);
