import React from "react";
import EncryptButton from "../Buttons/EncryptedData";
import SpotLight from "../Buttons/SpotLight";
import OutlineButton from "../Buttons/OutlineButton";
import Click from "../Buttons/Click";
import ToggleButton from "../Buttons/ToggleButton";
import ClipButton from "../Buttons/ClipButton";
import MorphismButton from "../Buttons/MorphismButton";

const CombinedButtons = () => {
  return (
    <div className="flex flex-col">
      <EncryptButton />
      <SpotLight />
      <OutlineButton />
      <Click />
      <ToggleButton />
      <ClipButton />
      <MorphismButton />
    </div>
  );
};

export default CombinedButtons;
