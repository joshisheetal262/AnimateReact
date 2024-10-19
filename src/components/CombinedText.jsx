import React from "react";
import ReavealText from "../text/RevealText";
import BubbleText from "../text/BubbleText";
import MirrorText from "../text/MirrorText";
import StaggeredText from "../text/StaggerText";
import TypewriterText from "../text/TypewritterText";

const CombinedText = () => {
  return (
    <div className="flex flex-col">
      <ReavealText />
      <BubbleText />
      <MirrorText />
      <StaggeredText />
      <TypewriterText />
    </div>
  );
};

export default CombinedText;
