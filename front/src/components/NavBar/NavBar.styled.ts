import styled from "styled-components";

export const StyledNavBar = styled.nav`
  height: ${(props) => props.theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAppLogo = styled.h1`
  color: ${(props) => props.theme.color.primary};
`;
