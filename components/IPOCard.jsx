import React from "react";
import "../App.css";

const IpoCard = ({ logo, name, offerDate,logos,log,exp,names,namee,nameee,offerPrice, lotSize, subscription }) => {
  return (
    <div className="ipo-card1">
      {/* Top Right Buttons */}
      <div className="ipo-button">
        <button className="ipo-btn2">BSE</button>
        <button className="ipo-btn2">NSE</button>
      </div>

      {/* Card Content */}
      <div className="ipo-card-content">
        <img src={logo} alt={name} className="ipo-logo1" />
        <div className="ipo-details">
          <h3>{name}</h3>
          <p>Offer Date: {offerDate}</p><br/>
          <p id="ipo-detail"><img id="logos" src={logos} alt={names} />Offer Price: {offerPrice}</p><br/>
          <p id="ipo-detail"><img id="logos" src={log} alt={namee} />Lot Size: {lotSize}</p><br/>
          <p id="ipo-detail"><img id="logos" src={exp} alt={nameee} />Subscription: {subscription}</p>
        </div>
      </div>

      {/* Bottom Right View Button */}
      <div className="ipo-view-btn1">
        <button className="view-btn1">View</button>
      </div>
    </div>
  );
};

export default IpoCard;
