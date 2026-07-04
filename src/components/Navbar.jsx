import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample list of components to search through
  const components = [
    { name: "Navbar", link: "/Navbar" },
    { name: "Footer", link: "/Footer" },
    { name: "Button", link: "/Buttons" },
    { name: "Card", link: "/Cards" },
    { name: "Carousel", link: "/Carousel" },
    { name: "Text", link: "/Texts" },
    { name: "Toggle", link: "/Toggle" },
    // Add more components as needed
  ];

  // Handle input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter components based on search term
  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 rounded bg-[#FFFFFF] text-black text-md h-8 placeholder-black"
            placeholder="Search components..."
          />
          {/* Display search results */}
          {searchTerm && (
            <div className="absolute bg-white shadow-lg rounded mt-2 z-10">
              {filteredComponents.length > 0 ? (
                filteredComponents.map((component, index) => (
                  <Link
                    key={index}
                    to={component.link}
                    className="block p-2 text-black hover:bg-gray-200"
                  >
                    {component.name}
                  </Link>
                ))
              ) : (
                <div className="p-2 text-black">No results found</div>
              )}
            </div>
          )}
        </div>

        {/* <Link
          to="/AboutMe"
          className="hover:text-[#03DAC6] text-white text-lg md:text-xl font-bold mt-4 md:mt-0 p-1"
        >
          About Me
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
