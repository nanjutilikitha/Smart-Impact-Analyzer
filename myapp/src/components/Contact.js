import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
  FaHeadset,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section py-5">

      <div className="container">

        {/* Heading */}

        <div className="text-center mb-5">

          <h1 className="fw-bold text-primary display-5">
            Contact Us
          </h1>

          <p className="lead text-muted">
            We'd love to hear from you. Send us your questions,
            suggestions, or feedback.
          </p>

        </div>

        <div className="row g-5">

          {/* LEFT SIDE */}

          <div className="col-lg-5">

            <div className="contact-card shadow-lg">

              <h3 className="mb-4">
                Get In Touch
              </h3>

              <div className="contact-item">

                <FaEnvelope className="contact-icon text-primary"/>

                <div>

                  <h6>Email</h6>

                  <p>smartimpact@gmail.com</p>

                </div>

              </div>

              <div className="contact-item">

                <FaPhoneAlt className="contact-icon text-success"/>

                <div>

                  <h6>Phone</h6>

                  <p>+91 98765 43210</p>

                </div>

              </div>

              <div className="contact-item">

                <FaMapMarkerAlt className="contact-icon text-danger"/>

                <div>

                  <h6>Location</h6>

                  <p>Hyderabad, Telangana, India</p>

                </div>

              </div>

              <div className="contact-item">

                <FaClock className="contact-icon text-warning"/>

                <div>

                  <h6>Working Hours</h6>

                  <p>Mon - Sat : 9:00 AM - 6:00 PM</p>

                </div>

              </div>

              <hr />

              <h5 className="mb-3">
                AI Support
              </h5>

              <p>

                <FaHeadset className="me-2 text-primary"/>

                AI Assistant available 24/7 for Requirement Analysis.

              </p>

              <div className="social-icons mt-4">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="col-lg-7">

            <div className="contact-form shadow-lg">

              <h3 className="mb-4">
                Send Message
              </h3>

              <form>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />

                  </div>

                </div>

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Subject"
                />

                <textarea
                  rows="6"
                  className="form-control mb-4"
                  placeholder="Write your message..."
                ></textarea>

                <button className="btn btn-primary btn-lg px-5">

                  <FaPaperPlane className="me-2"/>

                  Send Message

                </button>

              </form>

            </div>

          </div>

        </div>

        {/* Google Map */}

        <div className="map-section mt-5">

          <div className="map-card shadow-lg">

            <h3 className="text-center mb-4">

              Our Location

            </h3>

            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "15px" }}
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;