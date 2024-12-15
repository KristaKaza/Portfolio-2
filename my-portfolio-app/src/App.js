import React from "react";
import Navigation from "../src/components/NavBar";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import "../src/index.scss";

const App = () => {
  return (
    <div>
      <Navigation />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
