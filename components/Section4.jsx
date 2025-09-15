import React from "react";
import simplifiedIPO from "./assets/simplified_ipo_details.png";
import dailyIPO from "./assets/daily_ipo_updates.png";
import liveStats from "./assets/livesubscriptionstats.png";
import allotmentTracking from "./assets/real-time_allotment_tracking.png";
import upcomingIPO from "./assets/upcoming_ipo_dashboard.png";
import gmpTrends from "./assets/gmp_trends.png";

export default function Section4() {
  return (
    <>
    {/*Page 4*/}
            <div className="page4">
          <h2 id="header4">
            Why Choose <span className="highlight">World of IPO</span>
          </h2>
    
          {/* Cards Section */}
          <div className="container py-5">
            <div className="row g-4 justify-content-center">
              {/* Card 1 */}
              <div className="col-md-6 col-lg-4">
                <div className="custom-card">
                  <img src={simplifiedIPO} alt="Simplified IPO" />
                  <h4 className="card-title">Simplified IPO Details</h4>
                  <p className="card-text">
                    We break down complex IPO data into bite-sized insights, so you
                    can easily understand what’s worth your attention.
                  </p>
                </div>
              </div>
    
              {/* Card 2 */}
              <div className="col-md-6 col-lg-4">
                <div className="custom-card">
                  <img src={dailyIPO} alt="Daily IPO Updates" />
                  <h4 className="card-title">Daily IPO Updates</h4>
                  <p className="card-text">
                    Get daily, accurate updates on all IPOs — from offer dates to
                    listings, all in one place.
                  </p>
                </div>
              </div>
    
              {/* Card 3 */}
              <div className="col-md-6 col-lg-4">
                <div className="custom-card">
                  <img src={liveStats} alt="Live Stats" />
                  <h4 className="card-title">Live Subscription Stats</h4>
                  <p className="card-text">
                    Track GMP history and trends with insightful visual charts to
                    help assess IPO market sentiment.
                  </p>
                </div>
              </div>
    
              {/* Card 4 */}
              <div className="col-md-6 col-lg-4">
                <div className="custom-card">
                  <img src={allotmentTracking} alt="Real-Time Allotment" />
                  <h4 className="card-title">Real-Time Allotment Tracking</h4>
                  <p className="card-text">
                    Stay ahead with instant updates on IPO allotment status, so you
                    never miss an important notification.
                  </p>
                </div>
              </div>
    
              {/* Card 5 */}
              <div className="col-md-6 col-lg-4">
                <div className="custom-card">
                  <img src={upcomingIPO} alt="Upcoming IPO Dashboard" />
                  <h4 className="card-title">Upcoming IPO Dashboard</h4>
                  <p className="card-text">
                    View all upcoming IPOs at a glance with clear dates, expected
                    prices, and application windows — all in one place.
                  </p>
                </div>
              </div>
    
              {/* Card 6 */}
              <div className="col-md-6 col-lg-4">
                <div className="custom-card">
                  <img src={gmpTrends} alt="GMP Trends" />
                  <h4 className="card-title">Grey Market Premium (GMP) Trends</h4>
                  <p className="card-text">
                    Track GMP history and trends with insightful visual charts to
                    help assess IPO market sentiment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}