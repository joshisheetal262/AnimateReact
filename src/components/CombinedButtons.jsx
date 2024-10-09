import React from "react";
import EncryptButton from "../Buttons/EncryptedData";
import SpotLight from "../Buttons/SpotLight";
import OutlineButton from "../Buttons/OutlineButton";
import Click from "../Buttons/Click";

const CombinedButtons = () => {
  return (
    <div className="flex flex-col">
      <EncryptButton />
      <SpotLight />
      <OutlineButton />
      <Click />
    </div>
  );
};

export default CombinedButtons;
