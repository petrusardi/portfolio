// src/components/Skills.js
import React from "react";
import { motion } from "framer-motion";
const skills = [
  { name: "JavaScript", logo: "/logos/javascript.png" },
  { name: "TypeScript", logo: "/logos/ts.png" },
  { name: "Node.js & Express.js", logo: "/logos/nodejs.png" },
  { name: "MongoDB & PostgreSQL", logo: "/logos/mongodb.png" },
  { name: "MongoDB & PostgreSQL", logo: "/logos/postgresql.png" },
  { name: "Sequelize", logo: "/logos/sequelize.png" },
  { name: "HTML5 & CSS3", logo: "/logos/html.png" },
  { name: "HTML5 & CSS3", logo: "/logos/css.png" },
  { name: "React & React Native", logo: "/logos/react.png" },
  { name: "NEXT.JS", logo: "/logos/next.png" },
  { name: "Tailwind", logo: "/logos/tailwind.png" },
  { name: "Bootstrap", logo: "/logos/bootstrap.jpeg" },
  { name: "Git & GitHub", logo: "/logos/github.png" },
  { name: "JWT", logo: "/logos/jwt.png" },
  { name: "Redis", logo: "/logos/redis.png" },
  { name: "Jest", logo: "/logos/jest.png" },
  { name: "Amazon Web Services", logo: "/logos/aws.png" },
  { name: "Firebase", logo: "/logos/firebase.png" },
];

const Skills = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-white">
          Skills
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 px-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-lg p-4 transform transition-transform hover:scale-105 w-full aspect-square"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* <h3 className="text-2xl font-semibold mb-3 text-indigo-700">
                {skill.name}
              </h3> */}
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className=" h-24 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
