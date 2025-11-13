import React from "react";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
