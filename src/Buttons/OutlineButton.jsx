import React, { useRef, useState } from "react";

const cardCode = `
import React from "react";
const Example = () => {
  return (
    <div className="grid min-h-[200px] place-content-center bg-slate-900 p-4">
      <DrawOutlineButton>Hover me</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-black transition-colors duration-[400ms] hover:text-black"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-pink-600 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-black transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-pink-600 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-black transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Example;
`;

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-black transition-colors duration-[400ms] hover:text-black"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-pink-600 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-black transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-pink-600 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-black transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

const OutlineButtonComponent = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className=" p-4 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-6 mt-5">Button Preview</h1>
        <div className="bg-gray-200 flex items-center justify-center w-full h-[14rem] rounded-lg shadow-sm shadow-black p-6">
          <DrawOutlineButton>Hover me</DrawOutlineButton>
        </div>

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
    </div>
  );
};

export default OutlineButtonComponent;
