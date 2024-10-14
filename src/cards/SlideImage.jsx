import React, { useState } from "react"; // Import useState
import { motion } from "framer-motion";

const AnimatedCard = () => {
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const contentVariants = {
    initial: { y: "62%", opacity: 0 },
    hover: { y: "0%", opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  };

  const titleVariants = {
    initial: { opacity: 0, scaleX: 0 },
    hover: { opacity: 1, scaleX: 1, transition: { duration: 0.3, delay: 0.3 } },
  };

  const buttonVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.3, delay: 0.6 } },
  };

  const cardCode = `
import React from "react";
import { motion } from "framer-motion";

const AnimatedCard = () => {
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const contentVariants = {
    initial: { y: "62%", opacity: 0 },
    hover: { y: "0%", opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  const titleVariants = {
    initial: { opacity: 0, scaleX: 0 },
    hover: { opacity: 1, scaleX: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  const buttonVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.5, delay: 1 } },
  };

  return (
    <motion.article
      className="relative max-w-xs h-[25rem] overflow-hidden rounded-lg shadow-lg bg-white"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      <motion.img
        className="object-cover w-full h-[30rem]"
        src="https://as1.ftcdn.net/v2/jpg/05/22/27/22/1000_F_522272281_XBqWaPMejrG9XS0p4SJHS146GOq0gecC.jpg"
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      />
      <motion.div
        className="absolute bottom-0 w-full p-4 text-white bg-gradient-to-t from-black to-transparent"
        variants={contentVariants}
      >
        <motion.div className="space-y-2">
          <motion.h2 className="text-2xl font-bold" variants={titleVariants}>
            Colombia
          </motion.h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
            labore laudantium deserunt fugiat numquam.
          </p>
        </motion.div>
        <motion.button
          className="px-4 py-2 mt-4 text-black bg-yellow-500 rounded"
          variants={buttonVariants}
        >
          Read more
        </motion.button>
      </motion.div>
    </motion.article>
  );
};

export default AnimatedCard;
;`;

  const HoverDevCards = () => {
    const [isCopied, setIsCopied] = useState(false);

    // Function to copy code to clipboard
    const copyToClipboard = () => {
      navigator.clipboard.writeText(cardCode.trim());
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    };

    return (
      <div className="p-4 space-y-4 cursor-pointer">
        <h1 className="text-3xl font-bold">Card Preview</h1>
        <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
          Slide Card
        </p>
        <div className="bg-gray-200 flex items-center justify-center w-full h-[30rem] shadow-sm shadow-black p-6">
          <motion.article
            className="relative max-w-xs h-[25rem] overflow-hidden rounded-lg shadow-lg bg-white"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <motion.img
              className="object-cover w-full h-[30rem]"
              src="https://as1.ftcdn.net/v2/jpg/05/22/27/22/1000_F_522272281_XBqWaPMejrG9XS0p4SJHS146GOq0gecC.jpg"
              alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            />
            <motion.div
              className="absolute bottom-0 w-full p-4 text-white bg-gradient-to-t from-black to-transparent"
              variants={contentVariants}
            >
              <motion.div className="space-y-2">
                <motion.h2
                  className="text-2xl font-bold"
                  variants={titleVariants}
                >
                  Colombia
                </motion.h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum in labore laudantium deserunt fugiat numquam.
                </p>
              </motion.div>
              <motion.button
                className="px-4 py-2 mt-4 text-black bg-yellow-500 rounded"
                variants={buttonVariants}
              >
                Read more
              </motion.button>
            </motion.div>
          </motion.article>
        </div>
        {/* Card Code Section */}
        <h2 className="text-2xl font-bold static mb-4">Code</h2>
        <div className="h-[20rem] overflow-scroll">
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

  return <HoverDevCards />;
};

export default AnimatedCard;
