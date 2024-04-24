import React from "react";
import "./ContactDiv.css";
import contactDivVector from "../Assets/contactDivVector.png";

const ContactDiv = () => {
  return (
    <div className="contactusDiv">
      <p>START TODAY FOR GETTING ONLINE CERTIFICATION</p>
      <h2>You Can Be Your Own Guiding Star With Our Help</h2>
      <button>Contact US</button>
      <img
        src={contactDivVector}
        alt="contactDivVector"
        className="contactDivVector"
      />
    </div>
  );
};

export default ContactDiv;
