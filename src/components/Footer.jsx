import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import react from "../images/react.png";
import framerMotion from "../images/framerMotion.png";
import tailwind from "../images/tailwind.png";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-[#E0E0E0] p-4">
      <div className="container mx-auto flex flex-col md:flex-row md:w-screen md:space-x-4 justify-around items-center space-y-4 md:space-y-0">
        <div className="flex items-center">
          <img className="h-12 w-auto md:h-16 m-2" src={logo} alt="logo" />
          <div className="text-base text-gray-400">
            <p className="text-white">Designed by Sheetal Joshi</p>
            <p>© 2024 Sheetal Joshi. All rights reserved.</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-sm">
          <h1 className="text-base font-bold">Socials</h1>
          <a
            href="mailto:sheetaljoshi262@gmail.com"
            className="flex items-center mt-2"
          >
            <FaEnvelope
              className="mx-2 text-white hover:text-[#03DAC6]"
              size={18}
            />
            <span className="text-white hover:text-[#03DAC6]">Email</span>
          </a>
          <a href="https://linkedin.com" className="flex items-center mt-2">
            <FaLinkedin
              className="mx-2 text-white hover:text-[#03DAC6]"
              size={18}
            />
            <span className="text-white hover:text-[#03DAC6]">LinkedIn</span>
          </a>
          <a href="https://github.com" className="flex items-center mt-2">
            <FaGithub
              className="mx-2 text-white hover:text-[#03DAC6]"
              size={18}
            />
            <span className="text-white hover:text-[#03DAC6]">GitHub</span>
          </a>
        </div>

        <div className="text-sm text-center md:text-left">
          <h1 className="text-base font-bold">Sites</h1>
          <Link to="/" className="text-white hover:text-[#03DAC6] mt-2 block">
            Home
          </Link>
          <Link
            to="/App"
            className="text-white hover:text-[#03DAC6] mt-2 block"
          >
            Components
          </Link>
          <Link
            to="/AboutMe"
            className="text-white hover:text-[#03DAC6] mt-2 block"
          >
            About Me
          </Link>
        </div>

        <div className="w-[18rem] md:w-[30rem] text-sm text-center md:text-left">
          <p>
            This project is a{" "}
            <img className="inline h-5 mx-1" src={react} alt="React" />
            React styling library using{" "}
            <img
              className="inline h-4 mx-1"
              src={framerMotion}
              alt="Framer Motion"
            />
            Tailwind CSS and{" "}
            <img className="inline h-3 mx-1" src={tailwind} alt="Tailwind" />
            Framer Motion for responsive, animated UIs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
