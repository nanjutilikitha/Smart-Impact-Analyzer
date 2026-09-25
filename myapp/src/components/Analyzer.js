import React, { useState } from "react";
import {
  FaRobot,
  FaUpload,
  FaProjectDiagram,
  FaFileDownload,
  FaClock,
  FaRupeeSign,
  FaCheckCircle,
  FaSearch,
  FaBrain
} from "react-icons/fa";

function Analyzer() {

  const [oldRequirement, setOldRequirement] = useState("");
  const [newRequirement, setNewRequirement] = useState("");

  const [result, setResult] = useState(null);

  const analyzeRequirement = () => {

    if (oldRequirement.trim() === "" || newRequirement.trim() === "") {

      alert("Please enter both requirements.");

      return;

    }

    setResult({

      impact: "High",

      risk: "Medium",

      accuracy: "95%",

      cost: "₹1,20,000",

      timeline: "12 Days",

      modules: [

        "Authentication Module",

        "Payment Module",

        "Database Layer",

        "Notification Service"

      ]

    });

  };

  return (

    <section id="analyzer" className="analyzer-section">

      <div className="container">

        <div className="text-center mb-5">

          <FaBrain className="display-3 text-primary mb-3"/>

          <h1 className="analyzer-title">

            AI Requirement Impact Analyzer

          </h1>

          <p className="analyzer-subtitle">

            Compare old and new software requirements to predict impact,
            identify affected modules and estimate project risks using AI.

          </p>

        </div>

        <div className="row">

          {/* LEFT PANEL */}

          <div className="col-lg-6 mb-4">

            <div className="analyzer-card">

              <h3 className="mb-4">

                <FaUpload className="me-2"/>

                Requirement Input

              </h3>

              <label className="fw-bold mb-2">

                Upload Requirement Document

              </label>

              <input
                type="file"
                className="form-control mb-4"
              />

              <label className="fw-bold mb-2">

                Old Requirement

              </label>

              <textarea

                className="form-control mb-4"

                rows="5"

                placeholder="Enter old requirement..."

                value={oldRequirement}

                onChange={(e)=>setOldRequirement(e.target.value)}

              />

              <label className="fw-bold mb-2">

                New Requirement

              </label>

              <textarea

                className="form-control mb-4"

                rows="5"

                placeholder="Enter new requirement..."

                value={newRequirement}

                onChange={(e)=>setNewRequirement(e.target.value)}

              />

              <button

                className="btn btn-primary btn-lg w-100"

                onClick={analyzeRequirement}

              >

                <FaSearch className="me-2"/>

                Analyze Requirement

              </button>

            </div>

          </div>

          {/* RIGHT PANEL */}

          <div className="col-lg-6">

            <div className="analyzer-card">

              {!result ? (

                <div className="text-center py-5">

                  <FaRobot size={90} className="text-primary mb-4"/>

                  <h3>No Analysis Yet</h3>

                  <p className="text-muted">

                    Upload or enter both requirements and click
                    <strong> Analyze Requirement</strong>.

                  </p>

                </div>

              ) : (

                <>

                  <div className="result-header">

                    <FaRobot className="result-ai"/>

                    <div>

                      <h3>

                        AI Prediction Result

                      </h3>

                      <p>

                        Analysis completed successfully.

                      </p>

                    </div>

                  </div>

                  <div className="row g-3">

                    <div className="col-md-6">

                      <div className="result-box">

                        <h5>Impact Level</h5>

                        <h2 className="text-danger">

                          {result.impact}

                        </h2>

                        <div className="progress mt-3">

                          <div
                            className="progress-bar bg-danger"
                            style={{ width: "90%" }}
                          >

                            90%

                          </div>

                        </div>

                      </div>

                    </div>

                    <div className="col-md-6">

                      <div className="result-box">

                        <h5>Prediction Accuracy</h5>

                        <h2 className="text-success">

                          {result.accuracy}

                        </h2>

                        <div className="progress mt-3">

                          <div
                            className="progress-bar bg-success"
                            style={{ width: "95%" }}
                          >

                            95%

                          </div>

                        </div>

                      </div>

                    </div>

                    <div className="col-md-6">

                      <div className="result-box">

                        <FaRupeeSign className="text-primary fs-3 mb-2"/>

                        <h5>Estimated Cost</h5>

                        <h3>

                          {result.cost}

                        </h3>

                      </div>

                    </div>

                    <div className="col-md-6">

                      <div className="result-box">

                        <FaClock className="text-warning fs-3 mb-2"/>

                        <h5>Timeline</h5>

                        <h3>

                          {result.timeline}

                        </h3>

                      </div>

                    </div>

                  </div>

                  <hr className="my-4"/>

                  <h4 className="mb-3">

                    <FaProjectDiagram className="me-2"/>

                    Affected Modules

                  </h4>

                  <div className="row">

                    {result.modules.map((module,index)=>(

                      <div className="col-md-6 mb-3" key={index}>

                        <div className="module-box">

                          <FaCheckCircle className="me-2 text-success"/>

                          {module}

                        </div>

                      </div>

                    ))}

                  </div>

                  <div className="text-center mt-4">

                    <button className="btn btn-success btn-lg">

                      <FaFileDownload className="me-2"/>

                      Download Report

                    </button>

                  </div>

                </>

              )}

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Analyzer;