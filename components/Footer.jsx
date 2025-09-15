import React from "react";

export default function Footer() {
  return (
    <>
    {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* Logo */}
            <div className="col-md-3 mb-4">
              <div className="logo-box fw-bold">World of IPO</div>
            </div>

            {/* Product */}
            <div className="col-md-2 mb-4">
              <h5 className="footer-heading">Product</h5>
              <ul className="list-unstyled footer-links">
                <li>Autocapture</li>
                <li>Data Governance</li>
                <li>Virtual Events</li>
                <li>Virtual Users</li>
                <li>Behavioral Analytics</li>
                <li>Connect</li>
              </ul>
            </div>

            {/* Explore */}
            <div className="col-md-2 mb-4">
              <h5 className="footer-heading">Explore</h5>
              <ul className="list-unstyled footer-links">
                <li>Resources</li>
                <li>Blog</li>
                <li>Documents</li>
              </ul>
            </div>

            {/* Office & Newsletter */}
            <div className="col-md-5">
              <h5 className="footer-heading">OFFICE LOCATION</h5>
              <p className="footer-text">
                ABC Company, 123 East, 17th Street, St. louis 10001
              </p>

              <h5 className="footer-heading mt-4">Newsletter</h5>
              <div className="input-group mb-3 newsletter-box">
                <input
                  type="email"
                  className="form-control newsletter-input"
                  placeholder="Enter your email address"
                />
                <span className="input-group-text newsletter-icon bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#0081FE"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4zm0 1.383v6.634l5.803-3.483L0 5.383zM6.761 9.674 0 13.617V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.383l-6.761-3.943L8 10.383l-1.239-.709zM10.197 8.534 16 12.617V5.383l-5.803 3.151z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="row footer-bottom align-items-center">
            <div className="col-md-4">
              <a href="mailto:ABC@gmail.com" className="email-link">
                ABC@gmail.com
              </a>
            </div>
            <div className="col-md-4 text-left">
              <a href="tel:1234567890" className="phone-link">
                (123) 456-7890
              </a>
            </div>
            <div className="col-md-4 text-end copyright">
              &copy; 2022 ABC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      </>
  );
}