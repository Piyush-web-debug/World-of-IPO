import React from "react";
import "../App.css";

// Import your images here (replace with your files)
import heroImg from "../assets/Illustrationlogo.png";
import purposeImg from "../assets/Illustrationlogo.png";
import classification from "../assets/Classificationlogo.png";
import mainboard from "../assets/MainboardIPOlogo.png";
import smeipo from "../assets/SMEIPOlogo.png";
import purpose from "../assets/Purposelogo.png";
import unlock from "../assets/Unlockcapitallogo.png";
import accelerate from "../assets/Acceleratebusinesslogo.png";
import launch from "../assets/Launchnewlogo.png";
import strenghten from "../assets/Strenghtenlogo.png";
import strategic from "../assets/Strategiclogo.png";
import appointing from "../assets/Appointinglogo.png";
import internal from "../assets/Internalogo.png";
import filing from "../assets/Filinglogo.png";
import investor from "../assets/Investorlogo.png";
import share from "../assets/Sharepricinglogo.png";
import official from "../assets/Officiallistinglogo.png";
import life from "../assets/Lifeafterlogo.png";
import retail from "../assets/Retailinvestorslogo.png";
import qualified from "../assets/UPIlogo.png";
import noninstitutional from "../assets/UPIlogo.png";
import employees from "../assets/Employeeslogo.png";
import how from "../assets/GreenTicklogo.png";
import via from "../assets/Retailinvestorslogo.png";
import using from "../assets/UPIlogo.png";
import through from "../assets/Employeeslogo.png";

const Page23 = () => {
  return (
    <div className="ipo-page">
      {/* Mainboard & SME IPOs */}
      <div className="ipo-card-grid">
        <div className="ipo-card2">
          <h3 id="title">Mainboard IPOs</h3>
          <p className="ipo-text">
            Current Mainboard IPOs for This Week and the Upcoming Week: HDB Financial Services IPO, Sambhv Steel 
            Tubes IPO, Indogulf Cropsciences IPO, Crizac Limited IPO, Anthem Biosciences IPO, National Securities 
            Depository Limited (NSDL) IPO, Travel Food Services IPO<br /><br />
            Upcoming Mainboard IPOs Expected in the Coming Months of This Year and Next Year: LG Electronics India 
            IPO, Hero Motors IPO, Tata Capital IPO, Vikran Engineering IPO, Solarworld Energy Solutions IPO, Brigade 
            Hotel Ventures IPO, Patel Retail IPO, IndiaFirst Life Insurance Company IPO, Avanse Financial Services 
            IPO, Hero FinCorp IPO<br /><br />
            Recently Listed Mainboard IPOs: Ellenbarrie Industrial Gases IPO, Globe Civil Projects IPO, Kalpataru 
            Limited IPO, Arisinfra Solutions IPO, Oswal Pumps IPO
          </p>
        </div>
        <div className="ipo-card2">
          <h3 id="title">SME IPOs</h3>
          <p className="ipo-text">
            Current SME IPOs for This Week and the Upcoming Week: Rama Telecom IPO, Suntech Infra Solutions IPO, 
            Supertech EV IPO, PRO FX Tech IPO, Moving Media Entertainment IPO, Ace Alpha Tech IPO, Valencia India IPO, 
            Neetu Yoshi IPO, Adcounty Media India IPO, Silky Overseas IPO, Pushpa Jewellers IPO, Cedaar Textile IPO, 
            Vandan Foods IPO, Marc Loire Fashions IPO, Cryogenic OGS IPO, Happy Square Outsourcing Services IPO, 
            Meta Infotech IPO, Chemkart India IPO<br /><br />
            Recently Listed SME IPOs: Icon Facilitators IPO, Shri Hare-Krishna Sponge Iron IPO, AJC Jewel Manufacturers IPO, 
            Abram Food IPO, Mayasheel Ventures IPO
          </p>
        </div>
      </div>

      {/* What is IPO */}
      <div className="ipo-section1">
      <div className="ipo-left">
        <img src={heroImg} alt="IPO Illustration" className="ipo-img" />
      </div>
      <div className="ipo-right">
        <h3 id="title" className="ipo-title">What is an Initial Public Offering?</h3>
        <p className="ipo-text">
          An IPO (Initial Public Offering) is the process through which a private company becomes publicly traded 
          by offering its shares to the general public for the first time. This means the company is opening up 
          ownership to public investors, giving them a stake in its business by selling shares.
        </p>
      </div>
    </div>

      {/* Classification */}
      <div className="classification-card">
      <h3 id="title" className="classification-title">
      <img src={classification} alt="IPO Illustration" className="ipo-img1" />Classification of IPOs</h3>

      <div className="ipo-card-grid2">
        <div className="ipo-card7">
          <img
            src={mainboard}
            alt="Mainboard IPO"
            className="ipo-card-img1 ipo-img1"
          />
          <h4 id="title">Mainboard IPO</h4>
          <p className="ipo-text">Mainboard IPOs are public offerings by large companies that list their equity 
            shares on major stock exchanges like NSE and BSE.</p>
        </div>

        <div className="ipo-card7">
          <img
            src={smeipo}
            alt="SME IPO"
            className="ipo-card-img1 ipo-img1"
          />
          <h4 id="title">SME IPO</h4>
          <p className="ipo-text">
            These IPOs enable smaller companies to go public and raise capital by getting listed on exchanges like 
            NSE and BSE.
          </p>
        </div>
      </div>
    </div>

      {/* Purpose */}
      <div className="purpose-section">
      {/* Left Side Content */}
      <div className="purpose-left">
        <h3 id="title" className="purpose-title">
        <img src={purpose} alt="IPO Illustration" className="ipo-img1" />Purpose Behind Launching an IPO</h3>
        <p className="ipo-text">Launching an IPO marks a significant milestone for a company, unlocking new 
            potential for growth and expansion. By going public, a business gains access to substantial capital 
            that can be used to scale operations, launch new products, or repay existing debt. An IPO also 
            enhances the company’s credibility, increases visibility in the market, and opens up broader investment 
            opportunities—all contributing to long-term value creation.</p>
        <div className="ipo-card-grid1">
          <div id="title1" className="ipo-card3">
          <img src={unlock} alt="IPO Illustration" className="ipo-img1" />Unlock Capital at Scale</div>
          <div id="title1" className="ipo-card3">
          <img src={accelerate} alt="IPO Illustration" className="ipo-img1" />Accelerate Business Expansion</div>
          <div id="title1" className="ipo-card3">
          <img src={launch} alt="IPO Illustration" className="ipo-img1" />Launch New Products & Services</div>
          <div id="title1" className="ipo-card3">
          <img src={strenghten} alt="IPO Illustration" className="ipo-img1" />Strengthen Financial Stability</div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="purpose-right">
        <img src={purposeImg} alt="Purpose Illustration" className="purpose-img" />
      </div>
    </div>

      {/* Journey */}
      <div className="journey-card">
      <h3 id="title" className="journey-title">The Journey from Private to Public</h3>

      <div className="ipo-card-grid3">
        <div id="title1" className="ipo-card4">
            <img src={strategic} alt="IPO Illustration" className="ipo-img1" /><br />
            1. Strategic Planning
            <p className="ipo-text">The company evaluates growth goals and decides to raise capital by entering 
                public markets.</p>
        </div>
        <div id="title1" className="ipo-card4">
            <img src={appointing} alt="IPO Illustration" className="ipo-img1" /><br />
            2. Appointing IPO Advisors
            <p className="ipo-text">Investment banks and financial institutions are selected to underwrite and 
                guide the IPO journey.</p>
        </div>
        <div id="title1" className="ipo-card4">
            <img src={internal} alt="IPO Illustration" className="ipo-img1" /><br />
            3. Internal Readiness Check
            <p className="ipo-text">In-depth financial audits, legal due diligence, and operational reviews are 
                conducted to prepare for scrutiny.</p>
        </div>
        <div id="title1" className="ipo-card4">
            <img src={filing} alt="IPO Illustration" className="ipo-img1" /><br />
            4. Filing the DRHP
            <p className="ipo-text">The Draft Red Herring Prospectus (DRHP) and other regulatory documents are 
                submitted to SEBI for review.</p>
        </div>
        <div id="title1" className="ipo-card4">
            <img src={investor} alt="IPO Illustration" className="ipo-img1" /><br />
            5. Investor Outreach
            <p className="ipo-text">Roadshows and presentations are held to introduce the company to institutional 
                and retail investors.</p>
        </div>
        <div id="title1" className="ipo-card4">
            <img src={share} alt="IPO Illustration" className="ipo-img1" /><br />
            6. Share Pricing Strategy
            <p className="ipo-text">Based on demand and valuation analysis, the final share price and lot size are 
                determined.</p>
        </div>
        <div id="title1" className="ipo-card4">
            <img src={official} alt="IPO Illustration" className="ipo-img1" /><br />
            7. Official Listing Day
            <p className="ipo-text">The company’s shares are listed on stock exchanges like NSE or BSE and become 
                available for trading.</p>
        </div>
        <div id="title1" className="ipo-card4">
            <img src={life} alt="IPO Illustration" className="ipo-img1" /><br />
            8. Life After the IPO
            <p className="ipo-text">The company now adheres to public reporting norms, compliance regulations, 
                and shareholder communications.</p>
        </div>
      </div>
    </div>

      {/* Investor Types */}
       <div className="investor-card">
      <h3 id="title" className="investor-title">
      <img src={classification} alt="IPO Illustration" className="ipo-img1" />Investor Types in an IPO</h3>
      <p className="investor-desc">
        During an Initial Public Offering (IPO), investors are classified into four primary categories. 
        Retail investors, often referred to as the general public, are individuals who apply for shares with 
        an investment limit of up to ₹2 lakhs. Qualified Institutional Buyers (QIBs) include entities like mutual 
        funds, insurance companies, banks, and foreign institutional investors that are professionally managed 
        and equipped to assess investment risks. Non-Institutional Investors (NIIs), also known as High Net 
        Worth Individuals (HNIs), are those who invest more than ₹2 lakhs but do not fall under the QIB category.
        Additionally, some IPOs reserve a portion of shares for the company’s employees and affiliates, allowing 
        them the opportunity to invest at preferential rates or through a dedicated quota.
      </p>

      <div className="ipo-card-grid4">
        <div id="title1" className="ipo-card5">
        <img src={retail} alt="IPO Illustration" className="ipo-img1" /><br />
        Retail Investors
            <p className="ipo-text">General Public</p>
        </div>
        <div id="title1" className="ipo-card5">
        <img src={qualified} alt="IPO Illustration" className="ipo-img1" /><br />
        Qualified Institutional Buyers
            <p className="ipo-text">QIB</p>
        </div>
        <div id="title1" className="ipo-card5">
        <img src={noninstitutional} alt="IPO Illustration" className="ipo-img1" /><br />
        Non-Institutional Investor
            <p className="ipo-text">NII/NHI</p>
        </div>
        <div id="title1" className="ipo-card5">
        <img src={employees} alt="IPO Illustration" className="ipo-img1" /><br />
        Employees and Affiliates
            <p className="ipo-text">In some special cases</p>
        </div>
      </div>
    </div>

      {/* How to Apply */}
      <div className="applyipo-card">
      <h3 id="title" className="applyipo-title">
        <img src={how} alt="IPO Illustration" className="ipo-img1" />How to Apply for an IPO Online</h3>
      <p className="applyipo-desc">
        Applying for an IPO online is now simpler and more accessible than ever. One of the most common methods is 
        through a trading account offered by brokers or service providers, where investors can directly apply via 
        the broker’s online platform. Another widely used option is the UPI-based application process, which allows 
        investors to authorize payments quickly using apps like BHIM, Google Pay, PhonePe, or broker-integrated UPI 
        systems. Additionally, most banks offer the ASBA (Application Supported by Blocked Amount) facility through 
        net banking. This method ensures the IPO amount remains blocked in the investor’s account until allotment 
        is finalized, enabling a secure and seamless transaction experience.
      </p>

      <div className="ipo-card-grid5">
        <div id="title1" className="ipo-card6">
        <img src={via} alt="IPO Illustration" className="ipo-img1" /><br />
        Via Trading Account
            <p className="ipo-text">Apply directly through your broker or service provider’s online platform.</p>
        </div>
        <div id="title1" className="ipo-card6">
        <img src={using} alt="IPO Illustration" className="ipo-img1" /><br />
        Using UPI
            <p className="ipo-text">A fast and convenient method through apps like Google Pay, PhonePe, or BHIM.</p>
        </div>
        <div id="title1" className="ipo-card6">
        <img src={through} alt="IPO Illustration" className="ipo-img1" /><br />
        Through Net Banking (ASBA)
            <p className="ipo-text">Apply securely via your bank’s net banking portal using the ASBA facility.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page23;
