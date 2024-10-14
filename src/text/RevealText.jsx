import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Direct import from Framer Motion

const Revealtext = () => {
  const [isCopied, setIsCopied] = useState(false);

  const textCode = `import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // Direct import from Framer Motion

export default function RevealAnimation() {
  return (
    <div className="w-full h-screen bg-white px-6 md:px-12 relative">
      <div className="h-full flex items-center justify-center flex-col md:flex-row text-center md:text-left relative z-10">
        <div className="text-black">
          <HeroRevealAnimation>
            <h1 className="text-xl sm:text-2xl md:text-5xl text-black mb-4">
              Welcome to AnimateReact
            </h1>
          </HeroRevealAnimation>
          <HeroRevealAnimation>
            <p className="text-sm sm:text-md md:text-lg text-left text-black mb-4">
              A modern and accessible React UI framework.
            </p>
          </HeroRevealAnimation>
          <HeroRevealAnimation>
            <p className="text-xs sm:text-sm md:text-md text-left w-[280px] md:w-[400px] text-black mb-2">
              I&apos;ve spent the last 5 years building and scaling software for some pretty cool
              companies. I also teach people to paint online (in case you&apos;ve got an empty canvas
              layin&apos; around 🎨). Let&apos;s connect!
            </p>
          </HeroRevealAnimation>
          <HeroRevealAnimation>
            <button className="my-5 bg-blue-500 text-white py-2 px-4 rounded text-xs sm:text-sm md:text-md hover:bg-blue-600">
              Contact me
            </button>
          </HeroRevealAnimation>
        </div>
      </div>
    </div>
  );
}

function HeroRevealAnimation({ children, width = 'fit-content' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const sideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      sideControls.start('visible');
    }
  }, [isInView, mainControls, sideControls]);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: '0%' },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={sideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: '4px',
          bottom: '4px',
          left: '0',
          right: '0',
          background: '#90cdf4',
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
}
`;

  // Function to copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="p-6 flex flex-col space-y-8">
      <h1 className="text-3xl font-bold mt-3">Card Preview</h1>
      <div className="bg-gray-200 rounded-lg shadow-sm shadow-black p-6">
        <div className="w-full p-8 bg-white px-6 md:px-12 relative">
          <div className="h-full flex items-center justify-center flex-col md:flex-row text-center md:text-left relative z-10">
            <div className="text-black">
              <HeroRevealAnimation>
                <h1 className="text-xl sm:text-2xl md:text-5xl text-black mb-4">
                  Welcome to AnimateReact
                </h1>
              </HeroRevealAnimation>
              <HeroRevealAnimation>
                <p className="text-sm sm:text-md md:text-lg text-left text-black mb-4">
                  A modern and accessible React UI framework.
                </p>
              </HeroRevealAnimation>
              <HeroRevealAnimation>
                <p className="text-xs sm:text-sm md:text-md text-left w-[280px] md:w-[400px] text-black mb-2">
                  I ve spent the last 5 years building and scaling software for
                  some pretty cool companies. I also teach people to paint
                  online (in case you've got an empty canvas laying around 🎨).
                  Let's connect!
                </p>
              </HeroRevealAnimation>
              <HeroRevealAnimation>
                <button className="my-5 bg-blue-500 text-white py-2 px-4 rounded text-xs sm:text-sm md:text-md hover:bg-blue-600">
                  Contact me
                </button>
              </HeroRevealAnimation>
            </div>
          </div>
        </div>
      </div>
      {/* Card Code Section */}
      <h2 className="text-2xl font-bold static mb-4">Code</h2>
      <div className=" h-[20rem] overflow-scroll">
        <div className="relative bg-black text-white p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm whitespace-pre-wrap">{textCode.trim()}</pre>
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

function HeroRevealAnimation({ children, width = "fit-content" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const sideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      sideControls.start("visible");
    }
  }, [isInView, mainControls, sideControls]);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: "0%" },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={sideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: "4px",
          bottom: "4px",
          left: "0",
          right: "0",
          background: "#90cdf4",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
}
export default Revealtext;
