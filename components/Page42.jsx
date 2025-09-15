import React from "react";
import IPOCard42 from "../components/IPOCard42"
import RightCard from "../components/RightCard"
import "../App.css";

// Import your images
import zerodhaLogo from "../assets/zerodhalogo (2).png";
import zerodhaLogo1 from "../assets/Zerodha1logo.png";
import angelLogo from "../assets/Angelonelogo.png";
import angelLogo1 from "../assets/angelonelogo (2).png";
import upstoxLogo from "../assets/upstoxlogo (2).png";
import upstoxLogo1 from "../assets/Upstoxlogo.png";
import dhanLogo from "../assets/dhanlogo.png";
import growwLogo from "../assets/growlogo.png";
import kotakLogo from "../assets/kotaklogo.png";
import offerprice from "../assets/offer_price.png";
import lotSize from "../assets/lot_size.png";
import expPremium from "../assets/exp_premium.png";
import lightbluedot from "../assets/lightbluedot.png";

function Page42() {
  return (
    <div className="app-container1">
      {/* Left Section */}
      <div className="left-section1">
        <IPOCard42
          logo={zerodhaLogo}
          name="Zerodha"
          accountOpening="Free"
          accountMaintenance="₹300"
          equityDelivery="Zero"
          equityIntraday="0.03%"
          offerPrice="NA"
          lotSize="NA"
          subscription="NA"
          lightbluedot="NA"
        />
        <IPOCard42
          logo={angelLogo1}
          name="Angel One"
          accountOpening="Free"
          accountMaintenance="₹300"
          equityDelivery="Zero"
          equityIntraday="0.03%"
          offerPrice="NA"
          lotSize="NA"
          subscription="NA"
        />
        <IPOCard42
          logo={upstoxLogo}
          name="Upstox"
          accountOpening="Free"
          accountMaintenance="₹300"
          equityDelivery="Zero"
          equityIntraday="0.03%"
          offerPrice="NA"
          lotSize="NA"
          subscription="NA"
        />
        <IPOCard42
          logo={dhanLogo}
          name="Dhan"
          accountOpening="Free"
          accountMaintenance="₹300"
          equityDelivery="Zero"
          equityIntraday="0.03%"
          offerPrice="NA"
          lotSize="NA"
          subscription="NA"
        />
        <IPOCard42
          logo={growwLogo}
          name="Groww"
          accountOpening="Free"
          accountMaintenance="₹300"
          equityDelivery="Zero"
          equityIntraday="0.03%"
          offerPrice="NA"
          lotSize="NA"
          subscription="NA"
        />
        <IPOCard42
          logo={kotakLogo}
          name="Kotak Securities"
          accountOpening="Free"
          accountMaintenance="₹300"
          equityDelivery="Zero"
          equityIntraday="0.03%"
          offerPrice="NA"
          lotSize="NA"
          subscription="NA"
        />
      </div>

      {/* Right Section */}
      <div className="right-section">
      <RightCard
          title="Angel One"
          header={"Angel One"}
          image={angelLogo}
          link="#"
        />
        <RightCard
          title="Zerodha"
          header={"Zerodha"}
          image={zerodhaLogo1}
          link="#"
        />
        <RightCard
          title="Upstox"
          header={"Upstox"}
          image={upstoxLogo1}
          link="#"
          />
          </div>
        </div>
  );
}

export default Page42;