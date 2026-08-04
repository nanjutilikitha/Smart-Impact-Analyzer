import React from "react";
import {
  FaClipboardList,
  FaProjectDiagram,
  FaExclamationTriangle,
  FaRobot,
  FaChartLine,
  FaFileAlt,
  FaCheckCircle,
  FaClock
} from "react-icons/fa";

function Dashboard() {
  return (
    <section id="dashboard" className="dashboard-section">

      <div className="container">

        {/* Heading */}

        <div className="text-center mb-5">

          <h1 className="dashboard-title">
            Smart Impact Analyzer Dashboard
          </h1>

          <p className="dashboard-subtitle">
            Monitor AI-powered software impact analysis and prediction reports.
          </p>

        </div>

        {/* Dashboard Cards */}

        <div className="row g-4">

          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card">

              <FaClipboardList className="dashboard-icon text-primary" />

              <h2>120</h2>

              <p>Requirements</p>

            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card">

              <FaRobot className="dashboard-icon text-success" />

              <h2>95%</h2>

              <p>Prediction Accuracy</p>

            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card">

              <FaProjectDiagram className="dashboard-icon text-warning" />

              <h2>35</h2>

              <p>Affected Modules</p>

            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card">

              <FaExclamationTriangle className="dashboard-icon text-danger" />

              <h2>High</h2>

              <p>Risk Level</p>

            </div>
          </div>

        </div>

        {/* AI Summary */}

        <div className="report-card mt-5">

          <h3>

            <FaChartLine className="me-2" />

            AI Prediction Summary

          </h3>

          <p>
            The AI engine predicts that the latest requirement changes
            mainly affect Authentication, Payment, Database and Notification
            modules.
          </p>

          <div className="mt-4">

            <h6>Prediction Accuracy</h6>

            <div className="progress">

              <div
                className="progress-bar bg-success"
                style={{ width: "95%" }}
              >
                95%
              </div>

            </div>

          </div>

          <div className="mt-4">

            <h6>Risk Level</h6>

            <div className="progress">

              <div
                className="progress-bar bg-danger"
                style={{ width: "80%" }}
              >
                High Risk
              </div>

            </div>

          </div>

        </div>

        {/* Recent Reports */}

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

                  <th>Module</th>

                  <th>Risk</th>

                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>REQ-001</td>

                  <td>Payment Gateway Integration</td>

                  <td>Payment</td>

                  <td>

                    <span className="badge bg-danger">

                      High

                    </span>

                  </td>

                  <td>

                    <span className="badge bg-success">

                      Completed

                    </span>

                  </td>

                </tr>

                <tr>

                  <td>REQ-002</td>

                  <td>User Authentication Update</td>

                  <td>Authentication</td>

                  <td>

                    <span className="badge bg-warning text-dark">

                      Medium

                    </span>

                  </td>

                  <td>

                    <span className="badge bg-primary">

                      Running

                    </span>

                  </td>

                </tr>

                <tr>

                  <td>REQ-003</td>

                  <td>Notification Service</td>

                  <td>Messaging</td>

                  <td>

                    <span className="badge bg-info">

                      Low

                    </span>

                  </td>

                  <td>

                    <span className="badge bg-success">

                      Completed

                    </span>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* System Status */}

        <div className="row mt-5 g-4">

          <div className="col-md-6">

            <div className="report-card">

              <h3>

                <FaCheckCircle className="text-success me-2"/>

                System Status

              </h3>

              <p>✔ AI Engine : Online</p>

              <p>✔ Database : Connected</p>

              <p>✔ Machine Learning Model : Active</p>

              <p>✔ Prediction Service : Running</p>

            </div>

          </div>

          <div className="col-md-6">

            <div className="report-card">

              <h3>

                <FaClock className="text-primary me-2"/>

                Recent Activity

              </h3>

              <p>09:30 AM - Requirement Uploaded</p>

              <p>09:31 AM - AI Prediction Completed</p>

              <p>09:33 AM - Risk Analysis Generated</p>

              <p>09:35 AM - Report Downloaded</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;