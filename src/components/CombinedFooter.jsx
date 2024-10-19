import React from "react";
import AppLinkFooter from "../footer/AppLinkFooter";
import CenteredLogoFooter from "../footer/CenteredLogoFooter";
import FlipLinkFooter from "../footer/FlipLinkFooter";
import AppPlatformFooter from "../footer/AppPlatformFooter";

const CombinedFooter = () => {
  return (
    <div className="flex flex-col">
      <AppLinkFooter />
      <CenteredLogoFooter />
      <FlipLinkFooter />
      <AppPlatformFooter />
    </div>
  );
};

export default CombinedFooter;
