import React from "react";
import "../App.css";
// ✅ Import your images here
import sharebuyback from "../assets/sharebuyback.png";
import whatisbuyback from "../assets/whatisbuyback.png";
import tender from "../assets/tender.png";
import openmarket from "../assets/openmarket.png";
import whydologo from "../assets/whydologo.png";
import typesofbuyback from "../assets/typesofbuyback.png";
import unlock from "../assets/Unlockcapitallogo.png";
import accelerate from "../assets/Acceleratebusinesslogo.png";
import launch from "../assets/Launchnewlogo.png";
import strenghten from "../assets/Strenghtenlogo.png";

const Page44 = () => {
  return (
    <section className="buyback-section">
      <h2 className="buyback-title">About Buyback</h2>

      {/* Section 1 */}
      <div className="buyback-grid">
        <div className="buyback-card">
          <h3 id="title">
            <img src={sharebuyback} alt="Share Buybacks" className="buyback-image" />
            Share Buybacks: Enhancing Value Through Strategic Repurchases
            </h3>
          <p className="ipo-text">
            Share buybacks are a key financial strategy used by companies to strengthen their capital structure, 
            boost shareholder value, and signal long-term confidence in their stock. At World of IPO, we break down 
            everything you need to know—covering the benefits, mechanisms, and upcoming buyback updates across India.
          </p>
        </div>

        <div className="buyback-card">
          <h3 id="title"><img src={whatisbuyback} alt="What is Buyback" className="buyback-image" />What is a Share Buyback?</h3>
          <p className="ipo-text">
            A share buyback, or stock repurchase, occurs when a company buys back its own shares from existing 
            shareholders. This is typically done via two methods: a tender offer or an open market purchase. 
            Buybacks are generally seen as a sign that the company believes its shares are undervalued—sending a 
            strong signal to the market about future potential.<br /><br />
          </p>
          <p className="small-text ipo-text">
            Key factors to watch in a buyback include the <strong>buyback price</strong>, <strong>record date</strong>,
            and <strong>acceptance ratio</strong>, all of which impact investor returns.
          </p>
        </div>
      </div>

      {/* Section 2 - Types */}
      <div className="buyback-card full-width">
        <h3 id="title"><img src={typesofbuyback} alt="Tyeps of Share Buyback" />Types of Share Buybacks</h3>
        <p className="ipo-text">
            Companies disclose these details well in advance, enabling shareholders to evaluate participation.
        </p>

        <div className="buyback-types">
          <div className="type-card">
            <img src={tender} alt="Tender Offer" className="type-image" />
            <h4 id="title">Tender Offer</h4>
            <p className="ipo-text">
              The company offers to buy back shares at a predetermined price—usually higher than the current market 
              price. Investors must submit (or “tender”) their shares during the specified window.
            </p>
          </div>

          <div className="type-card">
            <img src={openmarket} alt="Open Market Purchase" className="type-image" />
            <h4 id="title">Open Market Purchase</h4>
            <p className="ipo-text">
              The company buys back shares directly from the stock market over a defined time period, using 
              prevailing market prices.
              Companies disclose these details well in advance, enabling shareholders to evaluate participation.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 - Why Buybacks */}
      <div className="buyback-wrapper">
      <div className="buyback-card">
      <h3 id="title" className="buyback-heading">
        <img src={whydologo} alt="whydo"  />
        Why Do Companies Buy Back Shares?
        </h3>
      <div className="reasons-grid">
        <div className="reason-item">
          <img src={unlock} alt="Cash" className="reason-icon" />
          <p className="ipo-text">
            To return surplus cash to shareholders.
        </p>
        </div>

        <div className="reason-item">
          <img src={accelerate} alt="EPS" className="reason-icon" />
          <p className="ipo-text">
            To improve earnings per share (EPS) by reducing the number of outstanding shares.
          </p>
        </div>

        <div className="reason-item">
          <img src={launch} alt="Promoter" className="reason-icon" />
          <p className="ipo-text">
            To increase promoter shareholding or consolidate control.
            </p>
        </div>

        <div className="reason-item">
          <img src={strenghten} alt="Confidence" className="reason-icon" />
          <p className="ipo-text">
            To signal confidence in the company’s intrinsic value.
            </p>
                     </div>
                 </div>
            </div>
        </div>

      {/* Section 4 - World of IPO */}
      <div className="buyback-card full-width">
        <h3 id="title">
            <img src={typesofbuyback} alt="trackbuyback" />
            How World of IPO Helps You Track Buybacks
        </h3>
        <p className="ipo-text">
            At World of IPO, we simplify the entire process by offering:
            </p>

        <div className="buyback-help">
          <div className="help-card">
            <img src={tender} alt="Real-time Alerts" className="help-image" />
            <p className="ipo-text">
                Real-time alerts on upcoming and active buybacks.
            </p>
          </div>
          <div className="help-card">
            <img src={tender} alt="Breakdown" className="help-image" />
            <p className="ipo-text">
                Detailed breakdowns including eligibility, timelines, and expected gains.
            </p>
          </div>
          <div className="help-card">
            <img src={openmarket} alt="Notifications" className="help-image" />
            <p className="ipo-text">
                Timely notifications about important dates like record date, offer opening, and closing dates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page44;
