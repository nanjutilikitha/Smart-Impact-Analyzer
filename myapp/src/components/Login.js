import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaRobot
} from "react-icons/fa";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {

    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter Email and Password");
      return;
    }

    // Temporary Login
    navigate("/dashboard");
  };

  return (

    <section className="login-section">

      <div className="container">

        <div className="row justify-content-center align-items-center min-vh-100">

          <div className="col-lg-5 col-md-8">

            <div
              className="login-card"
              data-aos="zoom-in"
            >

              <div className="text-center mb-4">

                <div className="login-logo">

                  <FaRobot />

                </div>

                <h2 className="fw-bold mt-3">
                  Smart Impact Analyzer
                </h2>

                <p className="text-muted">
                  AI Requirement Change Impact Analysis
                </p>

              </div>

              <form onSubmit={handleLogin}>

                <div className="mb-3">

                  <label>Email Address</label>

                  <div className="input-group">

                    <span className="input-group-text">

                      <FaEnvelope />

                    </span>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />

                  </div>

                </div>

                <div className="mb-3">

                  <label>Password</label>

                  <div className="input-group">

                    <span className="input-group-text">

                      <FaLock />

                    </span>

                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />

                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >

                      {showPassword ? <FaEyeSlash/> : <FaEye/>}

                    </button>

                  </div>

                </div>

                <div className="d-flex justify-content-between mb-4">

                  <div>

                    <input type="checkbox" />

                    <span className="ms-2">
                      Remember Me
                    </span>

                  </div>

                  <a href="#">
                    Forgot Password?
                  </a>

                </div>

                <button
                  className="btn btn-primary w-100 login-btn"
                  type="submit"
                >

                  Login

                </button>

              </form>

              <div className="text-center mt-4">

                <Link to="/">
                  ← Back to Home
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Login;