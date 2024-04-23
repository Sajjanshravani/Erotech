import React from "react";
import "./Footer.css";
import logo from "../Assets/logo.png";
import instagram from "../Assets/instagram.png";
import facebook from "../Assets/facebook.png";
import linkedin from "../Assets/linkedin.png";
import youtube from "../Assets/youtube.png";
import location from "../Assets/location.png";
import phone from "../Assets/phone-call.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="wave-shape">
        <svg
          width="1440"
          height="460"
          viewBox="0 0 1440 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 123.251V460.006H1442V0.844482C1379.85 7.12109 1344.62 12.8469 1281.5 25.6113C1119.36 54.6821 1013.92 51.6265 827.657 33.523C608.963 8.8082 512.627 20.1103 362.382 60.9398C215.333 94.8928 136.715 107.503 0 123.251Z"
            fill="url(#paint0_linear_1_191)"
            fill-opacity="0.84"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_191"
              x1="721"
              y1="460.006"
              x2="721"
              y2="0.844482"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.145" stop-color="white" />
              <stop offset="1" stop-color="#2BB2E9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <img src={logo} alt="" />
        </div>
        <div className="footer-column">
          <h4>Training</h4>
          <ul>
            <li>Embedded Graduate</li>
            <li>Embedded Software Developer</li>
            <li>Embedded Automotive Engineer</li>
            <li>Embedded IoT Engineer</li>
            <li>Short Term Courses</li>
            <li>Workshops</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Embedded Software</li>
            <li>IoT</li>
            <li>Our clients</li>
            <li>Paper publications</li>
            <li>Certifications</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>
            <img src={location} alt="location" />
            #103, Rajamma Towers,
            <br />
            Jayanagar Rd, Kukatpally <br /> Housing Board Colony, <br />
            Hyderabad, Telangana <br /> 500072
          </p>
          <p>
            {" "}
            <img src={phone} alt="phone" /> 096763 27118
          </p>
        </div>
      </div>
      <div className="footer-last">
        <div className="foot-line">
          <p>© All right reserved Erotech Solutions</p>
        </div>
        <div className="social">
          <img src={facebook} alt="facebook" />
          <img src={linkedin} alt="linkeden" />
          <img src={instagram} alt="instagram" />
          <img src={youtube} alt="youtube" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
