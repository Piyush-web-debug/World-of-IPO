import React from "react";
import "../App.css";

// Import your image here
import banner from "../assets/Zerodhalogo.png";

const Zerodha = () => {
  return (
    <div className="image-wrapper">
      <a href="https://zerodha.com/open-account/" target="_blank" rel="noopener noreferrer">
        <img src={banner} alt="Banner" className="responsive-img" />
      </a>
    </div>
  );
};

export default Zerodha;
