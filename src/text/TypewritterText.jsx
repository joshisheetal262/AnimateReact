import { useState, useEffect, useMemo } from "react";

const cardCode = `
import { useState, useEffect, useMemo } from 'react';

export default function TypewriterText() {
  const [activeText, setActiveText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const placeHolderTexts = useMemo(
    () => [
      "Hello",
      "And",
      "Welcome",
      "To",
      "My",
      "Project",
      "Which",
      "Is",
      "AnimateReact",
      "Website",
    ],
    []
  );

  useEffect(() => {
    let speed = 200;
    let placeholderTextIndex = 0;
    let textIndex = 0;
    let isBackward = false;

    const textInterval = setInterval(() => {
      let text = \` \${placeHolderTexts[placeholderTextIndex]} \`;

      if (textIndex === text.length) {
        isBackward = true;
      } else if (textIndex === 0) {
        isBackward = false;
      }

      if (isBackward) {
        textIndex--;
        if (textIndex === 0) {
          placeholderTextIndex++;
          if (placeholderTextIndex === placeHolderTexts.length) {
            placeholderTextIndex = 0;
          }
        }
      } else {
        textIndex++;
      }

      setActiveText(text.slice(0, textIndex).trim());
    }, speed);

    const cursorInterval = setInterval(() => {
      setShowCursor((show) => !show);
    }, speed); // Blinking speed

    return () => {
      clearInterval(textInterval);
      clearInterval(cursorInterval);
    };
  }, [placeHolderTexts]);

  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-6xl font-bold">
        {activeText}
        <span className={\`\${showCursor ? 'opacity-50' : 'opacity-0'} transition-opacity duration-300\`}>
          _
        </span>
      </h1>
    </div>
  );
}
`;

const TypewriterText = () => {
  const [activeText, setActiveText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  //Copy code function
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  const placeHolderTexts = useMemo(
    () => [
      "Hello",
      "And",
      "Welcome",
      "To",
      "My",
      "Project",
      "Which",
      "Is",
      "AnimateReact",
      "Website",
    ],
    []
  );

  useEffect(() => {
    let speed = 200;
    let placeholderTextIndex = 0;
    let textIndex = 0;
    let isBackward = false;

    const textInterval = setInterval(() => {
      let text = ` ${placeHolderTexts[placeholderTextIndex]} `;

      if (textIndex === text.length) {
        isBackward = true;
      } else if (textIndex === 0) {
        isBackward = false;
      }

      if (isBackward) {
        textIndex--;
        if (textIndex === 0) {
          placeholderTextIndex++;
          if (placeholderTextIndex === placeHolderTexts.length) {
            placeholderTextIndex = 0;
          }
        }
      } else {
        textIndex++;
      }

      setActiveText(text.slice(0, textIndex).trim());
    }, speed);

    const cursorInterval = setInterval(() => {
      setShowCursor((show) => !show);
    }, speed); // Blinking speed

    return () => {
      clearInterval(textInterval);
      clearInterval(cursorInterval);
    };
  }, [placeHolderTexts]);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold mt-5">Text Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        Typewritter Text
      </p>
      <div className="bg-gray-200 flex items-center justify-center w-full h-[16rem] shadow-sm shadow-black p-6">
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-6xl font-bold">
            {activeText}
            <span
              className={`${
                showCursor ? "opacity-50" : "opacity-0"
              } transition-opacity duration-300`}
            >
              _
            </span>
          </h1>
        </div>
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
export default TypewriterText;
