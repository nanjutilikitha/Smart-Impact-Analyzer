import React from "react";
import {
  FaClipboardList,
  FaProjectDiagram,
  FaExclamationTriangle,
  FaRobot,
  FaChartLine,
  FaFileAlt,
  FaCheckCircle,
  FaClock,
  FaPlusCircle,
  FaUpload,
  FaDownload,
  FaHistory
} from "react-icons/fa";

function Dashboard() {
  return (
    <section id="dashboard" className="dashboard-section py-5">

      <div className="container">

        {/* Dashboard Header */}

        <div className="dashboard-header mb-5">

          <h2>Welcome Back 👋</h2>

          <p>
            AI Powered Requirement Change Impact Analysis Dashboard
          </p>

        </div>

        {/* Statistics */}

        <div className="row g-4">

          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card">
              <FaClipboardList className="dashboard-icon text-primary"/>
              <h2>120</h2>
              <p>Total Requirements</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card">
              <FaRobot className="dashboard-icon text-success"/>
              <h2>95%</h2>
              <p>Prediction Accuracy</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card">
              <FaProjectDiagram className="dashboard-icon text-warning"/>
              <h2>35</h2>
              <p>Affected Modules</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card">
              <FaExclamationTriangle className="dashboard-icon text-danger"/>
              <h2>High</h2>
              <p>Risk Level</p>
            </div>
          </div>

        </div>

        {/* AI Prediction Summary */}

        <div className="report-card mt-5">

          <h3>
            <FaChartLine className="me-2"/>
            AI Prediction Summary
          </h3>

          <p>
            The AI engine predicts that Payment, Authentication,
            Database and Notification modules are highly affected.
          </p>

          <div className="row mt-4">

            <div className="col-md-6">

              <h6>Prediction Accuracy</h6>

              <div className="progress mb-3">
                <div
                  className="progress-bar bg-success"
                  style={{width:"95%"}}
                >
                  95%
                </div>
              </div>

            </div>

            <div className="col-md-6">

              <h6>Risk Level</h6>

              <div className="progress mb-3">
                <div
                  className="progress-bar bg-danger"
                  style={{width:"80%"}}
                >
                  High
                </div>
              </div>

            </div>

          </div>

          <div className="row text-center mt-4">

            <div className="col-md-4">
              <h5>₹1,20,000</h5>
              <small>Estimated Cost</small>
            </div>

            <div className="col-md-4">
              <h5>12 Days</h5>
              <small>Estimated Timeline</small>
            </div>

            <div className="col-md-4">
              <h5>97%</h5>
              <small>AI Confidence</small>
            </div>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="report-card mt-5">

          <h3>Quick Actions</h3>

          <div className="row g-3 mt-2">

            <div className="col-md-3">
              <button className="btn btn-primary w-100">
                <FaPlusCircle className="me-2"/>
                New Analysis
              </button>
            </div>

            <div className="col-md-3">
              <button className="btn btn-success w-100">
                <FaUpload className="me-2"/>
                Upload File
              </button>
            </div>

            <div className="col-md-3">
              <button className="btn btn-warning w-100">
                <FaDownload className="me-2"/>
                Generate PDF
              </button>
            </div>

            <div className="col-md-3">
              <button className="btn btn-dark w-100">
                <FaHistory className="me-2"/>
                History
              </button>
            </div>

          </div>

        </div>

        {/* Charts */}

        <div className="row mt-5">

          <div className="col-lg-6">

            <div className="report-card">

              <h3>Impact Distribution</h3>

              <p>Frontend</p>

              <div className="progress mb-3">
                <div className="progress-bar" style={{width:"80%"}}></div>
              </div>

              <p>Backend</p>

              <div className="progress mb-3">
                <div className="progress-bar bg-success" style={{width:"70%"}}></div>
              </div>

              <p>Database</p>

              <div className="progress mb-3">
                <div className="progress-bar bg-warning" style={{width:"60%"}}></div>
              </div>

              <p>API</p>

              <div className="progress">
                <div className="progress-bar bg-danger" style={{width:"90%"}}></div>
              </div>

            </div>

          </div>

          <div className="col-lg-6">

            <div className="report-card">

              <h3>AI Recommendation</h3>

              <ul>

                <li>Authentication module has highest dependency.</li>

                <li>Payment Gateway affects 7 modules.</li>

                <li>Estimated development effort: 12 Days.</li>

                <li>Recommended Team: Backend + Database.</li>

                <li>Overall project risk is High.</li>

              </ul>

            </div>

          </div>

        </div>

        {/* Reports */}

        <div className="report-card mt-5">

          <h3>
            <FaFileAlt className="me-2"/>
            Recent Analysis Reports
          </h3>

          <div className="table-responsive">

            <table className="table table-hover">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Requirement</th>

                  <th>Risk</th>

                  <th>Accuracy</th>

                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>REQ-001</td>
                  <td>Payment Gateway</td>
                  <td><span className="badge bg-danger">High</span></td>
                  <td>95%</td>
                  <td><span className="badge bg-success">Completed</span></td>
                </tr>

                <tr>
                  <td>REQ-002</td>
                  <td>Authentication Update</td>
                  <td><span className="badge bg-warning text-dark">Medium</span></td>
                  <td>91%</td>
                  <td><span className="badge bg-primary">Running</span></td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="row mt-5">

          <div className="col-lg-6">

            <div className="report-card">

              <h3>
                <FaCheckCircle className="text-success me-2"/>
                System Health
              </h3>

              <p>🟢 AI Engine Online</p>
              <p>🟢 Database Connected</p>
              <p>🟢 ML Model Active</p>
              <p>🟢 API Running</p>

            </div>

          </div>

          <div className="col-lg-6">

            <div className="report-card">

              <h3>
                <FaClock className="text-primary me-2"/>
                Recent Activity
              </h3>

              <p>09:30 Requirement Uploaded</p>
              <p>09:31 AI Started</p>
              <p>09:33 Dependencies Detected</p>
              <p>09:35 PDF Generated</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;