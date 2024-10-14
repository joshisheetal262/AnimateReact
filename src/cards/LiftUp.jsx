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
    hover: { rotate: -10 },
  };

  const imgVariants = {
    initial: { translateY: 0 },
    hover: { translateY: "-5rem", rotate: -50, type: spring, stiffness: 10 },
  };

  const cardCode = `
import { motion, spring } from "framer-motion";

const cardVariants = {
    initial: { rotate: 0 },
    hover: { rotate: -10 },
  };

  const imgVariants = {
    initial: { translateY: 0 },
    hover: { translateY: "-5rem", rotate: -50, type: spring, stiffness: 10 },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <main className="container flex justify-around mb-10">
        <motion.section
          className="relative p-4 w-80 h-[450px] shadow-lg rounded-lg bg-red-700 text-white cursor-pointer"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <motion.div className="product-image" variants={imgVariants} initial="initial" whileHover="hover">
            <img src="https://i.ibb.co/cNWqxGx/red.png" alt="OFF-white Red Edition" draggable="false" className="h-56 w-full object-cover" />
          </motion.div>
          <div className="product-info text-center">
            <h2 className="text-lg font-semibold">Nike X OFF-white</h2>
            <p className="my-2 text-sm">The 10: Air Jordan 1 off-white - Chicago</p>
            <div className="price text-xl">$999</div>
          </div>
          <div className="btn flex justify-between mt-4">
            <button className="buy-btn bg-black text-white py-2 px-4 rounded">Buy Now</button>
            <button className="fav flex items-center justify-center bg-white border border-black rounded p-1">
              <svg className="svg h-6 w-6 fill-current text-black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
              </svg>
            </button>
          </div>
        </motion.section>

        <motion.section
          className="relative p-4 w-80 h-[450px] shadow-lg rounded-lg bg-blue-600 text-white cursor-pointer"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <motion.div className="product-image" variants={imgVariants} initial="initial" whileHover="hover">
            <img src="https://i.ibb.co/0JKpmgd/blue.png" alt="OFF-white Blue Edition" draggable="false" className="h-56 w-full object-cover" />
          </motion.div>
          <div className="product-info text-center">
            <h2 className="text-lg font-semibold">Nike X OFF-white</h2>
            <p className="my-2 text-sm">Air Jordan 1 Retro High "Off-White - UNC" sneakers</p>
            <div className="price text-xl">$1599</div>
          </div>
          <div className="btn flex justify-between mt-4">
            <button className="buy-btn bg-black text-white py-2 px-4 rounded">Buy Now</button>
            <button className="fav flex items-center justify-center bg-white border border-black rounded p-1">
              <svg className="svg h-6 w-6 fill-current text-black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
              </svg>
            </button>
          </div>
        </motion.section>
      </main>
    </div>
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
        {/* <div className="flex flex-col items-center justify-center h-screen bg-gray-100"> */}
        <main className="container flex justify-around mb-10">
          <motion.section
            className="relative p-4 w-80 h-[400px] shadow-lg rounded-lg bg-red-700 text-white cursor-pointer"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <motion.div
              className="product-image"
              variants={imgVariants}
              initial="initial"
              whileHover="hover"
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

          <motion.section
            className="elative p-4 w-80 h-[400px] shadow-lg rounded-lg bg-blue-600 text-white cursor-pointer"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <motion.div
              className="product-image"
              variants={imgVariants}
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
        {/* Card Code Section */}
      </div>
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

export default AnimatedCard;
