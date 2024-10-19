import React, { useState } from "react";
import { motion, spring } from "framer-motion";

const AnimatedCard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const cardVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 5 },
  };

  const imgVariants = {
    initial: { translateY: 0, rotate: 0 }, // Initial position
    hover: { translateY: "-5rem", rotate: -50, type: spring, stiffness: 10 }, // Image animation on hover
  };

  const cardCode = `
import { motion, spring } from "framer-motion";

const AnimatedCard = () => {
  const cardVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 5 },
  };

  const imgVariants = {
    initial: { translateY: 0, rotate: 0 }, // Initial position
    hover: { translateY: "-5rem", rotate: -50, type: spring, stiffness: 10 }, // Image animation on hover
  };

  return (
    <main className="container flex justify-around mb-10">
      {/* Card 1 */}
      <motion.section
        className="relative p-4 w-80 h-[400px] shadow-lg rounded-lg bg-red-700 text-white cursor-pointer"
        variants={cardVariants} // Apply card variants here
        initial="initial"
        whileHover="hover" // Triggers hover animation for the entire card
      >
        <motion.div
          className="product-image"
          variants={imgVariants} // Apply image variants here
          initial="initial"
          whileHover="hover" // Same hover trigger
        >
          <img
            src="https://i.ibb.co/cNWqxGx/red.png"
            alt="OFF-white Red Edition"
            draggable="false"
            className="h-56 w-full object-cover"
          />
        </motion.div>
        <div className="product-info text-center">
          <h2 className="text-lg font-semibold">Nike X OFF-white</h2>
          <p className="my-2 text-sm">
            The 10: Air Jordan 1 off-white - Chicago
          </p>
          <div className="price text-xl">$999</div>
        </div>
        <div className="btn flex justify-between mt-4">
          <button className="buy-btn bg-black text-white py-2 px-4 rounded">
            Buy Now
          </button>
          <button className="fav flex items-center justify-center bg-white border border-black rounded p-1">
            <svg
              className="svg h-6 w-6 fill-current text-black"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
            </svg>
          </button>
        </div>
      </motion.section>

      {/* Card 2 */}
      <motion.section
        className="relative p-4 w-80 h-[400px] shadow-lg rounded-lg bg-blue-600 text-white cursor-pointer"
        variants={cardVariants} // Apply same card variants here
        initial="initial"
        whileHover="hover" // Hover triggers animation
      >
        <motion.div
          className="product-image"
          variants={imgVariants} // Apply image variants here
          initial="initial"
          whileHover="hover"
        >
          <img
            src="https://i.ibb.co/0JKpmgd/blue.png"
            alt="OFF-white Blue Edition"
            draggable="false"
            className="h-56 w-full object-cover"
          />
        </motion.div>
        <div className="product-info text-center">
          <h2 className="text-lg font-semibold">Nike X OFF-white</h2>
          <p className="my-2 text-sm">
            Air Jordan 1 High "Off-White - UNC" sneakers
          </p>
          <div className="price text-xl">$1599</div>
        </div>
        <div className="btn flex justify-between mt-4">
          <button className="buy-btn bg-black text-white py-2 px-4 rounded">
            Buy Now
          </button>
          <button className="fav flex items-center justify-center bg-white border border-black rounded p-1">
            <svg
              className="svg h-6 w-6 fill-current text-black"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
            </svg>
          </button>
        </div>
      </motion.section>
    </main>
  );
};

export default AnimatedCard;

`;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Card Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        LiftUp Card
      </p>
      <div className="bg-gray-200 flex items-center justify-center w-full h-[30rem] shadow-sm shadow-black p-6">
        <main className="container flex justify-around mb-10">
          {/* Card 1 */}
          <motion.section
            className="relative p-4 w-80 h-[400px] shadow-lg rounded-lg bg-red-700 text-white cursor-pointer"
            variants={cardVariants} // Apply card variants here
            initial="initial"
            whileHover="hover" // Triggers hover animation for the entire card
          >
            <motion.div
              className="product-image"
              variants={imgVariants} // Apply image variants here
              initial="initial"
              whileHover="hover" // Same hover trigger
            >
              <img
                src="https://i.ibb.co/cNWqxGx/red.png"
                alt="OFF-white Red Edition"
                draggable="false"
                className="h-56 w-full object-cover"
              />
            </motion.div>
            <div className="product-info text-center">
              <h2 className="text-lg font-semibold">Nike X OFF-white</h2>
              <p className="my-2 text-sm">
                The 10: Air Jordan 1 off-white - Chicago
              </p>
              <div className="price text-xl">$999</div>
            </div>
            <div className="btn flex justify-between mt-4">
              <button className="buy-btn bg-black text-white py-2 px-4 rounded">
                Buy Now
              </button>
              <button className="fav flex items-center justify-center bg-white border border-black rounded p-1">
                <svg
                  className="svg h-6 w-6 fill-current text-black"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
                </svg>
              </button>
            </div>
          </motion.section>

          {/* Card 2 */}
          <motion.section
            className="relative p-4 w-80 h-[400px] shadow-lg rounded-lg bg-blue-600 text-white cursor-pointer"
            variants={cardVariants} // Apply same card variants here
            initial="initial"
            whileHover="hover" // Hover triggers animation
          >
            <motion.div
              className="product-image"
              variants={imgVariants} // Apply image variants here
              initial="initial"
              whileHover="hover"
            >
              <img
                src="https://i.ibb.co/0JKpmgd/blue.png"
                alt="OFF-white Blue Edition"
                draggable="false"
                className="h-56 w-full object-cover"
              />
            </motion.div>
            <div className="product-info text-center">
              <h2 className="text-lg font-semibold">Nike X OFF-white</h2>
              <p className="my-2 text-sm">
                Air Jordan 1 High "Off-White - UNC" sneakers
              </p>
              <div className="price text-xl">$1599</div>
            </div>
            <div className="btn flex justify-between mt-4">
              <button className="buy-btn bg-black text-white py-2 px-4 rounded">
                Buy Now
              </button>
              <button className="fav flex items-center justify-center bg-white border border-black rounded p-1">
                <svg
                  className="svg h-6 w-6 fill-current text-black"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
                </svg>
              </button>
            </div>
          </motion.section>
        </main>
      </div>
      {/* Card Code Section */}
      <h2 className="text-2xl font-bold static mb-4">Code</h2>
      <div className="relative">
        <div className="h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg">
          <pre className="text-sm whitespace-pre-wrap">{cardCode.trim()}</pre>
        </div>
        <button
          onClick={() => copyToClipboard(cardCode)}
          className="absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2"
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default AnimatedCard;
