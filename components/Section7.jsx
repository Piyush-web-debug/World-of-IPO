import React from "react";
import studioLsdLogo from "./assets/studio_lsd.png";

export default function Section7() {
  return (
    <>
    {/* Page 7 Header */}
          <div className="d-flex page7-container">
            {/* Left Side Text */}
            <div className="text-start left-section">
              <div className="card status-card purple">
                <div className="card-body">Pending</div>
              </div>
              <div className="card status-card violet">
                <div className="card-body">Pending</div>
              </div>
              <div className="card status-card pink">
                <div className="card-body">Pending</div>
              </div>
    
              <div className="allotment-text">
                <div className="fw-bold allotment-title">Allotment Status</div>
                <div className="allotment-desc">
                  Analyze your performance and create gorgeous report. Analyze your
                  performance and create gorgeous report. Analyze your performance
                  and create gorgeous report. Analyze your performance and create
                  gorgeous report. Analyze your performance and create gorgeous
                  report. Analyze your performance and create gorgeous report.
                </div>
              </div>
            </div>
    
            {/* Right Side Card */}
            <div className="card right-section">
              <div className="img-box">
                <img
                  src={studioLsdLogo}
                  className="card-img-top"
                  id="image"
                  alt="IPO Picture"
                />
              </div>
              <div className="card-body input-group">
                <select
                  className="form-select ipo-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                >
                  <option defaultValue>Select IPO</option>
                  <option value="ipo1">Vikram Solar</option>
                  <option value="ipo2">Gem Aromatics</option>
                  <option value="ipo3">
                    Patel Retail Limited Trust & Togetherness
                  </option>
                  <option value="ipo4">ShreeJi Shipping Global Limited</option>
                  <option value="ipo5">Jinkushal Industries Limited</option>
                  <option value="ipo6">Studio LSD</option>
                </select>
              </div>
    
              <input
                className="ipo-input"
                type="text"
                placeholder="Enter PAN or Aadhar Number"
              />
              <button className="btn check-btn">Check Status</button>
            </div>
          </div>
    </>
  );
}