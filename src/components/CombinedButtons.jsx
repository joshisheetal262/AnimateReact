import React from "react";
import EncryptButton from "../Buttons/EncryptedData";
import SpotLight from "../Buttons/SpotLight";
import OutlineButton from "../Buttons/OutlineButton";
import Click from "../Buttons/Click";
import ToggleButton from "../Buttons/ToggleButton";
import ClipButton from "../Buttons/ClipButton";

const CombinedButtons = () => {
  return (
    <div className="flex flex-col">
      <EncryptButton />
      <SpotLight />
      <OutlineButton />
      <Click />
      <ToggleButton />
      <ClipButton />
    </div>
  );
};

export default CombinedButtons;
