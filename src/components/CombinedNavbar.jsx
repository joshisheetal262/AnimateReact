import React from "react";
import Sidebar from "../navbar/Sidebar";
import TabsShifting from "../navbar/TabsShifting";

const CombinedNavbar = () => {
  return (
    <div className="flex flex-col">
      <Sidebar />
      <TabsShifting />
    </div>
  );
};

export default CombinedNavbar;
