import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Footer />
    </>
  );
};

export default App;
