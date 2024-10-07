import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen top-0 bg-[#1E1E1E] text-center">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        {/* LOGO  */}

        <div className="grid place-items-center">
          <motion.img
            className="h-28 w-auto"
            src={logo}
            alt="logo"
            animate={{ rotate: 360 }} // Rotate the logo 360 degrees
            transition={{
              repeat: Infinity, // Infinite loop
              repeatType: "loop", // Loop the animation
              duration: 3, // Duration of each complete rotation
              ease: "linear", // Smooth continuous rotation
            }}
          />
        </div>

        <h1 className="text-5xl  text-[#E0E0E0] font-serif shadow-md shado mb-6">
          AnimateReact
        </h1>
        <p className="text-4xl font-bold text-[#EAD196] font-roboto">
          Animated UI Components for
          <p className=" text-purple-300 my-1"></p> React & Tailwind
        </p>
        <p className="text-white w-[30rem] my-4">
          Addicting, interactive, animated UI components for React, Tailwind
          CSS, Framer motion. Copy & paste them into your code with 2 clicks.
        </p>
      </motion.div>

      {/* BUTTON  */}

      <motion.button
        className="bg-[#E91E63] text-white px-8 py-2 rounded-full text-lg font-medium hover:bg-[#03DAC6] transition-all hover:shadow-black hover:shadow-md mt-6"
        whileHover={{ scale: 1.09 }}
        transition={{ ease: "easeInOut", duration: 0.125 }}
      >
        <Link to="/app"> Get Started</Link>
      </motion.button>
    </div>
  );
};

export default HomePage;
