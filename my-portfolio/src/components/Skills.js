// src/components/Skills.js
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 95 },
  { name: "Node.js & Express.js", level: 95 },
  { name: "MongoDB & PostgreSQL", level: 92 },
  { name: "React & React Native", level: 83 },
  { name: "HTML5 & CSS3", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Git & GitHub", level: 90 },
  { name: "Cloud Deployment", level: 100 },
  { name: "TypeScript", level: 72 },
  { name: "Sequelize", level: 86 },
  { name: "Redis", level: 100 },
  { name: "MVC", level: 100 },
];

const Skills = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-600">
          Skills
        </h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-7">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="text-center bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">
                {skill.name}
              </h3>
              <motion.div
                className="w-full rounded-full h-6 relative overflow-hidden"
                style={{
                  backgroundColor: "#D1D5DB",
                }}
              >
                <motion.div
                  className="h-6 rounded-full absolute left-0 top-0"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.level >= 90 ? "#6EE7B7" : "#2575fc",
                  }}
                />
              </motion.div>
              <p className="text-gray-600 mt-3 font-medium">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
