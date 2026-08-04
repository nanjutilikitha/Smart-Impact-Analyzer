import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaGlobe
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="container">

        <div className="row">

          {/* Project Info */}
          <div className="col-lg-4 mb-4">

            <h3 className="footer-title">
              Smart Impact Analyzer
            </h3>

            <p>
              AI-Based Requirement Change Impact Analysis System that predicts
              software impact, identifies affected modules, detects risks, and
              assists developers in making better decisions using Artificial
              Intelligence.
            </p>

          </div>

          {/* Quick Links */}
          <div className="col-lg-4 mb-4">

            <h4>Quick Links</h4>

            <ul className="footer-links">

              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#dashboard">Dashboard</a>
              </li>

              <li>
                <a href="#analyzer">Analyzer</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div className="col-lg-4 mb-4">

            <h4>Contact Information</h4>

            <p>
              <FaEnvelope className="me-2 text-primary" />
              smartimpact@gmail.com
            </p>

            <p>
              <FaPhone className="me-2 text-success" />
              +91 98765 43210
            </p>

            <p>
              <FaMapMarkerAlt className="me-2 text-danger" />
              Hyderabad, Telangana, India
            </p>

            {/* Social Icons */}

            <div className="social-icons mt-3">

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
              >
                <FaGlobe />
              </a>

            </div>

          </div>

        </div>

        <hr />

        <div className="text-center">

          <p className="mb-0">
            © 2026 <strong>Smart Impact Analyzer</strong>. All Rights Reserved.
          </p>

          <p className="small mt-2">
            Developed using React.js | Spring Boot | Machine Learning | MySQL
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;