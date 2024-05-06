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
    setShowTrainingDropdown(false);
  };

  const toggleTrainingDropdown = () => {
    setShowTrainingDropdown(!showTrainingDropdown);
    setShowServicesDropdown(false);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="app">
      <header className={isNavOpen ? "nav-open" : ""}>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
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
              <a href="#">Services</a>
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
              <a href="#">Training</a>
              {showTrainingDropdown && (
                <div className="dropdown-content">
                  <a href="/training/1">Embedded Graduate</a>
                  <a href="/training/2">Embedded Software Developer</a>
                  <a href="/training/3">Embedded Automotive Engineer</a>
                  <a href="/training/4">Embedded IoT Engineer</a>
                  <a href="/training/5">Short Term Courses</a>
                  <a href="/training/6">Workshops</a>
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
        {isNavOpen && (
          <button className="close-btn" onClick={closeNav}>
            X
          </button>
        )}
      </header>
    </div>
  );
}

export default NavBar;
