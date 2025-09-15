import React from "react";
import vikramSolarLogo from './assets/Vikram_Solar_logo.svg.png';
import gemAromaticsLogo from "./assets/gem-aromatics.webp";
import patelRetailLogo from "./assets/PatelRetailLtd.png";
import shreejiLogo from "./assets/SHREEJISPG.png";
import jinkushalLogo from "./assets/jinkushal_industries_limited.png";
import studioLsdLogo from "./assets/studio_lsd.png";
import heartLogo from "./assets/heart_logo.png";
import offerPriceIcon from "./assets/offer_price.png";
import lotSizeIcon from "./assets/lot_size.png";
import expPremiumIcon from "./assets/exp_premium.png";

export default function Section2() {
  return (
    <>
    {/*Page 2*/}
        <div id="page2" className="container py-4">
          {/* Header */}
          <h2 id="ipo-header2" className="fw-bold">
            Initial Public Offerings
          </h2>
          <p id="content" className="fw-normal mx-5">
            We offer a variety of interesting features that help increase your
            productivity at work and manage your project easily.
          </p>
    
          {/* Navbar */}
          <nav id="navbar" className="navbar justify-content-left my-3">
            <form className="d-flex flex-wrap justify-content-center">
              <button id="trendingipo" className="ipo-btn" type="button">
                Trending IPOs
              </button>
              <button id="currentipo" className="ipo-btn" type="button">
                Current IPOs
              </button>
              <button id="upcomingipo" className="ipo-btn" type="button">
                Upcoming IPOs
              </button>
              <button id="pastipo" className="ipo-btn" type="button">
                Past IPOs
              </button>
            </form>
          </nav>
    
          {/* IPO Cards */}
          <div className="container my-5">
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-md-4 col-sm-6">
                <div className="card ipo-card">
                  <div className="ipo-card-header small-header">
                    <img src={vikramSolarLogo} alt="logo" className="ipo-logo" />
                    Vikramsolar
                    <p className="ipo-date">Aug 19, 2025 - Aug 21, 2025</p>
                    <br />
                    <div className="favourite">
                      Add to Favourites{" "}
                      <img src={heartLogo} alt="heart" className="heart-icon" />
                    </div>
                  </div>
                  <div className="ipo-detail">
                    <img src={offerPriceIcon} alt="" />
                    Offer Price <span>₹315-332</span>
                  </div>
                  <div className="ipo-detail">
                    <img src={lotSizeIcon} alt="" />
                    Lot Size <span>45</span>
                  </div>
                  <div className="ipo-detail">
                    <img src={expPremiumIcon} alt="" />
                    Exp. Premium <span>35%</span>
                  </div>
                  <hr />
                  <p className="ipo-note">
                    • Pre-Apply Open. The mandate will be received when the IPO
                    starts.
                  </p>
                  <button className="btn view-btn">View</button>
                </div>
              </div>
    
              {/* Card 2 */}
              <div className="col-md-4 col-sm-6">
                <div className="card ipo-card">
                  <div className="ipo-card-header small-header">
                    <img src={gemAromaticsLogo} alt="logo" className="ipo-logo" />
                    GEM AROMATICS
                    <p className="ipo-date">Aug 19, 2025 - Aug 21, 2025</p>
                    <br />
                    <div className="favourite">
                      Add to Favourites{" "}
                      <img src={heartLogo} alt="heart" className="heart-icon" />
                    </div>
                  </div>
                  <div className="ipo-detail">
                    <img src={offerPriceIcon} alt="" />
                    Offer Price <span>₹309-325</span>
                  </div>
                  <div className="ipo-detail">
                    <img src={lotSizeIcon} alt="" />
                    Lot Size <span>46</span>
                  </div>
                  <div className="ipo-detail">
                    <img src={expPremiumIcon} alt="" />
                    Exp. Premium <span>35%</span>
                  </div>
                  <hr />
                  <p className="ipo-note">
                    • Pre-Apply Open. The mandate will be received when the IPO
                    starts.
                  </p>
                  <button className="btn view-btn">View</button>
                </div>
              </div>
    
              {/* Card 3 */}
              <div className="col-md-4 col-sm-6">
                <div className="card ipo-card">
                  <div className="ipo-card-header small-header">
                    <img src={patelRetailLogo} alt="logo" className="ipo-logo" />
                    PATEL RETAIL LIMITED TRUST & TOGETHERNESS
                    <p className="ipo-date">Aug 19, 2025 - Aug 21, 2025</p>
                    <br />
                    <div className="favourite">
                      Add to Favourites{" "}
                      <img src={heartLogo} alt="heart" className="heart-icon" />
                    </div>
                  </div>
                  <div className="ipo-detail">
                    <img src={offerPriceIcon} alt="" />
                    Offer Price <span>₹237-255</span>
                  </div>
                  <div className="ipo-detail">
                    <img src={lotSizeIcon} alt="" />
                    Lot Size <span>58</span>
                  </div>
                  <div className="ipo-detail">
                    <img src={expPremiumIcon} alt="" />
                    Exp. Premium <span>45%</span>
                  </div>
                  <hr />
                  <p className="ipo-note">
                    • Pre-Apply Open. The mandate will be received when the IPO
                    starts.
                  </p>
                  <button className="btn view-btn">View</button>
                </div>
              </div>
    
              {/* Card 4 */}
              <div className="col-md-4 col-sm-6">
                <div className="card ipo-card">
                  <div className="ipo-card-header small-header">
                    <img src={shreejiLogo} alt="logo" className="ipo-logo" />
                    SHREEJI SHIPPING GLOBAL LIMITED
                    <p className="ipo-date">Aug 19, 2025 - Aug 21, 2025</p>
                    <br />
                    <div className="favourite">
                      Add to Favourites{" "}
                      <img src={heartLogo} alt="heart" className="heart-icon" />
                    </div>
                  </div>
                  <div className="ipo-detail">
                    <img src={offerPriceIcon} alt="" />
                    Offer Price <span>₹240-252</span>
                  </div>
                  <div className="ipo-detail">
                    <img src={lotSizeIcon} alt="" />
                    Lot Size <span>58</span>
                  </div>
                  <div className="ipo-detail">
                    <img src={expPremiumIcon} alt="" />
                    Exp. Premium <span>35%</span>
                  </div>
                  <hr />
                  <p className="ipo-note">
                    • Pre-Apply Open. The mandate will be received when the IPO
                    starts.
                  </p>
                  <button className="btn view-btn">View</button>
                </div>
              </div>
    
              {/* Card 5 */}
              <div className="col-md-4 col-sm-6">
                <div className="card ipo-card">
                  <div className="ipo-card-header small-header">
                    <img src={jinkushalLogo} alt="logo" className="ipo-logo" />
                    JinKushal Industries Limited
                    <p className="ipo-date">Mainboard, IPO Expected soon</p>
                    <br />
                    <div className="favourite">
                      Add to Favourites{" "}
                      <img src={heartLogo} alt="heart" className="heart-icon" />
                    </div>
                  </div>
                  <div className="ipo-detail">
                    <img src={offerPriceIcon} alt="" />
                    Offer Price <span>₹480-500</span>
                  </div>
                  <div className="ipo-detail">
                    <img src={lotSizeIcon} alt="" />
                    Lot Size <span>28</span>
                  </div>
                  <div className="ipo-detail">
                    <img src={expPremiumIcon} alt="" />
                    Exp. Premium <span>35%</span>
                  </div>
                  <hr />
                  <p className="ipo-note">
                    • Pre-Apply Open. The mandate will be received when the IPO
                    starts.
                  </p>
                  <button className="btn view-btn">View</button>
                </div>
              </div>
    
              {/* Card 6 */}
              <div className="col-md-4 col-sm-6">
                <div className="card ipo-card">
                  <div className="ipo-card-header small-header">
                    <img src={studioLsdLogo} alt="logo" className="ipo-logo" />
                    Studio LSD
                    <p className="ipo-date">Aug 18, 2025 - Aug 25, 2025</p>
                    <br />
                    <div className="favourite">
                      Add to Favourites{" "}
                      <img src={heartLogo} alt="heart" className="heart-icon" />
                    </div>
                  </div>
                  <div className="ipo-detail">
                    <img src={offerPriceIcon} alt="" />
                    Offer Price <span>₹48-51</span>
                  </div>
                  <div className="ipo-detail">
                    <img src={lotSizeIcon} alt="" />
                    Lot Size <span>2000</span>
                  </div>
                  <div className="ipo-detail">
                    <img src={expPremiumIcon} alt="" />
                    Exp. Premium <span>35%</span>
                  </div>
                  <hr />
                  <p className="ipo-note">
                    • Pre-Apply Open. The mandate will be received when the IPO
                    starts.
                  </p>
                  <button className="btn view-btn">View</button>
                </div>
              </div>
            </div>
          </div>
    
          {/* View All Button */}
          <div id="viewallbtn" className="text-center mt-5">
            <button className="btn btn-dark rounded-pill view-all-btn">
              View All
            </button>
          </div>
        </div>
    
    </>
  );
}