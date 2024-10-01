import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#2E073F] p-4 w-auto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#EBD3F8] text-2xl font-bold">MyLogo</div>

        {/* Search Bar */}
        <div className="w-full max-w-md ml-8">
          <input
            type="text"
            className="w-full p-2 rounded-md bg-[#7A1CAC] text-white placeholder-[#EBD3F8] outline-none focus:ring-2 focus:ring-[#AD49E1]"
            placeholder="Search..."
          />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 ml-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="text-[#AD49E1] hover:text-[#EBD3F8]"
              size={24}
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-[#AD49E1] hover:text-[#EBD3F8]"
              size={24}
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="text-[#AD49E1] hover:text-[#EBD3F8]"
              size={24}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
