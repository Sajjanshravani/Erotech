import React from "react";
import "./Publication.css";
import background from "../Assets/banner-about.png";

function Publication() {
  return (
    <div>
      <div className="pub">
        <div className="publication-banner">
          <img src={background} alt="" />
          <h1>Get Personalized Recommendations</h1>
          <p>
            Your high- Quality Training Specialist of IT - EROTECH Solutions
          </p>
        </div>
      </div>
    </div>
  );
}

export default Publication;
