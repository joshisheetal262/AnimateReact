import PropTypes from "prop-types";
import { useState } from "react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

// Function to copy code to clipboard
const copyToClipboard = () => {
  navigator.clipboard.writeText(cardCode.trim());
  setIsCopied(true);
  setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
};

const cardCode = `
import PropTypes from 'prop-types';
const ListHeader = ({ children }) => {
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";


  return (
    <h3 className="text-lg font-medium mb-2">{children}</h3>
  );
};
ListHeader.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a React node
};

const SocialButton = ({ children, label, href }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center bg-gray-400 rounded-full p-2 hover:bg-gray-200 transition duration-300"
    >
      <span className="sr-only">{label}</span>
      {children}
    </a>
  );
};
SocialButton.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a React node
  label: PropTypes.string.isRequired, // Ensure label is a string
  href: PropTypes.string.isRequired, // Ensure href is a string
};
const AppPlatformFooter = () => {
  return (
    <footer className="bg-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <ListHeader>Company</ListHeader>
            <ul className="list-none space-y-2">
              {Company.map((company, index) => (
                <li key={index}>
                  <a href={company.href} className="text-gray-600 hover:text-gray-800">
                    {company.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ListHeader>Support</ListHeader>
            <ul className="list-none space-y-2">
              {Support.map((company, index) => (
                <li key={index}>
                  <a href={company.href} className="text-gray-600 hover:text-gray-800">
                    {company.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ListHeader>Legal</ListHeader>
            <ul className="list-none space-y-2">
              {Legal.map((Legal, index) => (
                <li key={index}>
                  <a href={Legal.href} className="text-gray-600 hover:text-gray-800">
                    {Legal.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ListHeader>Install App</ListHeader>
            <div className="flex flex-col space-y-2">
              <a href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmXn5Sab2M4hdgO5fFnxsWtA51d0tO-vRf8vMNUnEIWRbzDOBz_uumhz84puqOlszhw&usqp=CAU"
                  alt="App Store"
                  className="w-full rounded"
                />
              </a>
              <a href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmXn5Sab2M4hdgO5fFnxsWtA51d0tO-vRf8vMNUnEIWRbzDOBz_uumhz84puqOlszhw&usqp=CAU"
                  alt="Play Store"
                  className="w-full rounded"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300 mt-8" />

      <<div className="container mx-auto px-4 flex items-center py-4 justify-between md:flex-row md:space-x-4">
            <p className="text-gray-600 text-sm">
              &copy; 2024 Sheetal Joshi.All rights reserved
            </p>
            <div className="flex space-x-4">
              <SocialButton label="Twitter" href="#">
                <FaTwitter className="text-xl" />
              </SocialButton>
              <SocialButton label="YouTube" href="#">
                <FaYoutube className="text-xl" />
              </SocialButton>
              <SocialButton label="Instagram" href="#">
                <FaInstagram className="text-xl" />
              </SocialButton>
            </div>
      </div>
    </footer>
  );
};

const Company = [
  {
    label: 'About Us',
    href: '#',
  },
  {
    label: 'Blog',
    href: '#',
  },
  {
    label: 'Careers',
    href: '#',
  },
  {
    label: 'Contact Us',
    href: '#',
  },
]
const Support = [
  {
    label: 'Help Center',
    href: '#',
  },
  {
    label: 'Safety Center',
    href: '#',
  },
  {
    label: 'Community Guidelines',
    href: '#',
  },
]
const Legal = [
  {
    label: 'Cookies Policy',
    href: '#',
  },
  {
    label: 'Privacy Policy',
    href: '#',
  },
  {
    label: 'Terms of Service',
    href: '#',
  },
  {
    label: 'Law Enforcement',
    href: '#',
  },
]

export default AppPlatformFooter;
`;

const ListHeader = ({ children }) => {
  return <h3 className="text-lg font-medium mb-2">{children}</h3>;
};
ListHeader.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a React node
};

const SocialButton = ({ children, label, href }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center bg-gray-400 rounded-full p-2 hover:bg-gray-200 transition duration-300"
    >
      <span className="sr-only">{label}</span>
      {children}
    </a>
  );
};
SocialButton.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a React node
  label: PropTypes.string.isRequired, // Ensure label is a string
  href: PropTypes.string.isRequired, // Ensure href is a string
};
const AppPlatformFooter = () => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold mt-5">Footer Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        App Platform
      </p>
      <div className="bg-gray-200 flex items-center justify-center w-full  shadow-sm shadow-black p-6">
        <footer className="bg-gray-200 py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <ListHeader>Company</ListHeader>
                <ul className="list-none space-y-2">
                  {Company.map((company, index) => (
                    <li key={index}>
                      <a
                        href={company.href}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        {company.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ListHeader>Support</ListHeader>
                <ul className="list-none space-y-2">
                  {Support.map((company, index) => (
                    <li key={index}>
                      <a
                        href={company.href}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        {company.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ListHeader>Legal</ListHeader>
                <ul className="list-none space-y-2">
                  {Legal.map((Legal, index) => (
                    <li key={index}>
                      <a
                        href={Legal.href}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        {Legal.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ListHeader>Install App</ListHeader>
                <div className="flex flex-col space-y-2">
                  <a href="#">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmXn5Sab2M4hdgO5fFnxsWtA51d0tO-vRf8vMNUnEIWRbzDOBz_uumhz84puqOlszhw&usqp=CAU"
                      alt="App Store"
                      className="w-full rounded"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmXn5Sab2M4hdgO5fFnxsWtA51d0tO-vRf8vMNUnEIWRbzDOBz_uumhz84puqOlszhw&usqp=CAU"
                      alt="Play Store"
                      className="w-full rounded"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-300 mt-8" />

          <div className="container mx-auto px-4 flex items-center py-4 justify-between md:flex-row md:space-x-4">
            <p className="text-gray-600 text-sm">
              &copy; 2024 Sheetal Joshi.All rights reserved
            </p>
            <div className="flex space-x-4">
              <SocialButton label="Twitter" href="#">
                <FaTwitter className="text-xl" />
              </SocialButton>
              <SocialButton label="YouTube" href="#">
                <FaYoutube className="text-xl" />
              </SocialButton>
              <SocialButton label="Instagram" href="#">
                <FaInstagram className="text-xl" />
              </SocialButton>
            </div>
          </div>
        </footer>
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

const Company = [
  {
    label: "About Us",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Careers",
    href: "#",
  },
  {
    label: "Contact Us",
    href: "#",
  },
];
const Support = [
  {
    label: "Help Center",
    href: "#",
  },
  {
    label: "Safety Center",
    href: "#",
  },
  {
    label: "Community Guidelines",
    href: "#",
  },
];
const Legal = [
  {
    label: "Cookies Policy",
    href: "#",
  },
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Terms of Service",
    href: "#",
  },
  {
    label: "Law Enforcement",
    href: "#",
  },
];

export default AppPlatformFooter;
