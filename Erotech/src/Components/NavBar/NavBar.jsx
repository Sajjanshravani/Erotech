import React, { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../Assets/logo.png";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showTrainingDropdown, setShowTrainingDropdown] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleResize(); // Call handleResize initially

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    // Check if the screen width is less than or equal to 768 pixels
    setIsMobile(window.innerWidth <= 768);
  };

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
      <header
        className={isNavOpen ? "nav-open" : ""}
        style={{
          backgroundColor: scrollY > 0 && !isMobile ? "#fff" : "transparent", // Apply white background only when scrolled and not on mobile
        }}
      >
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
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/about">ABOUT US</a>
            </li>
            <li className="dropdown">
              <a href="#" onClick={toggleServicesDropdown}>
                SERVICES
              </a>
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
            <li className="dropdown">
              <a href="#" onClick={toggleTrainingDropdown}>
                TRAINING
              </a>
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
              <a href="/career">CAREERS</a>
            </li>
            <li>
              <a href="/contactUs">CONTACT US</a>
            </li>
          </ul>
        </nav>
        {isNavOpen && (
          <button className="closes-btn" onClick={closeNav}>
            X
          </button>
        )}
      </header>
    </div>
  );
}

export default NavBar;
