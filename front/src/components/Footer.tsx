import React from 'react';
import styled from "styled-components";

const FooterStyled = styled.div`
  height: ${props => props.theme.spacing.l};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copyrights = styled.p`
`;

function Footer() {
    return (
        <FooterStyled>
            <Copyrights>Copyrights: Marcin Dziedzic</Copyrights>
        </FooterStyled>
    )
}

export default Footer;