// src/components/About.js
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const transcript = (
    <a
      href="https://drive.google.com/file/d/18QotHjVMZnzdAcXN_wz3ujEPlZzntWvK/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 hover:underline"
    >
      Transcript
    </a>
  );
  const certifiedJS = (
    <a
      href="https://drive.google.com/file/d/1f1aOQkbxCRKqDEVhiYE9DfSDUxNQHs1e/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 hover:underline"
    >
      Certificate
    </a>
  );
  const certifiedDS = (
    <a
      href="https://drive.google.com/drive/folders/16bgMI9zBJWg---2dV1M_NNu-ZKYVti7p?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 hover:underline"
    >
      ( Certificate )
    </a>
  );
  return (
    <section className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="Petrus_Arditama.jpg"
              alt="Petrus Arditama"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <div className="lg:w-1/2 lg:pl-12">
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Hi, I'm Petrus Arditama, a passionate Full-Stack Developer with
              expertise in creating dynamic and responsive web applications.
              Transitioned from a successful career in finance to embrace a
              lifelong dream of programming. Completed an intensive Hacktiv8
              bootcamp, emerging as a skilled full-stack developer. I have a
              strong background in JavaScript, React, Node.js, and more. My goal
              is to build scalable and efficient applications that provide
              excellent user experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h3 className="text-2xl font-bold mb-4">Educations</h3>
              <ul className="list-disc list-inside space-y-2">
                <li className="font-bold">
                  Hacktiv8 Indonesia ( February 2024 – June 2024 )
                </li>
                <h2>
                  Full Stack Javascript Immersive Program ( {transcript} &{" "}
                  {certifiedJS} )
                </h2>
                <li className="font-bold">
                  Algoritma Data Science School ( July 2020 – October 2020 )
                </li>
                <h2>Full Stack Data Science Program {certifiedDS}</h2>
                <li className="font-bold">
                  Padjadjaran University ( June 2015 – December 2019 )
                </li>
                <h2>Bachelor of Geophysics ( GPA 3.06/4.00 )</h2>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              <h3 className="text-2xl font-bold mb-4 mt-4">Work Experiences</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  FIFGROUP member of ASTRA as Area Marketing Support Officer,
                  <h2>August 2021 – January 2024</h2>
                </li>
                <li>
                  FIFGROUP member of ASTRA as Management Development Program,
                  <h2>September 2020 – August 2021</h2>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
