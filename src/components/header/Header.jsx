import React from "react";
import Navbar from "../navbar/Navbar";
import styled from "styled-components";
import ToggleTheme from "../ToggleTheme";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <ToggleTheme />
    </StyledHeader>
  );
};

export default Header;
