import PropTypes from "prop-types"; // Import PropTypes for validation
import { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaRegListAlt,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { PiCubeFocusDuotone } from "react-icons/pi";
import { TbCube3dSphere } from "react-icons/tb";
import logo from "../images/logo.png";

const cardCode = `
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { FaInstagram, FaTwitter, FaYoutube, FaRegListAlt } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { PiCubeFocusDuotone } from 'react-icons/pi';
import { TbCube3dSphere } from 'react-icons/tb';

const DribbleFooter = () => {
  const solutions = [
    {
      label: 'Life Cycle Analysis',
      description: 'Fusce sed orci sit amet nisi',
      icon: <FaRegListAlt />,
    },
    {
      label: 'Corporate Inventory',
      description: 'Fusce sed orci sit amet nisi',
      icon: <PiCubeFocusDuotone />,
    },
    {
      label: 'Scope 3 Decarbonaization',
      description: 'Fusce sed orci sit amet nisi',
      icon: <TbCube3dSphere />,
    },
  ];

  const resources = [
    {
      label: 'Success Stories',
      description: 'Our Customers in action',
    },
    {
      label: 'Guides',
      description: 'Whitepapers and more',
    },
    {
      label: 'Webinars',
      description: 'Live and on-demand',
    },
  ];

  return (
    <div className="bg-gray-200 p-10">
      {/* Newsletter Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-5 mb-8">
        <h2 className="text-lg">Sign up for our newsletter</h2>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-blackAlpha-100 border-0 focus:bg-whiteAlpha-300 p-2"
          />
          <button
            className="bg-green-400 text-white hover:bg-green-600 p-2 "
            aria-label="Subscribe"
          >
            <BiMailSend  size={24}/>
          </button>
        </div>
      </div>
      <div className="border-b border-gray-400 mb-8" />
      
      {/* Main Content */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mb-12">
        <div>
          <h2 className="text-xl">
            THE TIME IS{' '}
            <span className="text-blue-400">NOW</span>
          </h2>
          <h2 className="text-xl">THE PATH IS FORWARD.</h2>
        </div>
        <div className="flex items-center cursor-pointer" href="#">
          <img
            className="h-8 md:h-9"
            src="/assets/site/logo.png"
            alt="Logo"
          />
          <span className="font-bold text-xl ml-2">Animate React</span>
        </div>
      </div>

      {/* Footer Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div className="text-left">
          <h3 className="text-xs text-gray-500">GET IN TOUCH</h3>
          <div className="flex items-center">
            <FaRegListAlt className="mr-2" />
            <span>joshisheetal262@gmail.com</span>
          </div>
          <h3 className="text-xs text-gray-500 mt-4">FOLLOW US</h3>
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

        {/* Solutions Section */}
        <div className="text-left">
          <h3 className="text-xs text-gray-500">SOLUTIONS</h3>
          {solutions.map((solution, index) => (
            <div className="flex items-start gap-2" key={index}>
              {solution.icon}
              <div>
                <p>{solution.label}</p>
                <p className="text-xs text-gray-500">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Resources Section */}
        <div className="text-left">
          <h3 className="text-xs text-gray-500">RESOURCES</h3>
          {resources.map((resource, index) => (
            <div key={index}>
              <p>{resource.label}</p>
              <p className="text-xs text-gray-500">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// SocialButton Component
const SocialButton = ({ children, label, href }) => {
  return (
    <a
      href={href}
      className="bg-blackAlpha-100 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 hover:bg-blackAlpha-200 hover:text-blue-400"
      aria-label={label}
    >
      {children}
    </a>
  );
};

// PropTypes validation for SocialButton
SocialButton.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
  label: PropTypes.string.isRequired,   // Validate label prop
  href: PropTypes.string.isRequired,    // Validate href prop
};

export default DribbleFooter;
`;

const DribbleFooter = () => {
  const [isCopied, setIsCopied] = useState(false);

  const solutions = [
    {
      label: "Life Cycle Analysis",
      description: "Live and on-demand",
      icon: <FaRegListAlt />,
    },
    {
      label: "Corporate Inventory",
      description: "Whitepapers and more",
      icon: <PiCubeFocusDuotone />,
    },
    {
      label: "Scope 3 Decarbonization",
      description: "Our Customers in action",
      icon: <TbCube3dSphere />,
    },
  ];

  const resources = [
    {
      label: "Success Stories",
      description: "Our Customers in action",
    },
    {
      label: "Guides",
      description: "Whitepapers and more",
    },
    {
      label: "Webinars",
      description: "Live and on-demand",
    },
  ];
  // Function to copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold mt-5">Footer Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        Apps Link
      </p>
      <div className=" w-[68rem] h-[27rem] m-0 p-0">
        <div className="w-full bg-gray-200 px-8 py-10">
          {/* Newsletter Section */}
          <div className="flex flex-col md:w-full sm:flex-row justify-between items-center gap-5 mb-8">
            <h2 className="text-lg w-full sm:w-auto">
              Sign up for our newsletter
            </h2>
            <div className="flex items-center w-full sm:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-auto bg-blackAlpha-100 border-0 focus:bg-whiteAlpha-300 p-2"
              />
              <button
                className="bg-green-400 text-white hover:bg-green-600 p-2 ml-2"
                aria-label="Subscribe"
              >
                <BiMailSend size={24} />
              </button>
            </div>
          </div>
          <div className="border-b border-gray-400 mb-8 w-full" />

          {/* Main Content */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mb-12 w-full">
            <div className="w-full sm:w-auto">
              <h2 className="text-xl">
                THE TIME IS <span className="text-blue-400">NOW</span>
              </h2>
              <h2 className="text-xl">THE PATH IS FORWARD.</h2>
            </div>
            <div className="flex items-center cursor-pointer w-full sm:w-auto">
              {/* LOGO  */}
              <img className="h-16 md:h-9" src={logo} alt="Logo" />
              <span className="font-bold text-xl ml-2">Animate React</span>
            </div>
          </div>

          {/* Footer Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {/* Contact Section */}
            <div className="text-left w-full">
              <h3 className="text-xs text-gray-500">GET IN TOUCH</h3>
              <div className="flex items-center">
                <FaRegListAlt className="mr-2" />
                <span>joshisheetal262@gmail.com</span>
              </div>
              <h3 className="text-xs text-gray-500 mt-4">FOLLOW US</h3>
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

            {/* Solutions Section */}
            <div className="text-left w-full ">
              <h3 className="text-xs text-gray-500 p-2">SOLUTIONS</h3>
              {solutions.map((solution, index) => (
                <div className="flex items-start gap-2" key={index}>
                  {solution.icon}
                  <div>
                    <p>{solution.label}</p>
                    <p className="text-xs text-gray-500">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resources Section */}
            <div className="text-left w-full">
              <h3 className="text-xs text-gray-500">RESOURCES</h3>
              {resources.map((resource, index) => (
                <div key={index}>
                  <p>{resource.label}</p>
                  <p className="text-xs text-gray-500">
                    {resource.description}
                  </p>
                </div>
              ))}
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

// SocialButton Component
const SocialButton = ({ children, label, href }) => (
  <a
    href={href}
    className="bg-blackAlpha-100 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 hover:bg-blackAlpha-200 hover:text-blue-400"
    aria-label={label}
  >
    {children}
  </a>
);

// PropTypes validation for SocialButton
SocialButton.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
  label: PropTypes.string.isRequired, // Validate label prop
  href: PropTypes.string.isRequired, // Validate href prop
};

export default DribbleFooter;
