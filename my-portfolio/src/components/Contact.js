// src/components/Footer.js
import React from "react";
import {
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="text-center md:text-left ms-8">
          <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.linkedin.com/in/petrus-ardi-tama/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/petrusardi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              aria-label="Github"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://wa.me/6281585021394"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
            <a
              href="mailto:petrus.arditama@gmail.com"
              className="text-red-500 hover:text-red-400"
              aria-label="Email"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm">
            &copy; 2024 Petrus Arditama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
