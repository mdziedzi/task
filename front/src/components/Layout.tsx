import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const LayoutStyled = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Layout = ({ children }: PropsWithChildren) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
