import React, { useState } from "react";
import "../App.css";

const Page21 = () => {
  const [selected, setSelected] = useState("All");
    
    return (
      <>
    <div className="ipo-header">
      <h2>Initial Public Offerings</h2>
        <p>
          We offer a variety of interesting features that you can help increase your
          productivity at work and manage your project easily
        </p>
      <div className="ipo-header-actions">
      <div className="ipo-tabs">
        <button className="ipo-btn1 active">Current IPO</button>
        <button className="ipo-btn1">Upcoming IPO</button>
        <button className="ipo-btn1">Listed IPO</button>

          </div>
        <div className="ipo-dropdown">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            >
            <option value="All">All</option>
            <option value="SME">SME IPO</option>
            <option value="Mainboard">Mainboard IPO</option>
          </select>
        </div>
      </div>
      </div>
      </>
  );
};

export default Page21;

