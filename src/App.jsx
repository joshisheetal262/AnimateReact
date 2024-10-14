import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage"; // Your Home Page
import Navbar from "./components/Navbar"; // Navbar component
import Footer from "./components/Footer"; // Footer component
import Sidebar from "./components/Sidebar"; // Sidebar component
import Hero from "./components/Hero"; // Hero section
import CombinedButtons from "./components/CombinedButtons";
import CombinedText from "./components/CombinedText";
import CombinedCards from "./components/CombinedCards";
import CombinedForms from "./components/CombinedForms";
import CombinedNavbar from "./components/CombinedNavbar";
import CombinedCarousel from "./components/CombinedCarousel";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<HomePage />} />

        {/* Route for the app layout */}
        <Route
          path="/app"
          element={
            <>
              <Navbar />
              <div className="flex flex-1">
                <Sidebar />
                <Hero />
              </div>
              <Footer />
            </>
          }
        />
        {/* CARD ROUTE  */}
        <Route
          path="/cards"
          element={
            <>
              <div className="flex flex-1">
                <Sidebar />
                <CombinedCards />
              </div>
            </>
          }
        />
        {/* BUTTON ROUTE  */}
        <Route
          path="/buttons"
          element={
            <>
              <div className="flex flex-1">
                <Sidebar />
                <CombinedButtons />
              </div>
            </>
          }
        />
        {/* TEXT ROUTE  */}
        <Route
          path="/text"
          element={
            <>
              <div className="flex flex-1">
                <Sidebar />
                <CombinedText />
              </div>
            </>
          }
        />
        {/* FORM ROUTE  */}
        <Route
          path="/forms"
          element={
            <>
              <div className="flex flex-1">
                <Sidebar />
                <CombinedForms />
              </div>
            </>
          }
        />
        {/* NAVBAR ROUTE  */}
        <Route
          path="/navbar"
          element={
            <>
              <div className="flex flex-1">
                <Sidebar />
                <CombinedNavbar />
              </div>
            </>
          }
        />
        {/* CAROUSEL ROUTE  */}
        <Route
          path="/carousels"
          element={
            <>
              <div className="flex flex-1">
                <Sidebar />
                <CombinedCarousel />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
