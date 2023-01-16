import React from "react";
import { StyledLayout } from "./Layout.styled";
import Navbar from "./NavBar/Navbar";
import ContentPage from "./ContentPage/ContentPage";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <StyledLayout>
      <Navbar />
      <ContentPage />
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
