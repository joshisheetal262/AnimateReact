import React from "react";
import Socials from "../cards/Socials";
import PopUp from "../cards/PopUp";
import SimpleAnimation from "../cards/SimpleAnimation";
import SlideImage from "../cards/SlideImage";
import LiftUp from "../cards/LiftUp";

const CombinedCards = () => {
  return (
    <div className="flex flex-col">
      <Socials />
      <PopUp />
      <SimpleAnimation />
      <LiftUp />
      <SlideImage />
    </div>
  );
};

export default CombinedCards;
