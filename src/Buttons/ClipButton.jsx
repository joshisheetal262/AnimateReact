import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const cardCode = `
import React from "react";
import { motion } from "framer-motion";

const ClipHoverButton = () => {
  return (
    <div className="flex justify-center py-20 w-full bg-slate-200">
      <motion.button
        className="relative flex items-center justify-center text-white bg-black border rounded-3xl overflow-hidden md:py-10 md:px-20 lg:py-12 lg:px-24 text-3xl md:text-5xl lg:text-6xl"
        whileHover="hover"
        initial={{ backgroundColor: "black" }}
        variants={{
          hover: {
            backgroundColor: "transparent",
            transition: { duration: 0.3, ease: "easeOut" },
          },
        }}
      >
        {/* Text Span with Fade and Slide Transition */}
        <motion.span
          className="relative z-10"
          initial={{ opacity: 1, translateY: 0 }}
          variants={{
            hover: {
              opacity: 0,
              translateY: -50,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
        >
          Welcome To The...
        </motion.span>

        {/* ClipPath Animation for Background */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ clipPath: "circle(0.0% at 50% 100%)" }}
          variants={{
            hover: {
              clipPath: "circle(100.0% at 50% 100%)",
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          style={{
            backgroundColor: "black",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />

        {/* Image with Opacity and ClipPath Transition */}
        <motion.div
          className="absolute w-full bottom-0 h-full z-10"
          initial={{ opacity: 0 }}
          variants={{
            hover: {
              opacity: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            },
          }}
        >
          <img
            src="https://as1.ftcdn.net/v2/jpg/09/00/09/46/1000_F_900094601_e9Z3yUFuSGRGGMrjslnWJJkvw6M7oMpE.jpg"
            alt="Logo"
            className="object-fill opacity-60 h-full w-full"
          />
        </motion.div>

        {/* Text on Hover ("Tournament of Power") */}
        <motion.div
          className="absolute z-10 text-6xl text-white"
          initial={{ opacity: 0 }}
          variants={{
            hover: {
              opacity: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            },
          }}
        >
          Tournament Of Power
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ClipHoverButton;

`;

const ClipHoverButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  // Function to copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold mt-5">Button Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        Clip Hover Button
      </p>
      <div className="bg-gray-200 flex items-center justify-center w-full h-[16rem] shadow-sm shadow-black p-6">
        <div className="flex justify-center py-20 w-full">
          <motion.button
            className="relative flex items-center justify-center text-white bg-black border rounded-3xl overflow-hidden md:py-10 md:px-20 lg:py-12 lg:px-24 text-3xl md:text-5xl lg:text-6xl"
            whileHover="hover"
            initial={{ backgroundColor: "black" }}
            variants={{
              hover: {
                backgroundColor: "transparent",
                transition: { duration: 0.3, ease: "easeOut" },
              },
            }}
          >
            {/* Text Span with Fade and Slide Transition */}
            <motion.span
              className="relative z-10"
              initial={{ opacity: 1, translateY: 0 }}
              variants={{
                hover: {
                  opacity: 0,
                  translateY: -50,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
            >
              Welcome To The...
            </motion.span>

            {/* ClipPath Animation for Background */}
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ clipPath: "circle(0.0% at 50% 100%)" }}
              variants={{
                hover: {
                  clipPath: "circle(100.0% at 50% 100%)",
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              style={{
                backgroundColor: "black",
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            />

            {/* Image with Opacity and ClipPath Transition */}
            <motion.div
              className="absolute w-full bottom-0 h-full z-10"
              initial={{ opacity: 0 }}
              variants={{
                hover: {
                  opacity: 1,
                  transition: { duration: 0.3, ease: "easeOut" },
                },
              }}
            >
              <img
                src="https://as1.ftcdn.net/v2/jpg/09/00/09/46/1000_F_900094601_e9Z3yUFuSGRGGMrjslnWJJkvw6M7oMpE.jpg"
                alt="Logo"
                className="object-fill opacity-60 h-full w-full"
              />
            </motion.div>

            {/* Text on Hover ("Tournament of Power") */}
            <motion.div
              className="absolute z-10 text-6xl text-white"
              initial={{ opacity: 0 }}
              variants={{
                hover: {
                  opacity: 1,
                  transition: { duration: 0.3, ease: "easeOut" },
                },
              }}
            >
              Tournament Of Power
            </motion.div>
          </motion.button>
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

export default ClipHoverButton;
