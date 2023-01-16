import React from "react";
import styled from "styled-components";
import { StyledFooter } from "./Footer.styled";

const Copyrights = styled.p``;

function Footer() {
  return (
    <StyledFooter>
      <Copyrights>Copyrights: Marcin Dziedzic</Copyrights>
    </StyledFooter>
  );
}

export default Footer;
