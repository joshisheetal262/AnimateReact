import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const cardCode = `
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "https://img.freepik.com/free-photo/anime-style-mythical-dragon-creature_23-2151112867.jpg?t=st=1728918526~exp=1728922126~hmac=9234883d72b480a3cf7f0f04432fd2276dac6d858cc1c9778bab2cd9e0d277f2&w=826",
  "https://as2.ftcdn.net/v2/jpg/09/00/09/47/1000_F_900094770_SCnMwAEDXrKpo6rnVLvJ8O38nkpWTBvw.jpg",
  "https://as2.ftcdn.net/v2/jpg/09/00/08/03/1000_F_900080386_wHrO6OYSq4Hh4aYHaheBYyzwl36GNWn9.jpg",
  "https://as1.ftcdn.net/v2/jpg/09/00/09/46/1000_F_900094627_N2GRUszK9SvR8lokKwjOi7mHU26BehPL.jpg",
  "https://as2.ftcdn.net/v2/jpg/10/21/46/85/1000_F_1021468540_kRF74ztX8zgVKgZXjvUTnSJEBi0IzV5G.jpg",
  "https://img.freepik.com/free-photo/portrait-young-child-with-surreal-pet-dragon_23-2151668564.jpg?w=740&t=st=1728915384~exp=1728915984~hmac=dc753d6ecdc4df23f16c09958b7564cc2d164f675891a36138ac1e9fadc77243",
  "https://img.freepik.com/free-photo/mythical-dragon-beast-anime-style_23-2151112792.jpg?t=st=1728915475~exp=1728919075~hmac=331e7a1935db9b082c00841be12eed9c68d3e14c727790c8625cdd8f5887dce9&w=826",
];

const AUTO_DELAY = 4000;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative w-[70rem] overflow-hidden bg-neutral-950 pb-2 px-0 ">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: \`-\${imgIndex * 100}%\` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        {imgs.map((imgSrc, idx) => (
          <motion.div
            key={idx}
            style={{
              backgroundImage: \`url(\${imgSrc})\`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-[70rem] h-[30rem] shrink-0 object-cover"
          />
        ))}
      </motion.div>

      <div className="flex justify-center gap-2">
        {imgs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={\`h-3 w-3 rounded-full transition-colors \${idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"}\`}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipeCarousel;
`;

const imgs = [
  "https://img.freepik.com/free-photo/anime-style-mythical-dragon-creature_23-2151112867.jpg?t=st=1728918526~exp=1728922126~hmac=9234883d72b480a3cf7f0f04432fd2276dac6d858cc1c9778bab2cd9e0d277f2&w=826",
  "https://as2.ftcdn.net/v2/jpg/09/00/09/47/1000_F_900094770_SCnMwAEDXrKpo6rnVLvJ8O38nkpWTBvw.jpg",
  "https://as2.ftcdn.net/v2/jpg/09/00/08/03/1000_F_900080386_wHrO6OYSq4Hh4aYHaheBYyzwl36GNWn9.jpg",
  "https://as1.ftcdn.net/v2/jpg/09/00/09/46/1000_F_900094627_N2GRUszK9SvR8lokKwjOi7mHU26BehPL.jpg",
  "https://as2.ftcdn.net/v2/jpg/10/21/46/85/1000_F_1021468540_kRF74ztX8zgVKgZXjvUTnSJEBi0IzV5G.jpg",
  "https://img.freepik.com/free-photo/portrait-young-child-with-surreal-pet-dragon_23-2151668564.jpg?w=740&t=st=1728915384~exp=1728915984~hmac=dc753d6ecdc4df23f16c09958b7564cc2d164f675891a36138ac1e9fadc77243",
  "https://img.freepik.com/free-photo/mythical-dragon-beast-anime-style_23-2151112792.jpg?t=st=1728915475~exp=1728919075~hmac=331e7a1935db9b082c00841be12eed9c68d3e14c727790c8625cdd8f5887dce9&w=826",
];

const AUTO_DELAY = 4000;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};
// Function to copy code to clipboard
const copyToClipboard = () => {
  navigator.clipboard.writeText(cardCode.trim());
  setIsCopied(true);
  setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
};
const SwipeCarousel = () => {
  const [isCopied, setIsCopied] = useState(false);

  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="pl-4 space-y-4">
      <h1 className="text-3xl font-bold mt-9">Carousel Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        Swipe Carousel
      </p>
      <div className="relative flex items-center justify-center h-[30rem] overflow-hidden pb-6 bg-neutral-950">
        <div className="w-[69rem]">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x: dragX }}
            animate={{ translateX: `-${imgIndex * 100}%` }}
            transition={SPRING_OPTIONS}
            onDragEnd={onDragEnd}
            className="flex cursor-grab items-center active:cursor-grabbing"
          >
            {imgs.map((imgSrc, idx) => (
              <motion.div
                key={idx}
                style={{
                  backgroundImage: `url(${imgSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
                transition={SPRING_OPTIONS}
                className="aspect-video flex justify-center w-full h-[30rem]  shrink-0 object-cover"
              />
            ))}
          </motion.div>

          <div className="flex justify-center gap-2">
            {imgs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setImgIndex(idx)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Card Code Section */}
      <h2 className="text-2xl font-bold static mb-4">Code</h2>
      <div className=" h-[20rem] overflow-scroll">
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

export default SwipeCarousel;
