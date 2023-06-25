import React from "react";
/* import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; */
import Header from "./components/Header";
import { MyRoutes } from './Routes';
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <>
     
      <Navbar />
      <Header/>
      <MyRoutes/>
      <HowItWorks/>
      <AboutUs/>
      <Services/>
      <Contact/>
      <Footer />
      
    </>
  );
};

export default Home;
 