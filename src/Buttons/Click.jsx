import React, { useState } from "react";

const cardCode = `
const NeuButton = () => {
  return (
    <div className="bg-white min-h-[200px] flex items-center justify-center">
      <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Hover me
      </button>
    </div>
  );
};

export default NeuButton;
`;

const NeuButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="p-4 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-6 mt-5">Button Preview</h1>
        <div className="bg-gray-200 flex items-center justify-center w-full h-[14rem] rounded-lg shadow-sm shadow-black p-6">
          <div className=" flex items-center justify-center">
            <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Hover me
            </button>
          </div>
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

export default NeuButton;
