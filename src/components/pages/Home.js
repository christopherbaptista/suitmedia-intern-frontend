import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Contact from "../Contact";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
