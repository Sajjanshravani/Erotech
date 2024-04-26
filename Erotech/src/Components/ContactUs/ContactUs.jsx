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
            <div className="maps-bg">
                
                <div className="maps-embed">
                        <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8790634157795!2d78.36221442429307!3d17.417590501936054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb940bae9a58b7%3A0xbb3e52dce390cfd3!2sChaitanya%20Enclave%2C%20Khajaguda%2C%20Hyderabad%2C%20Telangana%20500075!5e0!3m2!1sen!2sin!4v1714117852892!5m2!1sen!2sin"
                                width={600}
                                height={450}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
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