import { motion } from "framer-motion";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const Toggle = () => {
  const [selected, setSelected] = useState("light");

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold ">Toggle Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        Light / Dark
      </p>
      <div className="bg-gray-200 flex items-center justify-center w-[68rem] rounded-lg shadow-sm shadow-black p-6">
        <div
          className={`grid h-[400px] w-full place-content-center px-4 transition-colors ${
            selected === "light" ? "bg-white" : "bg-slate-900"
          }`}
        >
          <div className="relative flex w-fit items-center rounded-full">
            <button
              className={`${TOGGLE_CLASSES} ${
                selected === "light" ? "text-white" : "text-slate-300"
              }`}
              onClick={() => {
                setSelected("light");
              }}
            >
              <FiMoon className="relative z-10 text-lg md:text-sm" />
              <span className="relative z-10">Light</span>
            </button>
            <button
              className={`${TOGGLE_CLASSES} ${
                selected === "dark" ? "text-white" : "text-slate-800"
              }`}
              onClick={() => {
                setSelected("dark");
              }}
            >
              <FiSun className="relative z-10 text-lg md:text-sm" />
              <span className="relative z-10">Dark</span>
            </button>
            <div
              className={`absolute inset-0 z-0 flex ${
                selected === "dark" ? "justify-end" : "justify-start"
              }`}
            >
              <motion.span
                layout
                transition={{ type: "spring", damping: 15, stiffness: 250 }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
