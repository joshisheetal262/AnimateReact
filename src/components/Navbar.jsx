import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#1E1E1E] w-auto">
      <div className="container mx-auto flex justify-around items-center ">
        <div className="flex items-center">
          {/* Logo */}
          <img className="h-16 w-auto" src={logo} alt="logo" />
          <div className="text-[#FFFFFF] text-xl font-bold">AnimateReact</div>
        </div>

        {/* Search Bar */}

        <div className="w-full max-w-md ">
          <input
            type="text"
            className="w-full p-4 rounded bg-[#FFFFFF] text-black text-md h-8 placeholder-black"
            placeholder="Search..."
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
