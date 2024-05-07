import React from "react";
import "./ContactDiv.css";
import contactDivVector from "../Assets/contactDivVector.png";
import { Link } from "react-router-dom";

const ContactDiv = (props) => {
  return (
    <div className="contactusDiv">
      <p>{props.ptag}</p>
      <h2>{props.htag}</h2>
      <Link to={"/contactUs"}>
        <button>Contact Us</button>
      </Link>
      <img
        src={contactDivVector}
        alt="contactDivVector"
        className="contactDivVector"
      />
    </div>
  );
};

export default ContactDiv;
