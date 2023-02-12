import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import Menu from "./Menu";
import Games from "./Games";
import PictureSection from "./PictureSection";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

export default function App(){
  return (
    <div className = "main">
      <Home />
      <NavBar />
      <About />
      <Menu />
      <Games />
      <PictureSection />
      <Contact />
      <Footer />
    </div>
  );
};



