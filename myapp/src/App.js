import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./components/Home";

import Dashboard from "./components/Dashboard";
import Analyzer from "./components/Analyzer";
import Report from "./components/Report";
import Contact from "./components/Contact";

// New Pages
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
// import Profile from "./components/Profile";

import "./App.css";
import "./professional.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (

    <Router>

      <Header />

      <main className="app-shell">

        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                
                <Contact />
              </>
            }
          />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Requirement Submission */}
          <Route path="/analyzer" element={<Analyzer />} />

          {/* Reports */}
          <Route path="/reports" element={<Report />} />

          {/* Profile */}
          {/* <Route path="/profile" element={<Profile />} /> */}

        </Routes>

      </main>

      <Footer />

    </Router>

  );

}

export default App;