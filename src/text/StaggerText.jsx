import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const cardCode = `
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const text = "Get Staggered!";

const StaggeredText = () => {
  const textArray = [text];
  const controls = useAnimation();
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      if (top < window.innerHeight && top > 0) {
        setIsInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="flex justify-center  p-20 w-full">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {textArray.map((line, index) => (
          <div key={index} className="block">
            {line.split(" ").map((word, idx) => (
              <span key={idx} className="inline-block font-bold text-6xl">
                {word.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={defaultAnimation}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;&nbsp;</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default StaggeredText;



`;

const text = "Get Staggered!";

const StaggeredText = () => {
  const textArray = [text];
  const controls = useAnimation();
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Function to copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  const handleScroll = () => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      if (top < window.innerHeight && top > 0) {
        setIsInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold mt-5">Text Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        Staggered Text
      </p>
      <div className="bg-gray-200 flex items-center justify-center w-full h-[16rem] shadow-sm shadow-black p-6">
        <div className="flex justify-center p-20 w-full">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {textArray.map((line, index) => (
              <div key={index} className="block">
                {line.split(" ").map((word, idx) => (
                  <span key={idx} className="inline-block font-bold text-6xl">
                    {word.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        variants={defaultAnimation}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                    <span className="inline-block">&nbsp;&nbsp;</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
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
export default StaggeredText;
