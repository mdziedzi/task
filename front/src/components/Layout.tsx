import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const LayoutStyled = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

interface LayoutProps {}

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
