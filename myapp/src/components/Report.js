import React from "react";
import {
  FaFilePdf,
  FaRobot,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClock,
  FaRupeeSign,
  FaProjectDiagram,
  FaDownload,
  FaLightbulb
} from "react-icons/fa";

function Report() {
  return (
    <section id="report" className="report-section py-5">

      <div className="container">

        {/* Heading */}

        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          <h1 className="report-title">
            AI Generated Impact Report
          </h1>

          <p className="report-subtitle">
            Intelligent Software Requirement Change Analysis
          </p>
        </div>

        {/* Main Card */}

        <div
          className="report-main-card"
          data-aos="zoom-in"
        >

          <div className="row">

            {/* Left */}

            <div className="col-lg-6">

              <h3>
                <FaRobot className="me-2 text-primary"/>
                Requirement Details
              </h3>

              <hr/>

              <p><strong>Requirement ID :</strong> REQ-001</p>

              <p><strong>Project :</strong> Smart Impact Analyzer</p>

              <p><strong>Module :</strong> Payment Gateway</p>

              <p>
                <strong>Description :</strong>
                Add secure online payment functionality with OTP verification.
              </p>

            </div>

            {/* Right */}

            <div className="col-lg-6">

              <h3>

                <FaCheckCircle className="me-2 text-success"/>

                AI Prediction

              </h3>

              <hr/>

              <p>

                Impact Level

              </p>

              <div className="progress mb-3">

                <div
                  className="progress-bar bg-danger"
                  style={{width:"90%"}}
                >
                  High
                </div>

              </div>

              <p>

                Prediction Accuracy

              </p>

              <div className="progress">

                <div
                  className="progress-bar bg-success"
                  style={{width:"95%"}}
                >
                  95%
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Information Cards */}

        <div className="row mt-5 g-4">

          <div
            className="col-md-3"
            data-aos="fade-up"
          >
            <div className="info-box">

              <FaProjectDiagram className="report-icon"/>

              <h4>7</h4>

              <p>Affected Modules</p>

            </div>
          </div>

          <div
            className="col-md-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="info-box">

              <FaExclamationTriangle className="report-icon text-danger"/>

              <h4>High</h4>

              <p>Risk Level</p>

            </div>
          </div>

          <div
            className="col-md-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="info-box">

              <FaRupeeSign className="report-icon text-success"/>

              <h4>₹1.20L</h4>

              <p>Estimated Cost</p>

            </div>
          </div>

          <div
            className="col-md-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="info-box">

              <FaClock className="report-icon text-warning"/>

              <h4>12 Days</h4>

              <p>Timeline</p>

            </div>
          </div>

        </div>

        {/* AI Recommendation */}

        <div
          className="recommend-card mt-5"
          data-aos="fade-up"
        >

          <h3>

            <FaLightbulb className="me-2 text-warning"/>

            AI Recommendation

          </h3>

          <ul>

            <li>Authentication module dependency is very high.</li>

            <li>Payment service will impact 7 connected modules.</li>

            <li>Perform integration testing before deployment.</li>

            <li>Increase backend testing coverage.</li>

            <li>Recommended team: Backend + Database + QA.</li>

          </ul>

        </div>

        {/* Download */}

        <div
          className="text-center mt-5"
          data-aos="zoom-in"
        >

          <button className="btn btn-danger btn-lg px-5">

            <FaFilePdf className="me-2"/>

            Download PDF Report

          </button>

          <button className="btn btn-primary btn-lg px-5 ms-3">

            <FaDownload className="me-2"/>

            Export Report

          </button>

        </div>

      </div>

    </section>
  );
}

export default Report;