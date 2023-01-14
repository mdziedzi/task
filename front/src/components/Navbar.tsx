import React from "react";
import styled from "styled-components";

const NavbarStyled = styled.nav`
  height: ${(props) => props.theme.spacing.l};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppLogo = styled.h1``;

function Navbar() {
  return (
    <NavbarStyled>
      <AppLogo>Task</AppLogo>
    </NavbarStyled>
  );
}

export default Navbar;
