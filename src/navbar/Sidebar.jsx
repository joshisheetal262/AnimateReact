import React, { useState } from "react";
import {
  FiBarChart,
  FiChevronDown,
  FiChevronsRight,
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";

const cardCode = `
import React, { useState } from "react";
import {
  FiBarChart,
  FiChevronDown,
  FiChevronsRight,
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className="sticky top-0 h-[70vh] shrink-0 border-r border-b border-slate-300 bg-white p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      {/* Title Section */}
      <div className="mb-3 border-b border-slate-300 pb-3">
        <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <motion.div
              layout
              className="grid size-10  shrink-0 place-content-center rounded-md bg-indigo-600"
            >
              <svg
                width="24"
                height="auto"
                viewBox="0 0 50 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-slate-50"
              >
                <path
                  d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                  stopColor="#000000"
                ></path>
                <path
                  d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                  stopColor="#000000"
                ></path>
              </svg>
            </motion.div>

            {open && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
              >
                <span className="block text-xs font-semibold">Navbar</span>
                <span className="block text-xs text-slate-500">
                  Elements
                </span>
              </motion.div>
            )}
          </div>
          {open && <FiChevronDown className="mr-2" />}
        </div>
      </div>

      {/* Options */}
      <div className="space-y-1 ">
        {[
          { Icon: FiHome, title: "Dashboard", notifs: 0 },
          { Icon: FiDollarSign, title: "Sales", notifs: 3 },
          { Icon: FiMonitor, title: "View Site", notifs: 0 },
          { Icon: FiShoppingCart, title: "Products", notifs: 0 },
          { Icon: FiTag, title: "Tags", notifs: 0 },
          { Icon: FiBarChart, title: "Analytics", notifs: 0 },
          { Icon: FiUsers, title: "Members", notifs: 0 },
        ].map(({ Icon, title, notifs }) => (
          <motion.button
            layout
            key={title}
            onClick={() => setSelected(title)}
            className={\`relative flex h-10 w-full items-center rounded-md transition-colors \${selected === title
              ? "bg-indigo-100 text-indigo-800"
              : "text-slate-500 hover:bg-slate-100"}\`}
          >
            <motion.div
              layout
              className="grid h-full w-10 place-content-center text-lg"
            >
              <Icon />
            </motion.div>
            {open && (
              <motion.span
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
                className="text-xs font-medium"
              >
                {title}
              </motion.span>
            )}
            {notifs > 0 && open && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ y: "-50%" }}
                transition={{ delay: 0.5 }}
                className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
              >
                {notifs}
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>

      {/* Toggle Button */}
      <motion.button
        layout
        onClick={() => setOpen((pv) => !pv)}
        className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
        aria-expanded={open}
      >
        <div className="flex items-center p-2">
          <motion.div
            layout
            className="grid  size-10 place-content-center text-lg"
          >
            <FiChevronsRight
              className={\`transition-transform \${open && "rotate-180"}\`}
            />
          </motion.div>
          {open && (
            <motion.span
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="text-xs font-medium"
            >
              Hide
            </motion.span>
          )}
        </div>
      </motion.button>
    </motion.nav>
  );
};

export default Sidebar;
`;

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="p-4 pr-0 space-y-4">
      <h1 className="text-3xl font-bold mt-5">Card Preview</h1>
      <p className="text-xl font-semibold py-2 px-12 bg-red-500 w-fit">
        Slide Navbar
      </p>
      <div className="bg-slate-300 w-[78rem] shadow-sm shadow-black p-6">
        <motion.nav
          layout
          className="sticky top-0 h-[70vh] shrink-0 border-r border-b border-slate-300 bg-white p-2"
          style={{
            width: open ? "225px" : "fit-content",
          }}
        >
          {/* Title Section */}
          <div className="mb-3 border-b border-slate-300 pb-3">
            <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
              <div className="flex items-center gap-2">
                {/* Logo */}
                <motion.div
                  layout
                  className="grid size-10  shrink-0 place-content-center rounded-md bg-indigo-600"
                >
                  <svg
                    width="24"
                    height="auto"
                    viewBox="0 0 50 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-50"
                  >
                    <path
                      d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                      stopColor="#000000"
                    ></path>
                    <path
                      d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                      stopColor="#000000"
                    ></path>
                  </svg>
                </motion.div>

                {open && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.125 }}
                  >
                    <span className="block text-xs font-semibold">Navbar</span>
                    <span className="block text-xs text-slate-500">
                      Elements
                    </span>
                  </motion.div>
                )}
              </div>
              {open && <FiChevronDown className="mr-2" />}
            </div>
          </div>

          {/* Options */}
          <div className="space-y-1 ">
            {[
              { Icon: FiHome, title: "Dashboard", notifs: 0 },
              { Icon: FiDollarSign, title: "Sales", notifs: 3 },
              { Icon: FiMonitor, title: "View Site", notifs: 0 },
              { Icon: FiShoppingCart, title: "Products", notifs: 0 },
              { Icon: FiTag, title: "Tags", notifs: 0 },
              { Icon: FiBarChart, title: "Analytics", notifs: 0 },
              { Icon: FiUsers, title: "Members", notifs: 0 },
            ].map(({ Icon, title, notifs }) => (
              <motion.button
                layout
                key={title}
                onClick={() => setSelected(title)}
                className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
                  selected === title
                    ? "bg-indigo-100 text-indigo-800"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                <motion.div
                  layout
                  className="grid h-full w-10 place-content-center text-lg"
                >
                  <Icon />
                </motion.div>
                {open && (
                  <motion.span
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.125 }}
                    className="text-xs font-medium"
                  >
                    {title}
                  </motion.span>
                )}
                {notifs > 0 && open && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ y: "-50%" }}
                    transition={{ delay: 0.5 }}
                    className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
                  >
                    {notifs}
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Toggle Button */}
          <motion.button
            layout
            onClick={() => setOpen((pv) => !pv)}
            className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
            aria-expanded={open}
          >
            <div className="flex items-center p-2">
              <motion.div
                layout
                className="grid  size-10 place-content-center text-lg"
              >
                <FiChevronsRight
                  className={`transition-transform ${open && "rotate-180"}`}
                />
              </motion.div>
              {open && (
                <motion.span
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.125 }}
                  className="text-xs font-medium"
                >
                  Hide
                </motion.span>
              )}
            </div>
          </motion.button>
        </motion.nav>
      </div>
      {/* Card Code Section */}
      <h2 className="text-2xl font-bold static mb-4">Code</h2>
      <div className=" h-[20rem] overflow-scroll">
        <div className="relative bg-black text-white p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm whitespace-pre-wrap">{cardCode.trim()}</pre>
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 bg-blue-500 text-white py-1 px-3 rounded-md text-sm"
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
