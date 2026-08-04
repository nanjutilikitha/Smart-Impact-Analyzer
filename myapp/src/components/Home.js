import React from "react";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaChartLine,
  FaShieldAlt,
  FaProjectDiagram,
  FaArrowRight,
  FaBrain,
  FaDatabase,
  FaCode,
  FaFileAlt
} from "react-icons/fa";

function Home() {

  const features = [
    {
      icon: <FaBrain className="icon" />,
      title: "Artificial Intelligence",
      text: "Predict software requirement change impact using advanced AI and Machine Learning."
    },
    {
      icon: <FaDatabase className="icon" />,
      title: "Dependency Analysis",
      text: "Automatically identify affected modules, APIs, database tables and dependencies."
    },
    {
      icon: <FaCode className="icon" />,
      title: "Source Code Analysis",
      text: "Compare old and new requirements to estimate implementation effort."
    },
    {
      icon: <FaFileAlt className="icon" />,
      title: "Professional Reports",
      text: "Generate detailed PDF reports with AI predictions and recommendations."
    }
  ];

  return (

    <section id="home" className="home-section">

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT SIDE */}

          <div
            className="col-lg-6"
            data-aos="fade-right"
          >

            <span className="hero-badge">

              AI Powered Software Engineering

            </span>

            <h1 className="display-3 fw-bold text-white mt-3">

              Smart Impact

              <br />

              Analyzer

            </h1>

            <h4 className="text-warning mt-4">

              AI-Based Requirement Change Impact Analysis System

            </h4>

            <p className="home-description mt-4">

              Analyze software requirement changes before implementation.
              Our Artificial Intelligence engine predicts impacted modules,
              identifies hidden dependencies, estimates project risk,
              calculates development effort and automatically generates
              professional reports for software teams.

            </p>

            {/* Buttons */}

            <div className="mt-5">

              <Link
                to="/login"
                className="btn btn-warning btn-lg me-3"
              >

                Get Started

                <FaArrowRight className="ms-2"/>

              </Link>

              <a
                href="/#about"
                className="btn btn-outline-light btn-lg"
              >

                Learn More

              </a>

            </div>

            {/* Small Badges */}

            <div className="hero-pill-row mt-5">

              <div className="hero-pill">

                🤖 AI Powered

              </div>

              <div className="hero-pill">

                🎯 95% Accuracy

              </div>

              <div className="hero-pill">

                ⚡ Real-Time Analysis

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div
            className="col-lg-6 text-center"
            data-aos="fade-left"
          >

            <div className="hero-visual">

              <img

                src="https://cdn-icons-png.flaticon.com/512/8637/8637099.png"

                alt="Artificial Intelligence"

                className="img-fluid ai-image"

              />

            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="row mt-5 g-4">

          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
          >

            <div className="stat-card">

              <FaRobot className="icon"/>

              <h2>250+</h2>

              <p>

                Requirements Analyzed

              </p>

            </div>

          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >

            <div className="stat-card">

              <FaChartLine className="icon"/>

              <h2>95%</h2>

              <p>

                Prediction Accuracy

              </p>

            </div>

          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >

            <div className="stat-card">

              <FaProjectDiagram className="icon"/>

              <h2>100+</h2>

              <p>

                Modules Tracked

              </p>

            </div>

          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >

            <div className="stat-card">

              <FaShieldAlt className="icon"/>

              <h2>99%</h2>

              <p>

                Risk Detection

              </p>

            </div>

          </div>

        </div>

        {/* Platform Features */}

        <div className="mt-5">

          <div
            className="text-center mb-5"
            data-aos="fade-up"
          >

            <h2 className="fw-bold">

              Platform Features

            </h2>

            <p className="text-muted">

              Everything required for intelligent software requirement
              impact analysis.

            </p>

          </div>

          <div className="row">

            {

              features.map((feature,index)=>(

                <div
                  className="col-lg-3 col-md-6 mb-4"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index*100}
                >

                  <div className="stat-card">

                    {feature.icon}

                    <h4 className="mt-3">

                      {feature.title}

                    </h4>

                    <p>

                      {feature.text}

                    </p>

                  </div>

                </div>

              ))

            }

          </div>

        </div>

      </div>

    </section>

  );

}

export default Home;