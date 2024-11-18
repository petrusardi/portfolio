// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Footer from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow relative">
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="skills">
            <Skills />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
