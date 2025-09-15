import React from "react";
import nsdlLogo from "./assets/nsdl.png";

export default function Section3() {
  return (
    <>
    {/*Page 3*/}
         <div className="page3-container">
          {/* Left Side Text */}
          <div className="page3-text">
            <h2 id="header3">
              Featured <span className="highlight">IPO</span>
            </h2>
    
            <div id="nsdl" className="ipo-tag">
              National Securities Depository Limited (NSDL)
            </div>
    
            <div id="content" className="ipo-description mx-5">
              <p>
                National Securities Depository Limited (NSDL) is India’s leading
                market infrastructure institution, registered with SEBI. Since the
                Depositories Act of 1996, NSDL has transformed the securities
                market by introducing dematerialisation in November 1996 — a major
                milestone in India’s financial history.
              </p>
              <p>
                As a central depository, NSDL provides a secure and efficient
                platform for investors and market participants. It also drives
                innovation through services like e-voting, consolidated account
                statements (CAS), and non-disposal undertakings (NDU), making
                investing simpler and more reliable.
              </p>
            </div>
    
            <div id="learnmorebtn">
              <button className="learn-btn">Learn More</button>
            </div>
          </div>
    
          {/* Right Side Card */}
          <div className="ipo-card">
            <div className="card-body">
              <div className="card-title">
                <img src={nsdlLogo} alt="nsdl logo" />
                <div>
                  NSDL
                  <p className="card-date">Jun 13, 2025 - Jun 17, 2025</p>
                </div>
              </div>
    
              <div id="mainboard" className="ipo-badge">
                Mainboard
              </div>
              <hr />
    
              <div className="ipo-detail">
                Open Date <span>13 Jun, 2025</span>
              </div>
              <div className="ipo-detail">
                Close Date <span>17 Jun, 2025</span>
              </div>
              <div className="ipo-detail">
                Allotment Date <span>18 Jun, 2025</span>
              </div>
              <div className="ipo-detail">
                Listing Date <span>20 Jun, 2025</span>
              </div>
              <div className="ipo-detail">
                Issue Price <span>₹584-614/equity share</span>
              </div>
              <div className="ipo-detail">
                Face Value <span>₹1 Per Equity Share</span>
              </div>
              <div className="ipo-detail">
                Listing at Group <span>BSE, NSE</span>
              </div>
    
              <p className="ipo-note">
                • Pre-Apply Open. The mandate will be received when the IPO starts.
              </p>
            </div>
          </div>
        </div>
    
    </>
  );
}