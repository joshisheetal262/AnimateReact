import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/HomePage"; //  Home Page
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
import CombinedFooter from "./components/CombinedFooter";
import CombinedToggle from "./components/CombinedToggle";

// A wrapper component to conditionally render Navbar and Footer
function Layout({ children }) {
  const location = useLocation();

  // Hide Navbar and Footer on the home page ("/")
  const hideNavbarFooter = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conditionally render Navbar */}
      {!hideNavbarFooter && <Navbar />}

      {/* Main content area */}
      <div className="flex-1">{children}</div>

      {/* Conditionally render Footer */}
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<HomePage />} />

          {/* Route for the app layout */}
          <Route
            path="/app"
            element={
              <div className="flex md:flex-row sm:flex-col">
                <Sidebar />
                <Hero />
              </div>
            }
          />

          {/* CARD ROUTE */}
          <Route
            path="/cards"
            element={
              <div className="flex flex-col md:flex-row">
                <Sidebar />
                <CombinedCards />
              </div>
            }
          />

          {/* BUTTON ROUTE */}
          <Route
            path="/buttons"
            element={
              <div className="flex flex-col md:flex-row">
                <Sidebar />
                <CombinedButtons />
              </div>
            }
          />

          {/* TEXT ROUTE */}
          <Route
            path="/text"
            element={
              <div className="flex flex-col md:flex-row">
                <Sidebar />
                <CombinedText />
              </div>
            }
          />

          {/* FORM ROUTE */}
          <Route
            path="/forms"
            element={
              <div className="flex flex-col md:flex-row">
                <Sidebar />
                <CombinedForms />
              </div>
            }
          />

          {/* NAVBAR ROUTE */}
          <Route
            path="/navbar"
            element={
              <div className="flex flex-col md:flex-row">
                <Sidebar />
                <CombinedNavbar />
              </div>
            }
          />

          {/* CAROUSEL ROUTE */}
          <Route
            path="/carousels"
            element={
              <div className="flex flex-col md:flex-row">
                <Sidebar />
                <CombinedCarousel />
              </div>
            }
          />

          {/* FOOTER ROUTE */}
          <Route
            path="/footer"
            element={
              <div className="flex flex-col md:flex-row">
                <Sidebar />
                <CombinedFooter />
              </div>
            }
          />

          {/* Toggle ROUTE */}
          <Route
            path="/toggles"
            element={
              <div className="flex flex-col md:flex-row">
                <Sidebar />
                <CombinedToggle />
              </div>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
