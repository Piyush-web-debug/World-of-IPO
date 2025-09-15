import React from "react";
import vikramSolarLogo from "./assets/Vikram_Solar_logo.svg.png";
import gemAromaticsLogo from "./assets/gem-aromatics.webp";
import patelRetailLogo from "./assets/PatelRetailLtd.png";
import shreejiLogo from "./assets/SHREEJISPG.png";
import jinkushalLogo from "./assets/jinkushal_industries_limited.png";
import studioLsdLogo from "./assets/studio_lsd.png";
import calendarIcon from "./assets/calendar.png";

export default function Section5() {
  return (
    <>
    {/*Page5*/}
        <div id="ipocalendar" className="text-center">
            <div id="header5" className="fw-bold">
              IPO Calendar
            </div>
          </div>
    
          <div className="row justify-content-center mt-3">
            <div className="col-md-4 mb-3">
              <div className="card calendar-card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="date-label">Start Date</p>
                    <b>2025-08-18</b>
                  </div>
                  <img src={calendarIcon} alt="calendar_logo" className="calendar-icon" />
                </div>
              </div>
            </div>
    
            <div className="col-md-4 mb-3">
              <div className="card calendar-card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="date-label">End Date</p>
                    <b>2025-08-25</b>
                  </div>
                  <img src={calendarIcon} alt="calendar_logo" className="calendar-icon" />
                </div>
              </div>
            </div>
          </div>
    
          {/* IPO Calendar Table */}
          <div className="table-responsive mt-4">
            <table className="table table-hover text-center ipo-table">
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Symbol</th>
                  <th>Expected Price</th>
                  <th>Expected Date</th>
                  <th>Shares (in Lakhs)</th>
                  <th>Volume (₹ Cr)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-start">VikramSolar</td>
                  <td><img src={vikramSolarLogo} alt="Vikramsolar" width="50" /></td>
                  <td>₹315-332</td>
                  <td>19-Aug-2025</td>
                  <td>45</td>
                  <td>45</td>
                  <td>Mainboard</td>
                </tr>
                <tr>
                  <td className="text-start">Gem Aromatics</td>
                  <td><img src={gemAromaticsLogo} alt="gem-aromatics" width="50" /></td>
                  <td>₹309-325</td>
                  <td>19-Aug-2025</td>
                  <td>46</td>
                  <td>46</td>
                  <td>Mainboard</td>
                </tr>
                <tr>
                  <td className="text-start">Patel Retail Limited Trust & Togetherness</td>
                  <td><img src={patelRetailLogo} alt="PatelRetailLtd" width="50" /></td>
                  <td>₹237-255</td>
                  <td>19-Aug-2025</td>
                  <td>58</td>
                  <td>58</td>
                  <td>Mainboard</td>
                </tr>
                <tr>
                  <td className="text-start">ShreeJi Shipping Global Limited</td>
                  <td><img src={shreejiLogo} alt="ShreeJi" width="50" /></td>
                  <td>₹240-252</td>
                  <td>19-Aug-2025</td>
                  <td>58</td>
                  <td>58</td>
                  <td>Mainboard</td>
                </tr>
                <tr>
                  <td className="text-start">Jinkushal Industries Limited</td>
                  <td><img src={jinkushalLogo} alt="jinkushal_industries_limited" width="50" /></td>
                  <td>₹480-500</td>
                  <td>19-Aug-2025</td>
                  <td>28</td>
                  <td>28</td>
                  <td>Mainboard</td>
                </tr>
                <tr>
                  <td className="text-start">Studio LSD</td>
                  <td><img src={studioLsdLogo} alt="studio_lsd" width="50" /></td>
                  <td>₹48-51</td>
                  <td>18-Aug-2025</td>
                  <td>2000</td>
                  <td>2000</td>
                  <td>Mainboard</td>
                </tr>
              </tbody>
            </table>
          </div>
    
          {/* View More button */}
          <div className="text-center mt-4">
            <button className="btn view-more-btn" type="button" data-bs-toggle="dropdown">
              View More &nbsp;<b className="bi bi-chevron-down"></b>
            </button>
          </div>
    </>
  );
}