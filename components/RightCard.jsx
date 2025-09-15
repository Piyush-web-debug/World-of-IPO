import React from "react";
import "../App.css";

const RightCard = ({ header, image, buttonText }) => {
  return (
    <div className="right-card">
      <h4>{header}</h4>
      <img src={image} alt={header} className="right-card-img" />
      <button className="right-btn1">{buttonText}Know More</button>
    </div>
  );
};

export default RightCard;
