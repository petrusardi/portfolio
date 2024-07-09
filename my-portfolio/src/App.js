// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="ml-64 w-full">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
