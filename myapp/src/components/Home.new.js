import React from "react";
import {
  FaRobot,
  FaChartLine,
  FaShieldAlt,
  FaProjectDiagram,
  FaArrowRight
} from "react-icons/fa";

function Home() {
  const highlights = [
    {
      icon: <FaRobot className="icon" />,
      title: "AI Powered",
      text: "Uses intelligent reasoning to analyze requirement changes accurately."
    },
    {
      icon: <FaChartLine className="icon" />,
      title: "95% Accuracy",
      text: "Delivers dependable forecasts on affected modules and delivery risk."
    },
    {
      icon: <FaProjectDiagram className="icon" />,
      title: "100+ Modules",
      text: "Tracks dependencies across large and complex software ecosystems."
    },
    {
      icon: <FaShieldAlt className="icon" />,
      title: "Risk Detection",
      text: "Highlights high, medium, and low impact risks before they surface."
    }
  ];

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7" data-aos="fade-right">
            <span className="hero-badge">AI-driven impact intelligence</span>
            <h1 className="display-3 fw-bold text-white mb-3">
              Smart Impact Analyzer
            </h1>
            <h4 className="text-warning mb-4">
              Predict change impact before it disrupts delivery.
            </h4>
            <p className="home-description">
              Analyze requirement changes, uncover affected modules, detect hidden
              dependencies, predict delivery risk, and generate executive-ready
              reports with the power of artificial intelligence.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a className="btn btn-warning btn-lg" href="#analyzer">
                Start Analysis <FaArrowRight className="ms-2" />
              </a>
              <a className="btn btn-outline-light btn-lg" href="#about">
                Discover Platform
              </a>
            </div>

            <div className="hero-pill-row mt-4">
              <span className="hero-pill">NLP-based reasoning</span>
              <span className="hero-pill">Dependency mapping</span>
              <span className="hero-pill">Executive reporting</span>
            </div>
          </div>

          <div className="col-lg-5 text-center" data-aos="fade-left">
            <div className="hero-visual">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
                alt="AI assistant"
                className="img-fluid ai-image"
              />
            </div>
          </div>
        </div>

        <div className="row mt-5 g-4">
          {highlights.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="stat-card">
                {item.icon}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
