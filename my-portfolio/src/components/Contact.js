// src/components/Contact.js
import React from "react";
import { FaLinkedin, FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-blue-700 text-4xl" />
            <a
              href="https://www.linkedin.com/in/petrus-ardi-tama/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-700 hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaGithub className="text-black text-4xl" />
            <a
              href="https://github.com/petrusardi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-black hover:underline"
            >
              Github
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-green-500 text-4xl" />
            <a className="text-xl text-green-500">+62 815-8502-1394</a>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-red-500 text-4xl" />
            <a className="text-xl text-red-500">petrus.arditama@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
