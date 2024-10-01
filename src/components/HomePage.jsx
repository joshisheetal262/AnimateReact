import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-purple-900 text-center">
      <div>
        <h1 className="text-5xl font-bold text-[#EBD3F8] mb-6">AnimateReact</h1>
        <Link to="/app">
          <button className="bg-[#AD49E1] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#7A1CAC] transition-all">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
