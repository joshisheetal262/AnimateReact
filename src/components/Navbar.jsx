import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#1E1E1E] ">
      <div className="container mx-auto flex flex-col md:flex-row md:space-x-2 justify-between items-center p-4">
        <div className="flex items-center">
          {/* Logo */}
          <img className="h-12 w-auto md:h-16" src={logo} alt="logo" />
          <div className="text-[#FFFFFF] text-xl md:text-2xl font-serif font-bold ml-2">
            AnimateReact
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-md mt-4 md:mt-0 md:w-[22rem] sm:w-full md:space-x-4">
          <input
            type="text"
            className="w-full p-2 rounded bg-[#FFFFFF] text-black text-md h-8 placeholder-black"
            placeholder="Search..."
          />
        </div>

        <Link
          to="/CustomCursor"
          className="hover:text-[#03DAC6] text-white text-lg md:text-xl font-bold mt-4 md:mt-0 p-1"
        >
          About Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
