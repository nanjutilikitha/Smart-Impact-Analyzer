import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const syncAuthState = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", syncAuthState);
    syncAuthState();

    return () => window.removeEventListener("storage", syncAuthState);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">

      <div className="container">

        {/* Logo */}

        <Link className="navbar-brand fw-bold" to="/">
          <span className="brand-mark">SIA</span>
          Smart Impact Analyzer
        </Link>

        {/* Mobile Menu */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar */}

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

           

            {isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink
                to="/analyzer"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Analyzer
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Reports
              </NavLink>
            </li>

            {/* Login / Logout */}

            <li className="nav-item ms-lg-3">
              {isLoggedIn ? (
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm px-4"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="btn btn-warning btn-sm px-4"
                >
                  Login
                </NavLink>
              )}
            </li>

            {/* Contact */}

            <li className="nav-item ms-lg-2">

              <a
                href="/#contact"
                className="btn btn-outline-light btn-sm px-4"
              >
                Contact
              </a>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Header;