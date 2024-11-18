import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // State untuk menyimpan link yang aktif

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Mengubah state saat link diklik
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-lg transition-all ease-in-out duration-300">
      <div className="flex justify-between items-center w-full px-6 py-4">
        <a
          href="#hero"
          className="text-2xl font-bold tracking-wider hover:text-blue-400 transition duration-300"
        >
          My Portfolio
        </a>
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-white hover:text-blue-500 transition duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className="hidden md:flex space-x-6">
          <Link
            to="hero"
            smooth={true}
            offset={-70}
            duration={500}
            className={`px-4 py-2 cursor-pointer rounded-md transition-colors duration-300 ${
              activeLink === "hero" ? "bg-blue-600" : "hover:bg-blue-500"
            }`}
            onClick={() => handleLinkClick("hero")}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
            className={`px-4 py-2 cursor-pointer rounded-md transition-colors duration-300 ${
              activeLink === "about" ? "bg-blue-600" : "hover:bg-blue-500"
            }`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            offset={-70}
            duration={500}
            className={`px-4 py-2 cursor-pointer rounded-md transition-colors duration-300 ${
              activeLink === "portfolio" ? "bg-blue-600" : "hover:bg-blue-500"
            }`}
            onClick={() => handleLinkClick("portfolio")}
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            offset={-70}
            duration={500}
            className={`px-4 py-2 cursor-pointer rounded-md transition-colors duration-300 ${
              activeLink === "skills" ? "bg-blue-600" : "hover:bg-blue-500"
            }`}
            onClick={() => handleLinkClick("skills")}
          >
            Skills
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <Link
          to="hero"
          smooth={true}
          offset={-70}
          duration={500}
          className={`px-4 py-2 cursor-pointer rounded-md transition-colors duration-300 ${
            activeLink === "hero" ? "bg-blue-600" : "hover:bg-blue-500"
          }`}
          onClick={() => handleLinkClick("hero")}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          offset={-70}
          duration={500}
          className={`px-4 py-2 cursor-pointer rounded-md transition-colors duration-300 ${
            activeLink === "about" ? "bg-blue-600" : "hover:bg-blue-500"
          }`}
          onClick={() => handleLinkClick("about")}
        >
          About
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          offset={-70}
          duration={500}
          className={`px-4 py-2 cursor-pointer rounded-md transition-colors duration-300 ${
            activeLink === "portfolio" ? "bg-blue-600" : "hover:bg-blue-500"
          }`}
          onClick={() => handleLinkClick("portfolio")}
        >
          Projects
        </Link>
        <Link
          to="skills"
          smooth={true}
          offset={-70}
          duration={500}
          className={`px-4 py-2 cursor-pointer rounded-md transition-colors duration-300 ${
            activeLink === "skills" ? "bg-blue-600" : "hover:bg-blue-500"
          }`}
          onClick={() => handleLinkClick("skills")}
        >
          Skills
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
