import React from "react";
import Home from "../Home/Home";
import About from "./About/About";
import Development from "./Development/Development";
import History from "./History/History";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ELS from "../ELS/ELS";

const RetRam = () => {
  return (
    <div>
      <Home />
      <About />
      <ELS />
      <History />
      <Development />
      <Contact />
      <Footer />
    </div>
  );
};

export default RetRam;
