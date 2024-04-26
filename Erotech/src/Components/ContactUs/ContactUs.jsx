import React, { useState } from "react";
import Homebanner1 from "../Assets/Homebanner1.png";
import ladysittingonbooks from '../Assets/ladysittingonbooks.png';
import Frame7 from '../Assets/Frame7.png';
import location from '../Assets/location.png';
import contactCard from '../Assets/contactCard.png';
import "./ContactUs.css";



function ContactUs(){


    return(
        <>
            <div className="HomeSlide contact-bg">
                <div className="BannerText">
                    <p>Get Personalized Recommendations</p>
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div className='address-section'>
                <div>
                    <img src={location} alt='locaiont'/>
                    <h3>Our Address</h3>
                    <p>
                        #103, Rajamma Towers, Jayanagar Rd, Kukatpally Housing Board Colony, Hyderabad, Telangana 500072
                    </p>
                </div>
                <div>
                    <img src={contactCard} alt='contact'/>
                    <h3>
                        Contact Us
                    </h3>
                    <p>
                        096763 27118
                    </p>
                </div>
            </div>
            <div className="form-section">
                <img src={ladysittingonbooks} alt="contactUs"/>
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