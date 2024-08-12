// src/components/Portfolio.js
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "TIC-TAC-TIV App",
    description:
      "A web-based app for playing tic-tac-toe with integrated chat functionality to interact with your opponent during the game.",
    techstack:
      "Express JS, PostgreSQL, React, Tailwind CSS, Socket.io, AWS, Firebase",
    videoLink: "",
    githubLink: "https://github.com/Tim-7-GP-HCK70/GP-TIM-7",
  },
  {
    name: "Trading Card Game App",
    description:
      "A dynamic platform for trading card enthusiasts. Users can purchase and explore a wide range of trading cards, track card details, and manage their collection efficiently.",
    techstack:
      "TypeScript, MongoDB, Next.JS, tailwind, bycrpt, JsonWebToken, Vercel",
    videoLink: "#",
    githubLink: "https://github.com/petrusardi/TCG-WebClone",
  },
  {
    name: "Wiki & E-Commerce App",
    description:
      "A web-based platform for exploring detailed information about Anime characters and E-commerce for purchasing action figures.",
    techstack:
      "Express JS, PostgreSQL, React, Tailwind CSS, Open AI, AWS, Firebase",
    videoLink: "#",
    githubLink: "https://github.com/petrusardi/naruto-ecommerce-app",
  },
  {
    name: "AgriMart App",
    description:
      "A web-based e-commerce app for buying and selling farm produce, providing fresh vegetables, fruits, and other agricultural products directly from farmers to consumers.",
    techstack: "ReactJS, Express.js, PostgreSQL, HTML & CSS",
    videoLink: "#",
    githubLink: "https://github.com/petrusardi/AgriMart-pair-project",
  },
];

const Portfolio = () => {
  return (
    <section className="h-screen flex relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-white">
          Projects
        </h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-7">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              className="text-center bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <p className="text-gray-700 font-medium mb-2">Tech Stack:</p>
                <p className="text-gray-500">{project.techstack}</p>
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href={project.videoLink}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                <a
                  href={project.githubLink}
                  className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
