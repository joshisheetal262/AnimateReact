import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      {/* Sidebar */}
      <div className="sticky top-0 h-screen bg-white text-[#272727] w-[14rem] border-r-2 border-black p-6 pt-8 no-scrollbar overflow-auto">
        {/* Sidebar Content */}
        <div className="flex flex-col space-y-4">
          <span className="text-3xl font-bold mr-4">Components</span>

          <Link
            to="/Navbar"
            className="hover:bg-[#03DAC6] border-2 border-transparent hover:border-black text-xl font-semibold p-1 rounded-md"
          >
            Navbar
          </Link>
          <a
            href="/Card"
            target="_blank" // This will open the link in a new tab
            rel="noopener noreferrer" // Security measure for external links
            className="hover:bg-[#03DAC6] border-2 border-transparent hover:border-black text-xl font-semibold p-1 rounded-md"
          >
            Cards
          </a>
          <Link
            to="/Buttons"
            className="hover:bg-[#03DAC6] border-2 border-transparent hover:border-black text-xl font-semibold p-1 rounded-md"
          >
            Navbar
          </Link>
          <Link
            to="/Inputs"
            className="hover:bg-[#03DAC6] border-2 border-transparent hover:border-black text-xl  font-semibold p-1 rounded-md"
          >
            Inputs
          </Link>
          <Link
            to="/Calendar"
            className="hover:bg-[#03DAC6] border-2 border-transparent hover:border-black text-xl  font-semibold p-1 rounded-md"
          >
            Calendar
          </Link>
          <Link
            to="/Carousels"
            className="hover:bg-[#03DAC6] border-2 border-transparent hover:border-black text-xl  font-semibold p-1 rounded-md"
          >
            Carousels
          </Link>
          <Link
            to="/Tabs"
            className="hover:bg-[#03DAC6] border-2 border-transparent hover:border-black  text-xl font-semibold p-1 rounded-md"
          >
            Tabs
          </Link>
          <Link
            to="/Text"
            className="hover:bg-[#03DAC6] border-2 border-transparent hover:border-black text-xl  font-semibold p-1 rounded-md"
          >
            Text
          </Link>
          <Link
            to="/Toggles"
            className="hover:bg-[#03DAC6] border-2 border-transparent hover:border-black text-xl  font-semibold p-1 rounded-md"
          >
            Toggles
          </Link>
          <Link
            to="/Footer"
            className="hover:bg-[#03DAC6] border-2 border-transparent hover:border-black text-xl  font-semibold p-1 rounded-md"
          >
            Footer
          </Link>
          <Link
            to="/Forms"
            className="hover:bg-[#03DAC6] border-2 border-transparent hover:border-black text-xl  font-semibold p-1 rounded-md"
          >
            Forms
          </Link>
          <Link
            to="/CustomCursor"
            className="hover:bg-[#03DAC6] border-2 border-transparent hover:border-black text-xl  font-semibold p-1 rounded-md"
          >
            Custom Cursor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
