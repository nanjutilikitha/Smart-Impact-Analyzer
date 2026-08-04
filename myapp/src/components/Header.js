import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">

      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#home">
          <span className="brand-mark">SIA</span> Smart Impact Analyzer
        </a>


        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >

          <span className="navbar-toggler-icon"></span>

        </button>



        {/* Navbar Links */}
        <div 
          className="collapse navbar-collapse" 
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#analyzer">
                Analyzer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reports">
                Reports
              </a>
            </li>
            <li className="nav-item ms-lg-3">
              <a className="btn btn-outline-light btn-sm" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>

        </div>


      </div>

    </nav>
  );
}

export default Header;