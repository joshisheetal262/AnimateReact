import React from "react";
import Sidebar from "../navbar/Sidebar";
import TabsShifting from "../navbar/TabsShifting";
import HoverSlideTab from "../navbar/HoverSlideTab";
import SingleTabNavbar from "../navbar/SingleTabNavbar";
import ChipNavbar from "../navbar/ChipNavbar";

const CombinedNavbar = () => {
  return (
    <div className="flex flex-col md:w-full">
      <Sidebar />
      <TabsShifting />
      <HoverSlideTab />
      <SingleTabNavbar />
      <ChipNavbar />
    </div>
  );
};

export default CombinedNavbar;
