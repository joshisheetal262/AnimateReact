import { useRef, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { motion } from "framer-motion";

const cardCode = `
import  { useRef, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { motion } from 'framer-motion';

export default function HoverSlideTab() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
  });

  const [isHovered, setIsHovered] = useState(false); // Track hover state

  return (
    <div className="flex justify-center w-full p-20">
      <ul
        className="relative flex border-2 border-black rounded-full bg-white p-1"
        onMouseLeave={() => {
          setIsHovered(false); // Reset hover state
        }}
      >
        <ChildTab setPosition={setPosition} setIsHovered={setIsHovered}>Home</ChildTab>
        <ChildTab setPosition={setPosition} setIsHovered={setIsHovered}>Pricing</ChildTab>
        <ChildTab setPosition={setPosition} setIsHovered={setIsHovered}>Features</ChildTab>
        <ChildTab setPosition={setPosition} setIsHovered={setIsHovered}>Docs</ChildTab>
        <ChildTab setPosition={setPosition} setIsHovered={setIsHovered}>Blog</ChildTab>
        <Cursor position={position} isHovered={isHovered} />
      </ul>
    </div>
  );
}

const ChildTab = ({ children, setPosition, setIsHovered }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { offsetLeft, offsetWidth } = ref.current;

        setPosition({
          left: offsetLeft,
          width: offsetWidth,
        });
        setIsHovered(true); // Set hover state to true
      }}
      className="relative z-10 py-3 px-5 text-xs uppercase text-white cursor-pointer mix-blend-difference transition-colors duration-200 ease-in-out hover:bg-black"
    >
      {children}
    </li>
  );
};

// Add prop types for ChildTab
ChildTab.propTypes = {
  children: PropTypes.node.isRequired,
  setPosition: PropTypes.func.isRequired,
  setIsHovered: PropTypes.func.isRequired, // Add prop types for setIsHovered
};

const Cursor = ({ position, isHovered }) => {
  return (
    <motion.li
      className="absolute rounded-full bg-black"
      initial={{ opacity: 0, width: 0 }}
      animate={{
        left: position.left,
        width: position.width,
        opacity: isHovered ? 1 : 0, // Change opacity based on hover state
        transition: {
          duration: 0.3, // Duration of the transition
          ease: 'easeInOut', // Easing function for smooth animation
        },
      }}
      style={{
        height: '36px', // Adjust height as needed
      }}
    />
  );
};

// Add prop types for Cursor
Cursor.propTypes = {
  position: PropTypes.shape({
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  isHovered: PropTypes.bool.isRequired, // Add prop type for isHovered
};
`;

const HoverSlideTab = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
  });

  // Function to copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  const [isHovered, setIsHovered] = useState(false); // Track hover state

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Navbar Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        Hover Slide Tab
      </p>
      <div className="bg-gray-200 flex justify-center w-[68rem] h-[16rem] shadow-sm shadow-black p-6">
        <div className="flex justify-center p-20">
          <ul
            className="relative flex border-2 border-black rounded-full bg-white p-1"
            onMouseLeave={() => {
              setIsHovered(false); // Reset hover state
            }}
          >
            <ChildTab setPosition={setPosition} setIsHovered={setIsHovered}>
              Home
            </ChildTab>
            <ChildTab setPosition={setPosition} setIsHovered={setIsHovered}>
              Pricing
            </ChildTab>
            <ChildTab setPosition={setPosition} setIsHovered={setIsHovered}>
              Features
            </ChildTab>
            <ChildTab setPosition={setPosition} setIsHovered={setIsHovered}>
              Docs
            </ChildTab>
            <ChildTab setPosition={setPosition} setIsHovered={setIsHovered}>
              Blog
            </ChildTab>
            <Cursor position={position} isHovered={isHovered} />
          </ul>
        </div>
      </div>
      {/* Card Code Section */}
      <h2 className="text-2xl font-bold static mb-4">Code</h2>
      <div className="relative">
        <div className="h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg">
          <pre className="text-sm whitespace-pre-wrap">{cardCode.trim()}</pre>
        </div>
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2"
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

const ChildTab = ({ children, setPosition, setIsHovered }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { offsetLeft, offsetWidth } = ref.current;

        setPosition({
          left: offsetLeft,
          width: offsetWidth,
        });
        setIsHovered(true); // Set hover state to true
      }}
      className="relative z-10 py-3 px-5 text-xs uppercase text-white cursor-pointer mix-blend-difference transition-colors duration-200 ease-in-out hover:bg-black"
    >
      {children}
    </li>
  );
};

// Add prop types for ChildTab
ChildTab.propTypes = {
  children: PropTypes.node.isRequired,
  setPosition: PropTypes.func.isRequired,
  setIsHovered: PropTypes.func.isRequired, // Add prop types for setIsHovered
};

const Cursor = ({ position, isHovered }) => {
  return (
    <motion.li
      className="absolute rounded-full bg-black"
      initial={{ opacity: 0, width: 0 }}
      animate={{
        left: position.left,
        width: position.width,
        opacity: isHovered ? 1 : 0, // Change opacity based on hover state
        transition: {
          duration: 0.3, // Duration of the transition
          ease: "easeInOut", // Easing function for smooth animation
        },
      }}
      style={{
        height: "36px", // Adjust height as needed
      }}
    />
  );
};

// Add prop types for Cursor
Cursor.propTypes = {
  position: PropTypes.shape({
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  isHovered: PropTypes.bool.isRequired, // Add prop type for isHovered
};
export default HoverSlideTab;
