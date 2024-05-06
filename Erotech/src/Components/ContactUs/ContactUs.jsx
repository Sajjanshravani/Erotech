import React, { useState } from "react";
import Homebanner1 from "../Assets/Homebanner1.png";
import ladysittingonbooks from '../Assets/ladysittingonbooks.png';
import Frame7 from '../Assets/Frame7.png';
import location from '../Assets/location.png';
import contactCard from '../Assets/contactCard.png';
import cbox from "../Assets/cbox.png";
import user from "../Assets/user.png";
import mail from "../Assets/email.png";
import phone from "../Assets/telephone.png";
import chat from "../Assets/chat.png";
import "./ContactUs.css";
import swal from "sweetalert";

const initialForm = {
    Name:"",
    MailId:"",
    Course:"",
    Phone:"",
    Comment:""
}

function ContactUs(){
const [formInfo, setFormInfo] = useState({...initialForm});

const handleInputs = (e)=>{
    const a = e.target.name;
    const b = e.target.value
    setFormInfo((prev)=> ({...prev,[a]:b}));
};

const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        for (const key in formInfo) {
            if (formInfo.hasOwnProperty(key)) {
              formData.append(key, formInfo[key]);
            }
        };
        const scriptURL =
        "https://script.gooEnlSm_2X7xfC6BzTP_XlDturj_jf2A70F0m5f7UA/exec";
      fetch(scriptURL, {
        method: "POST",
        body: formData,
      })
        .then((response) =>
          swal({
            title: "Form has been Submitted!",
            text: "Our experts will get back to you shortly",
            icon: "success",
            button: "Ok",
          })
        )
        .then(() => {
          form.reset();
        })
        .catch((error) =>
          swal({
            title: "Fields are Empty!",
            text: "Please fill all the fields.",
            icon: "warning",
            button: "Ok",
          })
        );
}

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="HomeSlide contact-bg col-12">
                    <div className="BannerText">
                        <p>Get Personalized Recommendations</p>
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='address-section col-12'>
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
            </div>
            <div className="row">
                <div className="maps-bg col-12">
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
            </div>
            <div className="row">
                <div className="form-section col-12">
                    <img src={ladysittingonbooks} alt="contactUs"/>
                        <form onSubmit={handleSubmit}>
                            <div className="custom-row">
                                <div className="custom-col">
                                <div className="custom-form-group">
                                    <label htmlFor="name">Name:</label>
                                    <div className="input-with-icon">
                                    <img src={user} alt="" />
                                    <input
                                    
                                        type="text"
                                        id="name"
                                        name="Name"
                                        value={formInfo.Name}
                                        onChange={handleInputs}
                                        required
                                    />
                                    </div>
                                </div>
                                </div>
                                <div className="custom-col">
                                <div className="custom-form-group">
                                    <label htmlFor="email">Email:</label>
                                    <div className="input-with-icon">
                                    <img src={mail} alt="" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="MailId"
                                        value={formInfo.MailId}
                                        onChange={handleInputs}
                                        required
                                    />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="custom-row">
                                <div className="custom-col">
                                <div className="custom-form-group">
                                    <label htmlFor="course">Course:</label>
                                    <div className="input-with-icon">
                                    {/* <img src={courseIcon} alt="" /> */}
                                    <select
                                        id="course"
                                        name="Course"
                                        value={formInfo.Course}
                                        onChange={handleInputs}
                                        required
                                    >
                                        <option value="">Select Course</option>
                                        <option value="course1">Course 1</option>
                                        <option value="course2">Course 2</option>
                                        <option value="course3">Course 3</option>
                                    </select>
                                    </div>
                                </div>
                                </div>
                                <div className="custom-col">
                                <div className="custom-form-group">
                                    <label htmlFor="phone">Phone Number:</label>
                                    <div className="input-with-icon">
                                    <img src={phone} alt="" />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="Phone"
                                        value={formInfo.Phone}
                                        onChange={handleInputs}
                                        required
                                    />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="custom-form-group">
                                <label htmlFor="comment">Comment:</label>
                                <div className="input-with-icon textarea-with-icon">
                                <img src={chat} alt="" style={{ top: "18%" }} />
                                <textarea
                                    id="comment"
                                    name='Comment'
                                    value={formInfo.Comment}
                                    onChange={ handleInputs}
                                    rows="4"
                                    cols="50"
                                ></textarea>
                                </div>
                            </div>
                            <div className="custom-form-group">
                                <button className="customs-button" type="submit">
                                Submit
                                </button>
                            </div>
                            </form>   
                </div>
            </div>
        </div>
       )
}

export default ContactUs;