import React from "react";
import "../App.css";

const IPOCard42 = ({ logo, name, accountOpening, accountMaintenance, equityDelivery, equityIntraday, offerPrice, lotSize,subscription, lightbluedot }) => {
  return (
    <div className="ipo-card42">
      {/* Top Section with Logo + Name */}
      <div className="ipo-card42-top">
        <img src={logo} alt={name} className="ipo-logo42" />
        <h3>{name}</h3>
        <div className="ipo-button">
        <button className="view-btn42">View Details</button>
        <button className="open-btn42">Open Account</button>
        </div>
        </div>

      {/* Buttons Row */}
      <div className="ipo-card42-buttons">
        <span className="ipo-pill">Equity</span>
        <span className="ipo-pill">Commodity</span>
        <span className="ipo-pill">Currency</span>
        <span className="ipo-pill">Futures</span>
        <span className="ipo-pill">Options</span>
      </div>
        
      {/* Account Details */}
      <div className="ipo-card42-details">
        <p><img src="" alt="" />Account Opening: {accountOpening}</p>
        <p>Account Maintenance: {accountMaintenance}</p>
        <p>Equity Delivery: {equityDelivery}</p>
        <p>Equity Intraday: {equityIntraday}</p>
      </div>
      
      {/* Action Buttons
      <div className="ipo-card42-actions">
        <button className="view-btn42">View Details</button>
        <button className="open-btn42">Open Account</button>
      </div> */}
    </div>
  );
};

export default IPOCard42;
