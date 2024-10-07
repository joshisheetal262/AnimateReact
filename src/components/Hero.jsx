import React from "react";
import { motion } from "framer-motion";

// Typing animation variants for the entire block
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Delay between each letter
    },
  },
};

// Typing animation for individual letters
const letterEffect = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Hero = () => {
  const titleLine1 = "AnimateReact";
  const titleLine2 = "Addictive, Interactive UI Components";
  const subtitle =
    "Instantly Integrate Animated, Responsive UI Elements with React, Tailwind CSS, and Framer Motion—Just Copy & Paste in Two Clicks";

  return (
    <div className="h-screen flex flex-col justify-center items-center p-4">
      <motion.div
        className="text-black text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{
          repeat: Infinity, // Infinite repeat
          repeatType: "loop", // Restart the animation from the beginning
          delayChildren: 3, // Delay before the typing restarts
          Delay: 1,
          ease: "linear", // Delay between loops
        }}
      >
        {/* First Line of Title (AnimateReact) */}
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-4">
          {Array.from(titleLine1).map((letter, index) => (
            <motion.span
              key={index}
              variants={letterEffect}
              transition={{ duration: 0.05 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Line Break and Second Line of Title */}
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-4">
          {Array.from(titleLine2).map((letter, index) => (
            <motion.span
              key={index}
              variants={letterEffect}
              transition={{ duration: 0.05 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle Typing Animation */}
        <motion.h2 className="text-lg md:text-2xl text-black">
          {Array.from(subtitle).map((letter, index) => (
            <motion.span
              key={index}
              variants={letterEffect}
              transition={{ duration: 0.05 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Hero;
