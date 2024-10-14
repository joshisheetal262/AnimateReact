import React, { useState } from "react";
import { motion } from "framer-motion";

const ToggleButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const cardCode = `
import React from "react";
import { motion } from "framer-motion";

const ToggleButton = () => {
  return (
    <div className="flex gap-2 w-[380px] justify-center p-4">
      {/* Button A */}
      <motion.button
        className="flex-75 font-bold text-5xl border-4 border-[#FF003C] text-[#FF003C] relative p-2"
        initial={{ flex: 0.75 }}
        whileHover={{ flex: 2 }} // Increase size on hover
        whileTap={{
          scale: 0.95,
          backgroundColor: "#FF003C",
          color: "#fff",
        }}
        transition={{ duration: 0.4 }}
        style={{
          "--_c": "#88C100",
          "--b": "5px", // Border thickness
          "--h": "1.8em", // Height
          flex: "calc(1.25 + var(--_s,0))",
          height: "var(--h)",
          color: "var(--_c)",
          border: \`var(--b) solid var(--_c)\`,
          background: \`conic-gradient(at calc(100% - 1.3 * var(--b)) 0, var(--_c) 209deg, #0000 211deg) border-box\`,
          clipPath:
            "polygon(0 0, 100% 0, calc(100% - 0.577 * var(--h)) 100%, 0 100%)",
          padding: \`0 calc(0.288 * var(--h)) 0 0\`,
          margin: \`0 calc(-0.288 * var(--h)) 0 0\`,
          boxSizing: "border-box",
        }}
      >
        A
      </motion.button>

      {/* Button B */}
      <motion.button
        className="flex-75 font-bold text-5xl border-4 border-[#FF003C] text-[#FF003C] relative p-2"
        initial={{ flex: 0.75 }}
        whileHover={{ flex: 2 }} // Increase size on hover
        whileTap={{
          scale: 0.95,
          backgroundColor: "#FF003C",
          color: "#fff",
        }}
        transition={{ duration: 0.4 }}
        style={{
          "--_c": "#FF003C",
          "--b": "5px", // Border thickness
          "--h": "1.8em", // Height
          flex: "calc(.75 + var(--_s,0))",
          height: "var(--h)",
          color: "var(--_c)",
          border: \`var(--b) solid var(--_c)\`,
          background: \`conic-gradient(from -90deg at calc(1.3 * var(--b)) 100%, var(--_c) 119deg, #0000 121deg) border-box\`,
          clipPath:
            "polygon(calc(0.577 * var(--h)) 0, 100% 0, 100% 100%, 0 100%)",
          margin: \`0 0 0 calc(-0.288 * var(--h))\`,
          padding: \`0 0 0 calc(0.288 * var(--h))\`,
        }}
      >
        B
      </motion.button>
    </div>
  );
};

export default ToggleButton;`;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Button Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        Options Button
      </p>
      <div className="bg-gray-200 flex items-center justify-center w-full h-[14rem] shadow-sm shadow-black p-6">
        <div className="flex gap-2 w-[380px] justify-center">
          {/* Button A */}
          <motion.button
            className="flex-75 font-bold text-5xl border-4 border-[#FF003C] text-[#FF003C] relative p-2"
            initial={{ flex: 0.75 }}
            whileHover={{ flex: 2 }} // Increase size on hover
            whileTap={{
              scale: 0.95,
              backgroundColor: "#FF003C",
              color: "#fff",
            }}
            transition={{ duration: 0.4 }}
            style={{
              "--_c": "#88C100",
              "--b": "5px", // Border thickness
              "--h": "1.8em", // Height
              flex: "calc(1.25 + var(--_s,0))",
              height: "var(--h)",
              color: "var(--_c)",
              border: `var(--b) solid var(--_c)`,
              background: `conic-gradient(at calc(100% - 1.3 * var(--b)) 0, var(--_c) 209deg, #0000 211deg) border-box`,
              clipPath:
                "polygon(0 0, 100% 0, calc(100% - 0.577 * var(--h)) 100%, 0 100%)",
              padding: `0 calc(0.288 * var(--h)) 0 0`,
              margin: `0 calc(-0.288 * var(--h)) 0 0`,
              boxSizing: "border-box",
              //   transition: "flex 0.2s",
            }}
          >
            A
          </motion.button>

          {/* Button B */}
          <motion.button
            className="flex-75 font-bold text-5xl border-4 border-[#FF003C] text-[#FF003C] relative p-2"
            initial={{ flex: 0.75 }}
            whileHover={{ flex: 2 }} // Increase size on hover
            whileTap={{
              scale: 0.95,
              backgroundColor: "#FF003C",
              color: "#fff",
            }}
            transition={{ duration: 0.4 }}
            style={{
              "--_c": "#FF003C",
              "--b": "5px", // Border thickness
              "--h": "1.8em", // Height
              flex: "calc(.75 + var(--_s,0))",
              height: "var(--h)",
              color: "var(--_c)",
              border: `var(--b) solid var(--_c)`,
              background: `conic-gradient(from -90deg at calc(1.3 * var(--b)) 100%, var(--_c) 119deg, #0000 121deg) border-box`,
              clipPath:
                "polygon(calc(0.577 * var(--h)) 0, 100% 0, 100% 100%, 0 100%)",
              margin: `0 0 0 calc(-0.288 * var(--h))`,
              padding: `0 0 0 calc(0.288 * var(--h))`,
              //   transition: "flex 0.4s",
            }}
          >
            B
          </motion.button>
        </div>
      </div>
      <h2 className="text-2xl font-bold static mb-4 mt-4">Code</h2>
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

export default ToggleButton;
