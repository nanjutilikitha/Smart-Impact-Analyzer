import React from "react";
import {
  FaRobot,
  FaBrain,
  FaProjectDiagram,
  FaExclamationTriangle,
  FaCode,
  FaDatabase,
  FaBullseye,
  FaEye,
  FaRocket
} from "react-icons/fa";

function About() {
  const problems = [
    {
      icon: <FaExclamationTriangle className="problem-icon" />,
      title: "Time Consuming",
      text: "Manual impact analysis slows delivery and adds unnecessary effort."
    },
    {
      icon: <FaProjectDiagram className="problem-icon" />,
      title: "Hidden Dependencies",
      text: "Cross-module relationships are difficult to uncover without automation."
    },
    {
      icon: <FaBrain className="problem-icon" />,
      title: "Human Errors",
      text: "Reviewers can miss critical modules or misjudge the impact level."
    },
    {
      icon: <FaRobot className="problem-icon" />,
      title: "Project Risk",
      text: "Requirement changes can increase complexity and delivery uncertainty."
    }
  ];

  const solutionPoints = [
    "AI-based requirement analysis",
    "Machine learning assisted predictions",
    "NLP-based requirement comparison",
    "Dependency and workflow detection",
    "Risk scoring and mitigation insights",
    "Automated report generation"
  ];

  const workflowSteps = ["Requirement", "AI Analysis", "Dependency", "Risk Prediction", "Report"];

  const techStack = [
    { icon: <FaCode className="tech-icon" />, label: "React.js" },
    { icon: <FaDatabase className="tech-icon" />, label: "MySQL" },
    { icon: <FaBrain className="tech-icon" />, label: "Machine Learning" },
    { icon: <FaRobot className="tech-icon" />, label: "Spring Boot" }
  ];

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-label">About the platform</span>
          <h2 className="display-5 fw-bold text-primary">Built for modern software teams</h2>
          <p className="lead text-muted">
            A professional AI-powered solution for requirement change impact analysis.
          </p>
        </div>

        <div className="row align-items-center mb-5 g-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-highlight-card">
              <h3>Project Overview</h3>
              <p>
                Smart Impact Analyzer helps teams evaluate requirement changes with
                confidence. It predicts which modules are affected, highlights hidden
                dependencies, estimates project risk, and presents insights in a clear
                executive-ready format.
              </p>
              <p>
                By combining artificial intelligence, machine learning, and natural
                language processing, the platform improves planning accuracy while reducing
                rework and delivery delays.
              </p>
              <a className="btn btn-primary btn-lg mt-3" href="#analyzer">
                Explore the Analyzer
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center" data-aos="fade-left">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4149/4149653.png"
              alt="AI solution illustration"
              className="img-fluid about-visual"
            />
          </div>
        </div>

        <div className="mb-5">
          <h3 className="text-center fw-bold text-danger mb-4">Why the problem matters</h3>
          <div className="row g-4">
            {problems.map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className="problem-card">
                  {item.icon}
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h3 className="text-center fw-bold text-success mb-4">Proposed Solution</h3>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <ul className="solution-list">
                {solutionPoints.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 text-center" data-aos="fade-left">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
                alt="AI platform insight"
                className="img-fluid about-visual"
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h3 className="text-center fw-bold mb-4">System Workflow</h3>
          <div className="workflow">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={step}>
                <div className="step">{step}</div>
                {index < workflowSteps.length - 1 && <span>→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h3 className="text-center fw-bold mb-4">Technology Stack</h3>
          <div className="row text-center g-4">
            {techStack.map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className="tech-card">
                  {item.icon}
                  <h5>{item.label}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="info-card">
              <FaBullseye className="info-icon" />
              <h4>Mission</h4>
              <p>Reduce software risks and improve decision-making through AI-assisted analysis.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card">
              <FaEye className="info-icon" />
              <h4>Vision</h4>
              <p>Build smarter engineering practices that support scalable and dependable software teams.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card">
              <FaRocket className="info-icon" />
              <h4>Goal</h4>
              <p>Improve productivity, quality, and delivery confidence for every project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
