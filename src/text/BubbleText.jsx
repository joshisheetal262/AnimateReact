import React, { useState } from "react";

const cardCode = `
import React from "react";

const BubbleText = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {'Bubbbbbbbbbble'.split('').map((letter, index) => (
        <span
          key={index}
          className="text-6xl font-light transition-all duration-350 hover:font-bold hover:text-blue-500 hover:scale-125"
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default BubbleText;
`;

const BubbleText = () => {
  const [isCopied, setIsCopied] = useState(false);

  // Function to copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold mt-5">Card Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        Bubble Text
      </p>
      <div className="bg-black flex flex-col items-center justify-center w-full h-[16rem] shadow-sm shadow-black p-6">
        <div className="flex justify-center items-center h-[16rem] text-white">
          {"Bubbbbbbbbbble".split("").map((letter, index) => (
            <span
              key={index}
              className={`text-6xl font-light transition-all duration-350 cursor-pointer
              hover:font-bold hover:text-blue-500 hover:scale-125`}
            >
              {letter}
            </span>
          ))}
        </div>
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

export default BubbleText;
