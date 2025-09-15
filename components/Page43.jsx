import React from "react";
import IPOCard from "../components/IPOCard"
import "../App.css";

import lgLogo from "../assets/LGlogo.png";
import heroLogo from "../assets/Herologo.png";
import tataLogo from "../assets/Tatacapitallogo.png";
import offerprice from "../assets/offer_price.png";
import lotSize from "../assets/lot_size.png";
import expPremium from "../assets/exp_premium.png";

function Page43() {
  return (
    <div className="app-container">
      <div className="left-section">
        {/* Left IPO cards */}<h2 className="buyback-title">Issue Closed</h2>
        <IPOCard
          logo={lgLogo}
          name="LG Electronics India"
          offerDate="TBA-TBA"
          logos={offerprice}
          names="dot"
          log={lotSize}
          namee="dot"
          exp={expPremium}
          nameee="dot"
          offerPrice="NA"
          lotSize="NA"
          subscription="NA"
        />
        <IPOCard
          logo={heroLogo}
          name="Hero Motors"
          offerDate="TBA-TBA"
          logos={offerprice}
          names="dot"
          log={lotSize}
          namee="dot"
          exp={expPremium}
          nameee="dot"
          offerPrice="NA"
          lotSize="NA"
          subscription="NA"
        />
        <IPOCard
          logo={tataLogo}
          name="Tata Capital"
          offerDate="TBA-TBA"
          logos={offerprice}
          names="dot"
          log={lotSize}
          namee="dot"
          exp={expPremium}
          nameee="dot"
          offerPrice="NA"
          lotSize="NA"
          subscription="NA"
        />
        <IPOCard
          logo={lgLogo}
          name="LG Electronics India"
          offerDate="TBA-TBA"
          logos={offerprice}
          names="dot"
          log={lotSize}
          namee="dot"
          exp={expPremium}
          nameee="dot"
          offerPrice="NA"
          lotSize="NA"
          subscription="NA"
        />
        </div>
    </div>
  );
}
export default Page43;