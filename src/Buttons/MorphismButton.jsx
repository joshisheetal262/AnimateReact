import { FiSend } from "react-icons/fi";
import { useState } from "react";

const cardCode = `
import { FiSend } from "react-icons/fi";

const NeumorphismButton = () => {
  return (
    <div className="bg-slate-900 w-fit py-8 px-20">
      <button
        className={\`
    
      px-4 py-2 rounded-full 
      flex items-center gap-2 
      text-slate-200
      shadow-[-5px_-5px_6px_rgba(255,_255,_255,_0.8),_5px_5px_6px_rgba(0,_0,_0,_0.25)]
      
      transition-all

      hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),
      inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
      hover:text-violet-500
  \`}
      >
        <FiSend />
        <span>Hover Me</span>
      </button>
    </div>
  );
};

export default NeumorphismButton;

`;

const NeumorphismButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  // Function to copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Button Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        Morphism Button
      </p>
      <div className="bg-gray-900 flex items-center justify-center w-[68rem] h-[16rem] shadow-sm shadow-black p-6">
        <button
          className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-200
        shadow-[-5px_-5px_6px_rgba(255,_255,_255,_0.8),_5px_5px_6px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
    `}
        >
          <FiSend />
          <span>Hover Me</span>
        </button>
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

export default NeumorphismButton;
