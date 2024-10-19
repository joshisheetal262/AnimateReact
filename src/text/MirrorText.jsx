import { useState } from "react";
const cardCode = `
import { useState } from "react";

const STAGGER = 25;

const FlipLink = ({ children, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative block overflow-hidden whitespace-nowrap font-black uppercase lg:text-8xl md:text-7xl text-6xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ lineHeight: 0.85, textDecoration: "none" }}
    >
      <div>
        {children.split("").map((l, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-200 ease-in-out"
            style={{
              transform: \`translateY(\${hovered ? "-100%" : "0%"})\`,
              transitionDelay: \`\${STAGGER * i}ms\`,
            }}
          >
            {l}
          </span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-200 ease-in-out"
            style={{
              transform: \`translateY(\${hovered ? "0%" : "100%"})\`,
              transitionDelay: \`\${STAGGER * i}ms\`,
            }}
          >
            {l}
          </span>
        ))}
      </div>
    </a>
  );
};

const MirrorText = () => {
  return (
    <>
      <div className="grid h-[35vh] md:h-[25rem] w-full place-content-center gap-2 bg-green-300 text-black">
        <FlipLink href="#">Twitter</FlipLink>
        <FlipLink href="#">LinkedIn</FlipLink>
        <FlipLink href="#">Facebook</FlipLink>
        <FlipLink href="#">Instagram</FlipLink>
      </div>
    </>
  );
};

export default MirrorText;
`;

const STAGGER = 25;

const FlipLink = ({ children, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative block overflow-hidden whitespace-nowrap font-black uppercase lg:text-8xl md:text-7xl text-6xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ lineHeight: 0.85, textDecoration: "none" }}
    >
      <div>
        {children.split("").map((l, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-200 ease-in-out"
            style={{
              transform: `translateY(${hovered ? "-100%" : "0%"})`,
              transitionDelay: `${STAGGER * i}ms`,
            }}
          >
            {l}
          </span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-200 ease-in-out"
            style={{
              transform: `translateY(${hovered ? "0%" : "100%"})`,
              transitionDelay: `${STAGGER * i}ms`,
            }}
          >
            {l}
          </span>
        ))}
      </div>
    </a>
  );
};

const MirrorText = () => {
  const [isCopied, setIsCopied] = useState(false);

  // Function to copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <>
      <div className="p-4 space-y-4">
        <h1 className="text-3xl font-bold">Text Preview</h1>
        <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
          Mirror Text
        </p>
        <div className=" flex items-center justify-center w-full shadow-sm shadow-black">
          <div className="grid h-[35vh] md:h-[25rem] w-full place-content-center gap-2 bg-green-300 text-black">
            <FlipLink href="#">Twitter</FlipLink>
            <FlipLink href="#">LinkedIn</FlipLink>
            <FlipLink href="#">Facebook</FlipLink>
            <FlipLink href="#">Instagram</FlipLink>
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
    </>
  );
};
export default MirrorText;
