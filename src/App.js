import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
      <div className="App">
        <Navbar />
        <section id="home" className="section home-section">
          <HeroSection />
        </section>
        <section id="about" className="section about-section">
          <About />
        </section>
        <section id="skills" className="section skills-section">
          <Skills />
        </section>
        <section id="portfolio" className="projects-section">
          <Projects />
        </section>

        <section id="contact" className="section contact-section">
          <Contact />
        </section>
      </div>
  );
}

export default App;