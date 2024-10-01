import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage"; // Your Home Page
import Navbar from "./components/Navbar"; // Navbar component
import Footer from "./components/Footer"; // Footer component
import Sidebar from "./components/Sidebar"; // Sidebar component
import Hero from "./components/Hero"; // Hero section

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
      </Routes>
    </Router>
  );
}

export default App;
