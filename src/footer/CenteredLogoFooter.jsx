import PropTypes from "prop-types"; // Import PropTypes
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import logo from "../images/logo.png";

// SocialButton component
const SocialButton = ({ children, label, href }) => {
  return (
    <a
      href={href}
      className=" rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 hover:bg-gray-300"
      aria-label={label}
    >
      {children}
    </a>
  );
};

// Add prop types validation
SocialButton.propTypes = {
  children: PropTypes.node.isRequired, // Require children to be a node
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
const cardCode = `
import PropTypes from "prop-types"; // Import PropTypes
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../images/logo.png";

// SocialButton component
const SocialButton = ({ children, label, href }) => {
  return (
    <a
      href={href}
      className=" rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 hover:bg-gray-300"
      aria-label={label}
    >
      {children}
    </a>
  );
};

// Add prop types validation
SocialButton.propTypes = {
  children: PropTypes.node.isRequired, // Require children to be a node
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

// Main Footer Component
const CenterLogoFooter = () => {
  return (
    <div className="w-full bg-gray-200 p-5 text-gray-700">
      <div className="max-w-6xl mx-auto py-4 flex flex-col items-center space-y-4">
        <a
          href="#"
          className="flex items-center cursor-pointer hover:text-blue-700"
        >
          <img className="h-8 object-contain" src={logo} alt="Logo" />
          <span className="whitespace-nowrap font-bold text-xl">
            Animate React
          </span>
        </a>
        <div className="flex space-x-6">
          {Categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className="text-gray-700 hover:text-blue-400"
            >
              {category.label}
            </a>
          ))}
        </div>
      </div>

      <div className="">
        <div className="max-w-6xl mx-auto py-4 flex flex-col md:flex-row justify-between items-center">
          <span>© 2024 Sheetal Joshi. All rights reserved</span>
          <div className="flex space-x-6">
            <SocialButton label="Twitter" href="#">
              <FaTwitter />
            </SocialButton>
            <SocialButton label="YouTube" href="#">
              <FaYoutube />
            </SocialButton>
            <SocialButton label="Instagram" href="#">
              <FaInstagram />
            </SocialButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const Categories = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];
export default CenterLogoFooter;

`;


// Main Footer Component
const CenterLogoFooter = () => {
  const [isCopied, setIsCopied] = useState(false);

  // Function to copy code to clipboard
const copyToClipboard = () => {
  navigator.clipboard.writeText(cardCode.trim());
  setIsCopied(true);
  setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
};
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Footer Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        Center Element Footer
      </p>
      <div className="bg-gray-200 flex items-center justify-center w-full h-[16rem] p-6">
        <div className="w-full bg-gray-200 p-5 text-gray-700">
          <div className="max-w-6xl mx-auto py-4 flex flex-col items-center space-y-4">
            <a
              href="#"
              className="flex items-center cursor-pointer hover:text-blue-700"
            >
              <img className="h-8 object-contain" src={logo} alt="Logo" />
              <span className="whitespace-nowrap font-bold text-xl">
                Animate React
              </span>
            </a>
            <div className="flex space-x-6">
              {Categories.map((category, index) => (
                <a
                  key={index}
                  href={category.href}
                  className="text-gray-700 hover:text-blue-400"
                >
                  {category.label}
                </a>
              ))}
            </div>
          </div>

          <div className="">
            <div className="max-w-6xl mx-auto py-4 flex flex-col md:flex-row justify-between items-center">
              <span>© 2024 Sheetal Joshi. All rights reserved</span>
              <div className="flex space-x-6">
                <SocialButton label="Twitter" href="#">
                  <FaTwitter />
                </SocialButton>
                <SocialButton label="YouTube" href="#">
                  <FaYoutube />
                </SocialButton>
                <SocialButton label="Instagram" href="#">
                  <FaInstagram />
                </SocialButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card Code Section */}
      <h2 className="text-2xl font-bold static mb-4">Code</h2>
      <div className=" h-[20rem] overflow-scroll">
        <div className="relative bg-black text-white p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm whitespace-pre-wrap">{cardCode.trim()}</pre>
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 bg-blue-500 text-white py-1 px-3 rounded-md text-sm"
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Categories = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];
export default CenterLogoFooter;
