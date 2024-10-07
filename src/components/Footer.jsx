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
      <div className="container mx-auto flex justify-around ">
        {/* RIGHTS-RESERVED */}
        <div className="flex flex-row items-center ">
          <img className="h-16 w-auto m-4" src={logo} alt="logo" />
          {/* Copyright */}
          <div className="text-base text-gray-400">
            <p className="text-white">Designed by Sheetal Joshi</p>
            <p>© 2024 Sheetal Joshi. All rights reserved.</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col text-sm space-y-4 m-2">
          <h1 className="ml-2 text-base font-bold">Socials</h1>
          <a
            className="flex items-center" // Add items-center to align vertically
            href="mailto:sheetaljoshi262@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope
              className="mx-2 text-[#FFFFFF] hover:text-[#03DAC6] "
              size={18}
            />
            <span className="text-white hover:text-[#03DAC6]">Email</span>
          </a>

          <a
            className="flex items-center" // Add items-center to align vertically
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="mx-2 text-[#FFFFFF] hover:text-[#03DAC6]"
              size={18}
            />
            <span className="text-white hover:text-[#03DAC6]">LinkedIn</span>
          </a>

          <a
            className="flex items-center" // Add items-center to align vertically
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="mx-2 text-[#FFFFFF] hover:text-[#03DAC6]"
              size={18}
            />
            <span className="text-white hover:text-[#03DAC6]">GitHub</span>
          </a>
        </div>

        {/* SITES */}
        <div className="flex flex-col text-sm space-y-4 m-2">
          <h1 className="text-base font-bold">Sites</h1>
          <Link
            to="/"
            target="_blank"
            className="text-white hover:text-[#03DAC6]"
          >
            Home
          </Link>
          <Link
            to="/App"
            target="_blank"
            className="text-white hover:text-[#03DAC6]"
          >
            Components
          </Link>
          <Link to="/App" className="text-white hover:text-[#03DAC6]">
            About Me
          </Link>
        </div>

        {/* TEXT  */}

        <div className="w-[30rem] h-auto flex text-base m-2 items-center">
          <p>
            This project is a{" "}
            <span>
              <img
                className="inline mx-1 h-5 w-auto"
                src={react}
                alt="React logo"
              />
              React styling library using{" "}
              <img
                className="inline mx-1 h-4 w-auto"
                src={framerMotion}
                alt="Framer Motion logo"
              />
              Tailwind CSS and{" "}
              <img
                className="inline mx-1 h-3 w-auto"
                src={tailwind}
                alt="Tailwind logo"
              />
              Framer Motion, enabling easy creation of responsive and animated
              user interfaces.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
