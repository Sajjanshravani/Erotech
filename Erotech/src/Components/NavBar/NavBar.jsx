import React, { useState } from "react";
import "./NavBar.css";
import logo from "../Assets/logo.png";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showTrainingDropdown, setShowTrainingDropdown] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
    setShowTrainingDropdown(false); // Close training dropdown when opening or closing services dropdown
  };

  const toggleTrainingDropdown = () => {
    setShowTrainingDropdown(!showTrainingDropdown);
    setShowServicesDropdown(false); // Close services dropdown when opening or closing training dropdown
  };

  return (
    <div className="app">
      <header className={isNavOpen ? "nav-open" : ""}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <input
          type="checkbox"
          id="nav_check"
          checked={isNavOpen}
          onChange={toggleNav}
          hidden
        />
        <label htmlFor="nav_check" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li
              className="dropdown"
              onMouseEnter={toggleServicesDropdown}
              onMouseLeave={toggleServicesDropdown}
            >
              <a href="/Services/IOT">Services</a>
              {showServicesDropdown && (
                <div className="dropdown-content">
                  <a href="/Services/EmbeddedSystems">Embedded Software</a>
                  <a href="/Services/IOT">IoT</a>
                  <a href="/ourclients">Our Clients</a>
                  <a href="/publication">Paper Publication</a>
                  <a href="/Services/certification">Certifications</a>
                </div>
              )}
            </li>
            <li
              className="dropdown"
              onMouseEnter={toggleTrainingDropdown}
              onMouseLeave={toggleTrainingDropdown}
            >
              <a href="/training">Training</a>
              {showTrainingDropdown && (
                <div className="dropdown-content">
                  <a href="/">Embedded Graduate</a>
                  <a href="/">Embedded Software Developer</a>
                  <a href="/">Embedded Automotive Engineer</a>
                  <a href="/">Embedded IoT Engineer</a>
                  <a href="/">Short Term Courses</a>
                  <a href="/">Workshops</a>
                </div>
              )}
            </li>
            <li>
              <a href="/career">Careers</a>
            </li>
            <li>
              <a href="/contactUs">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
