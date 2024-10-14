import React from "react";
import ReavealText from "../text/RevealText";
import BubbleText from "../text/BubbleText";

const CombinedText = () => {
  return (
    <div className="flex flex-col">
      <ReavealText />
      <BubbleText />
    </div>
  );
};

export default CombinedText;
