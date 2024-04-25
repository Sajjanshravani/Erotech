import React, { useState } from "react";
import Homebanner1 from "../Assets/Homebanner1.png";
import ladysittingonbooks from '../Assets/ladysittingonbooks.png';
import contactus from '../Assets/contactus.png';
import "./ContactUs.css";



function ContactUs(){


    return(
        <>
       
            <div className="HomeSlide">
                <img src={contactus} alt="home-banner1" />
                <div className="BannerText">
                    <p>Get Personalized Recommendations</p>
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div className="form-section">
                <img src={ladysittingonbooks} alt="contactUs"/>
                <form>
                    
                </form>
            </div>
            <div className="" style={{marginTop:"100px"}}>
              <p>START TODAY FOR GETTING ONLINE CERTIFICATION</p>
              <h2>
                You Can Be Your Own Guiding Star With Our Help
              </h2>
              <button type='button'>Contact Us</button>
            </div>
        </>
       )
}

export default ContactUs;