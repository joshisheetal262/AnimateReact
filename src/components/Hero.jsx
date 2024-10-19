import React from "react";
import { motion } from "framer-motion";

// Typing animation variants for the entire block
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterEffect = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Hero = () => {
  const titleLine1 = "AnimateReact";
  const titleLine2 = "Addictive, Interactive UI Components";
  const subtitle1 =
    "Instantly Integrate Animated, Responsive UI Elements with React, ";
  const subtitle2 =
    " Tailwind CSS, and Framer Motion—Just Copy & Paste in Two Clicks";

  return (
    <div className="bg-gradient-to-r from-teal-300 to-blue-500 font-sans w-full h-screen flex flex-col justify-center items-center p-4">
      <motion.div
        className="text-black text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          delayChildren: 3,
          ease: "linear",
        }}
      >
        <motion.h1 className="text-3xl md:text-5xl font-bold mb-2">
          {Array.from(titleLine1).map((letter, index) => (
            <motion.span key={index} variants={letterEffect}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h1 className="text-2xl md:text-4xl font-bold mb-2">
          {Array.from(titleLine2).map((letter, index) => (
            <motion.span key={index} variants={letterEffect}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2 className="text-sm md:text-lg text-black mb-2">
          {Array.from(subtitle1).map((letter, index) => (
            <motion.span key={index} variants={letterEffect}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h2>

        <motion.h2 className="text-sm md:text-lg text-black">
          {Array.from(subtitle2).map((letter, index) => (
            <motion.span key={index} variants={letterEffect}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Hero;
