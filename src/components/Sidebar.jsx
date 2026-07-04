import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Toggle state for sidebar

  return (
    <div>
      {/* Hamburger button for small devices */}
      <div className="lg:hidden md:hidden p-4">
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="text-3xl focus:outline-none"
        >
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Sidebar container */}
      <div
        className={`sticky top-0 h-screen  bg-white text-[#272727] w-[12rem] md:w-[14rem] lg:w-[15rem] border-r-2 border-black p-6 pt-8 no-scrollbar overflow-y-auto transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`} // Sidebar slides in/out on small devices
      >
        <div className="flex flex-col space-y-8">
          <span className="text-2xl md:text-3xl font-bold">Components</span>

          {/* Links */}
          {[
            "Navbar",
            "Cards",
            "Buttons",
            "Text",
            "Footer",
            "Carousels",
            "Toggles",
            // "Tabs",
            // "Forms",
            // "Calendar",
            // "Inputs",
            // "CustomCursor",
          ].map((item, index) => (
            <Link
              to={`/${item.toLowerCase()}`}
              key={index}
              className="hover:bg-[#03DAC6] border-2 border-transparent hover:border-black text-lg md:text-xl font-semibold p-1 rounded-md"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay for when sidebar is open on small devices */}
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden lg:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
