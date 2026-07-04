import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1E1E1E] text-center px-4">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        {/* LOGO */}
        <div className="grid place-items-center">
          <motion.img
            className="h-20 w-auto md:h-28 lg:h-36"
            src={logo}
            alt="logo"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 3,
              ease: "linear",
            }}
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#E0E0E0] font-serif mt-4">
          AnimateReact
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#EAD196] font-roboto">
          Animated UI Components for
          <span className="text-purple-300 block md:inline my-1 px-2">
            React & Tailwind
          </span>
        </p>
        <p className="text-white text-base md:text-lg lg:text-xl w-[18rem] md:w-[25rem] lg:w-[30rem] mx-auto my-4">
          Addicting, interactive, animated UI components for React, Tailwind
          CSS, Framer motion. Copy & paste into your code with 2 clicks.
        </p>
      </motion.div>

      {/* BUTTON */}
      <motion.button
        className="bg-[#E91E63] text-white px-6 md:px-8 py-2 rounded-full text-base md:text-lg font-medium hover:bg-[#03DAC6] transition-all hover:shadow-black hover:shadow-md mt-6"
        whileHover={{ scale: 1.09 }}
        transition={{ ease: "easeInOut", duration: 0.125 }}
      >
        <Link to="/app" target="_blank">
          Get Started
        </Link>
      </motion.button>
    </div>
  );
};

export default HomePage;
