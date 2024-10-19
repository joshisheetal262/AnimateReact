import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import barista from "../images/barista.png";
import cat from "../images/cat.png";
import newton from "../images/newton.png";
import womenreading from "../images/womenReading.png";
import music from "../images/music.png";
import podcast from "../images/podcast.png";
import yoga from "../images/yoga.png";

const cardCode = `
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const HorizontalScroll = () => {
  return (
    <div className="bg-neutral-600">
      <div className="flex h-20 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-400">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-20 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-400">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[200vh] w-full bg-neutral-900"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: \`url(\${card.url})\`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-end justify-center mb-2">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-gray-600 backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const cards = [
  {
    url: "https://as2.ftcdn.net/v2/jpg/03/86/82/73/1000_F_386827376_uWOOhKGk6A4UVL5imUBt20Bh8cmODqzx.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://as2.ftcdn.net/v2/jpg/04/81/19/95/1000_F_481199500_2aFq9E8phorjYeP4ASzj6W70FcSI2zNc.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://as2.ftcdn.net/v2/jpg/03/45/65/23/1000_F_345652330_QaUvB8Evc0CNM6XRND22gUmUhBuwUxik.jpg",
    title: "Title 3",
    id: 4,
  },
  {
    url: "https://as1.ftcdn.net/v2/jpg/03/45/65/16/1000_F_345651649_FU7jR63BqRRI54sVSzxTGftUHd50uOvz.jpg",
    title: "Title 4",
    id: 3,
  },
  {
    url: "https://as1.ftcdn.net/v2/jpg/03/45/65/16/1000_F_345651683_mB37gIQ6h3AgPKY2iLj86pO16qOW7ZWj.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://as1.ftcdn.net/v2/jpg/03/45/65/20/1000_F_345652045_gfVh48pEcQC7w9Y91IJO7LXK3jfydb3A.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://as1.ftcdn.net/v2/jpg/03/45/65/22/1000_F_345652202_MQaxCcjvhuSVW6yI5E6TdHUp9DKcRAHe.jpg",
    title: "Title 7",
    id: 7,
  },
];

export default HorizontalScroll;

`;

const HorizontalScroll = () => {
  const [isCopied, setIsCopied] = useState(false);

  //Function to copy code
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="sticky p-4 space-y-4">
      <h1 className="text-3xl font-bold mt-5">Carousel Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        Scroll Carousel
      </p>
      <div className="bg-gray-200 flex items-center justify-center w-full shadow-sm shadow-black p-6">
        <div className="bg-neutral-600">
          <div className="flex h-20 items-center justify-center">
            <span className="font-semibold uppercase text-neutral-400">
              Scroll down
            </span>
          </div>
          <HorizontalScrollCarousel />
          <div className="flex h-20 items-center justify-center">
            <span className="font-semibold uppercase text-neutral-400">
              Scroll up
            </span>
          </div>
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

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[180vh] w-[65rem] bg-neutral-900"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`, // Corrected template literal syntax
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-end justify-center mb-2">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-gray-600 backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const cards = [
  {
    url: barista, // Directly use the imported image here
    title: "Barista",
    id: 1,
  },
  {
    url: cat, // Relative path to other images
    title: "Cat",
    id: 2,
  },
  {
    url: womenreading,
    title: " Reading",
    id: 4,
  },
  {
    url: newton,
    title: "Newton",
    id: 3,
  },

  {
    url: music,
    title: "Music",
    id: 5,
  },
  {
    url: podcast,
    title: "Podcast",
    id: 6,
  },
  {
    url: "https://as1.ftcdn.net/v2/jpg/03/45/65/20/1000_F_345652045_gfVh48pEcQC7w9Y91IJO7LXK3jfydb3A.jpg",
    title: "Yoga",
    id: 7,
  },
];
export default HorizontalScroll;
