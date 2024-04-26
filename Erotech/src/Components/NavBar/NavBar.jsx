import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../Assets/logo.png";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
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
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Training</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Careers</a>
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
