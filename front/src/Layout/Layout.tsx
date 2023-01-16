import React from "react";
import { StyledLayout } from "./Layout.styled";
import Navbar from "../components/NavBar/Navbar";
import ContentPage from "../pages/ContentPage/ContentPage";
import Footer from "../components/Footer/Footer";

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
