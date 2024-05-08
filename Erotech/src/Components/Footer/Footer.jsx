import React from "react";
import "./Footer.css";
import logo from "../Assets/logo.png";
import instagram from "../Assets/instagram.png";
import facebook from "../Assets/facebook.png";
import linkedin from "../Assets/linkedin.png";
import youtube from "../Assets/youtube.png";
import location from "../Assets/location.png";
import phone from "../Assets/phone-call.png";
import shape from "../Assets/pentagon.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="wave-shape">
        <svg
          width="2000"
          height="300"
          viewBox="0 0 1440 460"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 123.251V460.006H1442V0.844482C1379.85 7.12109 1344.62 12.8469 1281.5 25.6113C1119.36 54.6821 1013.92 51.6265 827.657 33.523C608.963 8.8082 512.627 20.1103 362.382 60.9398C215.333 94.8928 136.715 107.503 0 123.251Z"
            fill="url(#paint0_linear_1_191)"
            fillOpacity="0.84" // Corrected property name
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
              <stop offset="0.145" stopColor="white" /> // Corrected property
              name
              <stop offset="1" stopColor="#2BB2E9" /> // Corrected property name
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
            <li>
              <a href="/training/1">Embedded Graduate</a>
            </li>
            <li>
              <a href="/training/2">Embedded Software Developer</a>
            </li>
            <li>
              <a href="/training/3">Embedded Automotive Engineer</a>
            </li>
            <li>
              <a href="/training/4">Embedded IoT Engineer</a>
            </li>
            <li>
              <a href="/training/5">Short Term Courses</a>
            </li>
            <li>
              <a href="/training/6">Workshops</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="/Services/EmbeddedSystems">Embedded Software</a>
            </li>
            <li>
              <a href="/Services/IOT">IoT</a>
            </li>
            <li>
              <a href="/ourclients">Our clients</a>
            </li>
            <li>
              <a href="/publication">Paper publications</a>
            </li>
            <li>
              <a href="/Services/certification">Certifications</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jayanagar+Rd,+Kukatpally+Housing+Board+Colony,+Hyderabad,+Telangana+500072"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={location} alt="location" />
              #103, Rajamma Towers,
              <br />
              Jayanagar Rd, Kukatpally <br /> Housing Board Colony, <br />
              Hyderabad, Telangana <br /> 500072
            </a>
          </p>
          <p>
            <img src={phone} alt="phone" />{" "}
            <a href="tel:09676327118">096763 27118</a>
          </p>
        </div>
      </div>
      <div className="footer-last">
        <div className="foot-line">
          <p>© All right reserved Erotech Solutions</p>
        </div>
        <div className="social">
          <a
            href="https://www.facebook.com/your-facebook-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://www.instagram.com/your-instagram-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://www.youtube.com/your-youtube-channel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube" />
          </a>
        </div>
      </div>
      <div className="pentogon">
        <img src={shape} className="sha1" alt="shape" />
        <img src={shape} className="shape2" alt="shape" />
      </div>
    </footer>
  );
}

export default Footer;
