// src/components/Hero.js
import React from "react";
import Typewriter from "react-typewriter-effect";
import ThreeBackground from "./ThreeBackground";

const Hero = () => {
  return (
    <section className="relative h-screen flex overflow-hidden items-center justify-center text-center font-roboto bg-black">
      <ThreeBackground /> {/* Animasi di latar belakang */}
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
