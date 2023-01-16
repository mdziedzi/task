import React from "react";
import styled from "styled-components";
import { StyledNavBar } from "./NavBar.styled";

const AppLogo = styled.h1``;

function Navbar() {
  return (
    <StyledNavBar>
      <AppLogo>Task</AppLogo>
    </StyledNavBar>
  );
}

export default Navbar;
