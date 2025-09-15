import React from "react";
import IPOCard from "../components/IPOCard"
import RightCard from "../components/RightCard"
import "../App.css";

import lgLogo from "../assets/LGlogo.png";
import heroLogo from "../assets/Herologo.png";
import tataLogo from "../assets/Tatacapitallogo.png";
import angelOne from "../assets/Angelonelogo.png";
import zerodha from "../assets/Zerodha1logo.png";
import upstox from "../assets/Upstoxlogo.png";
import offerprice from "../assets/offer_price.png";
import lotSize from "../assets/lot_size.png";
import expPremium from "../assets/exp_premium.png";

function Page32() {
  return (
    <div className="app-container">
      <div className="left-section">
        {/* Left IPO cards */}
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

        <div className="right-section">
        {/* Right Ads/Info cards */}
        <RightCard
          title="Angel One"
          header={"Angel One"}
          image={angelOne}
          link="#"
        />
        <RightCard
          title="Zerodha"
          header={"Zerodha"}
          image={zerodha}
          link="#"
        />
        <RightCard
          title="Upstox"
          header={"Upstox"}
          image={upstox}
          link="#"
        />
      </div>
    </div>
  );
}
export default Page32;