import React from "react";
import { motion } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";
import { useState } from "react";

const cardCode = `
import React from "react";
import { motion } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";

const Card = () => {
  return (
    <main className="flex flex-col justify-center items-center py-12 font-roboto">
      {/* Parent motion.div triggers all child animations */}
      <motion.div
        className="relative w-[20rem] h-[30rem] rounded-lg overflow-hidden cursor-pointer shadow-lg text-gray-100"
        whileHover="hover" // Trigger the hover state for all child animations
      >
        {/* Image Animation */}
        <motion.img
          src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
          alt="Card"
          className="absolute object-cover w-full h-full top-0 left-0 opacity-90"
          variants={{
            hover: {
              opacity: 1,
              transition: { duration: 0.3 },
            },
          }}
        />

        {/* Heading Animation */}
        <motion.h2
          className="absolute bottom-8 left-8 uppercase text-2xl font-roboto-condensed"
          initial={{ y: 0 }} // Default position
          variants={{
            hover: {
              y: "-40vh", // Move heading up
              transition: { duration: 0.4 },
            },
          }}
        >
          Card Heading
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.span
          className="absolute bottom-20 left-8 max-w-[80%] opacity-0"
          initial={{ opacity: 0 }} // Start invisible
          variants={{
            hover: {
              opacity: 1, // Fade in paragraph
              transition: { duration: 0.4, delay: 0.4 }, // Delay for the paragraph to appear after heading
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          exercitationem iste, voluptatum, quia explicabo laboriosam rem
          adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
          asperiores harum? Dicta odio aut hic.
        </motion.span>

        {/* Button Animation */}
        <motion.a
          href="#"
          className="absolute bottom-10 left-8 flex items-center gap-2 text-inherit no-underline opacity-0"
          initial={{ opacity: 0 }} // Start invisible
          variants={{
            hover: {
              opacity: 1, // Fade in the button
              transition: { duration: 0.4, delay: 0.6 }, // Delay button after paragraph
            },
          }}
        >
          Find out more
          {/* React Icon Arrow */}
          <MdArrowRightAlt size={24} className="inline-block" />
        </motion.a>
      </motion.div>
    </main>
  );
};

export default Card;
`;

const SimpleAimation = () => {
  const [isCopied, setIsCopied] = useState(false);

  // Function to copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Card Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        SlideIn Text Card
      </p>
      <div className="bg-gray-200 flex items-center justify-center w-full h-[35rem] shadow-sm shadow-black p-6">
        <main className="flex flex-col justify-center items-center py-12 font-roboto">
          {/* Parent motion.div triggers all child animations */}
          <motion.div
            className="relative w-[20rem] h-[30rem] rounded-lg overflow-hidden cursor-pointer shadow-lg text-gray-100"
            whileHover="hover" // Trigger the hover state for all child animations
          >
            {/* Image Animation */}
            <motion.img
              src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
              alt="Card"
              className="absolute object-cover w-full h-full top-0 left-0 opacity-90"
              variants={{
                hover: {
                  opacity: 1,
                  transition: { duration: 0.3 },
                },
              }}
            />

            {/* Heading Animation */}
            <motion.h2
              className="absolute bottom-8 left-8 uppercase text-2xl font-roboto-condensed"
              initial={{ y: 0 }} // Default position
              variants={{
                hover: {
                  y: "-40vh", // Move heading up
                  transition: { duration: 0.4 },
                },
              }}
            >
              Card Heading
            </motion.h2>

            {/* Paragraph Animation */}
            <motion.span
              className="absolute bottom-20 left-8 max-w-[80%] opacity-0"
              initial={{ opacity: 0 }} // Start invisible
              variants={{
                hover: {
                  opacity: 1, // Fade in paragraph
                  transition: { duration: 0.4, delay: 0.4 }, // Delay for the paragraph to appear after heading
                },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              exercitationem iste, voluptatum, quia explicabo laboriosam rem
              adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
              asperiores harum? Dicta odio aut hic.
            </motion.span>

            {/* Button Animation */}
            <motion.a
              href="#"
              className="absolute bottom-10 left-8 flex items-center gap-2 text-inherit no-underline opacity-0"
              initial={{ opacity: 0 }} // Start invisible
              variants={{
                hover: {
                  opacity: 1, // Fade in the button
                  transition: { duration: 0.4, delay: 0.6 }, // Delay button after paragraph
                },
              }}
            >
              Find out more
              {/* React Icon Arrow */}
              <MdArrowRightAlt size={24} className="inline-block" />
            </motion.a>
          </motion.div>
        </main>
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

export default SimpleAimation;
