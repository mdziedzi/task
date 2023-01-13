import React, {ReactNode} from 'react';
import styled from "styled-components";

const LayoutStyled = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {

    return (
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}

export default Layout;