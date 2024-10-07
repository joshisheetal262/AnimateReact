import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      {/* Sidebar */}
      <div className="h-screen bg-white text-[#272727] w-[13rem] p-6 pt-8 overflow-y-scroll">
        {/* Sidebar Content */}
        <div className="flex flex-col space-y-4">
          <span className="text-2xl font-bold mr-4">Components</span>

          <Link
            to="/Navbar"
            className="hover:bg-[#03DAC6] font-semibold p-1 rounded-md"
          >
            Navbar
          </Link>
          <Link
            to="/Cards"
            className="hover:bg-[#03DAC6] font-semibold p-1 rounded-md"
          >
            Cards
          </Link>
          <Link
            to="/Buttons"
            className="hover:bg-[#03DAC6] font-semibold p-1 rounded-md"
          >
            Buttons
          </Link>
          <Link
            to="/Inputs"
            className="hover:bg-[#03DAC6] font-semibold p-1 rounded-md"
          >
            Inputs
          </Link>
          <Link
            to="/Calendar"
            className="hover:bg-[#03DAC6] font-semibold p-1 rounded-md"
          >
            Calendar
          </Link>
          <Link
            to="/Carousels"
            className="hover:bg-[#03DAC6] font-semibold p-1 rounded-md"
          >
            Carousels
          </Link>
          <Link
            to="/Tabs"
            className="hover:bg-[#03DAC6] font-semibold p-1 rounded-md"
          >
            Tabs
          </Link>
          <Link
            to="/Text"
            className="hover:bg-[#03DAC6] font-semibold p-1 rounded-md"
          >
            Text
          </Link>
          <Link
            to="/Toggles"
            className="hover:bg-[#03DAC6] font-semibold p-1 rounded-md"
          >
            Toggles
          </Link>
          <Link
            to="/Footer"
            className="hover:bg-[#03DAC6] font-semibold p-1 rounded-md"
          >
            Footer
          </Link>
          <Link
            to="/Forms"
            className="hover:bg-[#03DAC6] font-semibold p-1 rounded-md"
          >
            Forms
          </Link>
          <Link
            to="/CustomCursor"
            className="hover:bg-[#03DAC6] p-1 rounded-md"
          >
            Custom Cursor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
