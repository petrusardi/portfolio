// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "react-typewriter-effect";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center font-roboto">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#2b5876] to-[#4e4376]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <div className="relative z-10 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <div className="text-2xl">
          <Typewriter
            text="I'm a Finance Professional Turned Full-Stack Developer Ready to Drive Innovation in Tech."
            cursorColor="#ffffff"
            typeSpeed={50}
            startDelay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
