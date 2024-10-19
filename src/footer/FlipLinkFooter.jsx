import { useState } from "react";
import PropTypes from "prop-types";
import logo from "../images/logo.png";

const cardCode = `
import { useState } from "react";
import PropTypes from "prop-types";
// import logo from "../images/logo.png";

export default function FlipLinkFooter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white border-b w-full border-gray-200 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src={logo} alt="logo" className="h-12 ml-4" />
          <div className="hidden md:flex ml-10">
            <DesktopNav />
          </div>
        </div>
        <AuthButtons className="hidden md:flex" />
        <button
          className="block md:hidden text-gray-700"
          onClick={toggleDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white p-4 md:hidden">
          <button className="absolute top-4 right-4" onClick={toggleDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="h-full flex flex-col mt-14">
            <MobileNav />
          </div>
        </div>
      )}
    </div>
  );
}

const DesktopNav = () => {
  return (
    <div className="flex space-x-6">
      {NAV_ITEMS.map((navItem) => (
        <div key={navItem.label}>
          <HoverLinks href={navItem.href}>{navItem.label}</HoverLinks>
        </div>
      ))}
    </div>
  );
};

const MobileNav = () => {
  return (
    <div className="bg-white p-4 h-full flex flex-col space-y-6">
      {NAV_ITEMS.map((navItem) => (
        <HoverLinks key={navItem.label} href={navItem.href}>
          {navItem.label}
        </HoverLinks>
      ))}
      <AuthButtons className="mt-auto mb-4 w-full" />
    </div>
  );
};

const AuthButtons = ({ className }) => (
  <div className={\`flex space-x-4 mx-2 \${className}\`}>
    <button className="bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4">
      Sign In
    </button>
    <button className="bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4 ">
      Sign Up
    </button>
  </div>
);

AuthButtons.propTypes = {
  className: PropTypes.string,
};

AuthButtons.defaultProps = {
  className: "",
};

const HoverLinks = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative block font-bold uppercase text-gray-700 hover:text-black transition-all duration-200 overflow-hidden whitespace-nowrap"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="block relative overflow-hidden">
        <span
          className={\`block transform transition-transform duration-300 \${isHovered ? "-translate-y-full" : "translate-y-0"}\`}
        >
          {children}
        </span>
        <span
          className={\`absolute inset-0 block transform transition-transform duration-300 \${isHovered ? "translate-y-0" : "translate-y-full"}\`}
        >
          {children}
        </span>
      </span>
    </a>
  );
};

HoverLinks.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const NAV_ITEMS = [
  { label: "Products", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Insights", href: "#" },
  { label: "Contact", href: "#" },
];
`;

export default function FlipLinkFooter() {
  const [isCopied, setIsCopied] = useState(false);

  //Function to copy code
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="pl-4 space-y-4 ">
      <h1 className="text-3xl font-bold mt-9">Footer Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        Flip Link Footer
      </p>
      <div className="relative flex justify-center w-[68rem]  py-10 px-4 bg-gray-200 ">
        <div className="bg-white border-b w-full border-gray-200 py-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center justify-between w-full md:w-auto">
              <img src={logo} alt="logo" className="h-12 ml-4" />
              <div className="hidden md:flex ml-10">
                <DesktopNav />
              </div>
            </div>
            <AuthButtons className="hidden md:flex" />
            <button
              className="block md:hidden text-gray-700"
              onClick={toggleDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="fixed inset-0 z-50 bg-white p-4 md:hidden">
              <button className="absolute top-4 right-4" onClick={toggleDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="h-full flex flex-col mt-14">
                <MobileNav />
              </div>
            </div>
          )}
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
}

const DesktopNav = () => {
  return (
    <div className="flex space-x-6">
      {NAV_ITEMS.map((navItem) => (
        <div key={navItem.label}>
          <HoverLinks href={navItem.href}>{navItem.label}</HoverLinks>
        </div>
      ))}
    </div>
  );
};

const MobileNav = () => {
  return (
    <div className="bg-white p-4 h-full flex flex-col space-y-6">
      {NAV_ITEMS.map((navItem) => (
        <HoverLinks key={navItem.label} href={navItem.href}>
          {navItem.label}
        </HoverLinks>
      ))}
      <AuthButtons className="mt-auto mb-4 w-full" />
    </div>
  );
};

const AuthButtons = ({ className }) => (
  <div className={`flex space-x-4 mx-2 ${className}`}>
    <button className="bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4">
      Sign In
    </button>
    <button className="bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4 ">
      Sign Up
    </button>
  </div>
);

AuthButtons.propTypes = {
  className: PropTypes.string,
};

AuthButtons.defaultProps = {
  className: "",
};

const HoverLinks = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative block font-bold uppercase text-gray-700 hover:text-black transition-all duration-200 overflow-hidden whitespace-nowrap"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="block relative overflow-hidden">
        <span
          className={`block transform transition-transform duration-300 ${
            isHovered ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          {children}
        </span>
        <span
          className={`absolute inset-0 block transform transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {children}
        </span>
      </span>
    </a>
  );
};

HoverLinks.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const NAV_ITEMS = [
  { label: "Products", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Insights", href: "#" },
  { label: "Contact", href: "#" },
];
