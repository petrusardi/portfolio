// src/components/Skills.js
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", logo: "/logos/javascript.png" },
  { name: "TypeScript", logo: "/logos/ts.png" },
  { name: "Golang", logo: "/logos/golang.png" },
  { name: "Node.js & Express.js", logo: "/logos/nodejs.png" },
  { name: "MongoDB", logo: "/logos/mongodb.png" },
  { name: "PostgreSQL", logo: "/logos/postgresql.png" },
  { name: "Sequelize", logo: "/logos/sequelize.png" },
  { name: "HTML5", logo: "/logos/html.png" },
  { name: "CSS3", logo: "/logos/css.png" },
  { name: "React & React Native", logo: "/logos/react.png" },
  { name: "NEXT.JS", logo: "/logos/next.png" },
  { name: "Tailwind", logo: "/logos/tailwind.png" },
  { name: "Bootstrap", logo: "/logos/bootstrap.jpeg" },
  { name: "GitHub", logo: "/logos/github.png" },
  { name: "GitLab", logo: "/logos/gitlab.png" },
  { name: "JWT", logo: "/logos/jwt.png" },
  { name: "Redis", logo: "/logos/redis.png" },
  { name: "Jest", logo: "/logos/jest.png" },
  { name: "Amazon Web Services", logo: "/logos/aws.png" },
  { name: "Firebase", logo: "/logos/firebase.png" },
];

const Skills = () => {
  return (
    <section className="relative overflow-hidden bg-black text-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-white">
          Skills
        </h2>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-lg p-4 transform transition-transform hover:scale-105 w-full aspect-square"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="h-16 md:h-20 lg:h-24 object-contain"
              />
              <p className="mt-2 text-sm font-medium text-gray-800">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
