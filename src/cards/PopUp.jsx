import React, { useState } from "react";
import { motion } from "framer-motion";
import cosmetic from "../images/cosmetic.png";
import cosmeticBg from "../images/cosmeticBg.jpg";

const PopUpCard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const cards = [
    {
      title: "Contains all the nutrition",
      link: "#",
      coverImage: cosmeticBg,
      characterImage: cosmetic,
    },
    {
      title: "Long lasting and smooth",
      link: "#",
      coverImage:
        "https://as2.ftcdn.net/v2/jpg/01/37/50/39/1000_F_137503986_MplaPP9hN4DDL2COEXVyGXmv3WDe2JmF.jpg",
      characterImage:
        "https://as2.ftcdn.net/v2/jpg/08/67/83/77/1000_F_867837775_2Jp4EvQbukIj2KJYDbHIfLDkh5bx6zVY.webp",
    },
  ];

  // Example code snippet for the cards
  const cardCode = `
import React from "react";
import { motion } from "framer-motion";

const PopupCard = ({ title, coverImage, characterImage, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="relative flex justify-center items-end w-[calc(300px/1.5)] h-[300px] mx-10 perspective-2500"
        whileHover={{
          rotateX: 25,
          translateY: "-5%",
          boxShadow: "2px 35px 32px -8px rgba(0, 0, 0, 0.75)",
        }}
      >
        <div className="absolute w-full h-full transition-all">
          <img
            src={coverImage}
            className="w-full h-full object-cover"
            alt="Cover"
          />
          {/* Top gradient overlay */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-transparent to-[rgba(12,13,19,0.5)]"></div>
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 w-full h-20 opacity-1 transition-opacity duration-500 bg-gradient-to-b from-transparent to-[rgba(12,13,19,0.5)]"></div>
        </div>
        <motion.div
          className="w-full text-center text-white font-bold text-lg transition-transform duration-500"
          initial={{ translateY: "0%", translateZ: "100px" }}
          whileHover={{ translateY: "-50px", translateZ: "100px" }}
        >
          {title}
        </motion.div>
        <motion.img
          src={characterImage}
          className="absolute w-full h-full opacity-0 transition-opacity duration-500"
          alt="Character"
          initial={{ opacity: 0, translateY: "0%" }}
          whileHover={{ opacity: 1, translateY: "-20%" }}
        />
      </motion.div>
    </a>
  );
};

const Cards = () => {
  return (
    <div className="flex justify-center items-center bg-[#191c2965] h-[30rem]">
      <PopupCard
        title="Contains all the nutrition"
        link="#"
        coverImage="https://img.freepik.com/free-photo/digital-art-flower-landscape-painting_23-2151596841.jpg?t=st=1729283352~exp=1729286952~hmac=204f77f1a20cc8498d7982b4e5a5dfa624dc68a2ebe0c7079df1194c8a0c4fb7&w=360"
        image
        characterImage="https://as1.ftcdn.net/v2/jpg/05/93/97/78/1000_F_593977871_SCCJWIfyzEv5QsACMRQJZmKJ83bPV0AT.webp"
      />
      <PopupCard
        title="Long lasting and smooth"
        link="#"
        coverImage="https://as2.ftcdn.net/v2/jpg/01/37/50/39/1000_F_137503986_MplaPP9hN4DDL2COEXVyGXmv3WDe2JmF.jpg" // Example online cover image
        characterImage="https://as2.ftcdn.net/v2/jpg/08/67/83/77/1000_F_867837775_2Jp4EvQbukIj2KJYDbHIfLDkh5bx6zVY.webp" // Example online character image
      />
    </div>
  );
};

export default Cards;

  `;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Card Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        PopUp Cards
      </p>
      <div className="bg-gray-200 flex items-center justify-center w-full h-[30rem] shadow-sm shadow-black p-6">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="relative flex justify-center items-end w-[calc(300px/1.5)] h-[300px] mx-10"
              whileHover={{
                rotateX: 40,
                translateY: "-5%",
                boxShadow: "2px 35px 32px -8px rgba(0, 0, 0, 0.75)",
              }}
            >
              <div className="absolute w-full h-full transition-all">
                <img
                  src={card.coverImage}
                  className="w-full h-full object-cover"
                  alt="Cover"
                />
                {/* Top gradient overlay */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-transparent to-[rgba(12,13,19,0.5)]"></div>
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 w-full h-20 opacity-1 transition-opacity duration-500 bg-gradient-to-b from-transparent to-[rgba(12,13,19,0.5)]"></div>
              </div>
              <motion.div
                className="w-full text-center text-white font-bold text-lg transition-transform duration-500"
                initial={{ translateY: "0%", translateZ: "100px" }}
                whileHover={{ translateY: "-50px", translateZ: "100px" }}
              >
                {card.title}
              </motion.div>
              <motion.img
                src={card.characterImage}
                className="absolute w-full h-full opacity-0 transition-opacity duration-500"
                alt="Character"
                initial={{ opacity: 0, translateY: "0%" }}
                whileHover={{ opacity: 1, translateY: "-20%" }}
              />
            </motion.div>
          </a>
        ))}
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

export default PopUpCard;
