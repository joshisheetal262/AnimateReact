import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bottom-0 bg-[#2E073F] text-[#EBD3F8] p-6 w-screen">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        {/* Logo and Company Introduction */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="text-[#EBD3F8] text-2xl font-bold mb-2 md:mb-0 md:mr-4">
            MyLogo
          </div>
          <p className="text-[#EBD3F8]">
            We are a leading company providing top-notch web solutions for all
            your business needs.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-left">
          <p>© 2024 Sheetal Joshi. All rights reserved.</p>
          <p>Designed by Sheetal Joshi</p>
        </div>

        {/* Email Contact */}
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-[#AD49E1]" size={24} />
          <a
            href="mailto:info@company.com"
            className="text-[#EBD3F8] hover:underline"
          >
            info@company.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
