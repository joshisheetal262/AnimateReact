import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`h-screen bg-[#2E073F] text-white w-48 p-6 pt-16  transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Sidebar Content */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          <Link to="/Navbar" className="hover:bg-[#7A1CAC] p-2 rounded-md">
            Navbar
          </Link>
          <Link to="/Cards" className="hover:bg-[#7A1CAC] p-2 rounded-md">
            Cards
          </Link>
          <Link to="/Buttons" className="hover:bg-[#7A1CAC] p-2 rounded-md">
            Buttons
          </Link>
          <Link to="/Forms" className="hover:bg-[#7A1CAC] p-2 rounded-md">
            Forms
          </Link>
        </div>
      </div>

      {/* Sidebar Toggle Button for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-[#AD49E1] text-white p-2 rounded-md mb-4 fixed top-4 left-4 z-50"
      >
        {isOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>
    </div>
  );
};

export default Sidebar;
