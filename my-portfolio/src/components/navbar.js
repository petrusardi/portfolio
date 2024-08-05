// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="h-screen w-64 bg-gray-800 text-white flex flex-col items-center py-4 fixed">
      <Link to="/" className="text-2xl font-bold mb-8">
        My Portfolio
      </Link>
      <div className="flex flex-col space-y-4">
        <Link to="/" className="mx-2">
          Home
        </Link>
        <Link to="/about" className="mx-2">
          About
        </Link>
        <Link to="/skills" className="mx-2">
          Skills
        </Link>
        <Link to="/contact" className="mx-2">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
