import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="wave-shape"></div>
      <div className="footer-content">
        <div className="footer-column">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: example@example.com</p>
          <p>Phone: +123456789</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
