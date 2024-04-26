import React, { useState } from "react";
import "./Training.css";
import trainbanner from "../Assets/train-banner.png";
import train from "../Assets/train-1.png";
import cbox from "../Assets/cbox.png";

function Training() {
  const [activeTab, setActiveTab] = useState("Description");
  const [expanded, setExpanded] = useState(Array(4).fill(false));

  const toggleExpand = (index) => {
    setExpanded(expanded.map((item, i) => (i === index ? !item : item)));
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [comment, setComment] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can do something with the form data, like send it to a server
    console.log("Form submitted:", { name, email, phone, course, comment });
  };

  return (
    <div className="train">
      <div className="train-banner">
        <img src={trainbanner} alt="" />
      </div>
      <div className="training">
        <div className="custom">
          <h1>Customer-centric Info-Tech Strategies tier level</h1>
          <div className="tab-layout">
            <div className="tabs">
              <div
                className={`tab ${activeTab === "Description" ? "active" : ""}`}
                onClick={() => setActiveTab("Description")}
              >
                Description
              </div>
              <div
                className={`tab ${activeTab === "Instructor" ? "active" : ""}`}
                onClick={() => setActiveTab("Instructor")}
              >
                Instructor
              </div>
              <div
                className={`tab ${activeTab === "FAQs" ? "active" : ""}`}
                onClick={() => setActiveTab("FAQs")}
              >
                FAQs
              </div>
              <div
                className={`tab ${
                  activeTab === "For Enrollment" ? "active" : ""
                }`}
                onClick={() => setActiveTab("For Enrollment")}
              >
                For Enrollment
              </div>
            </div>
            <div className="content">
              {activeTab === "Description" && (
                <div className="par-train">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                    <br />
                    Remaining essentially unchanged. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </p>

                  <img src={train} className="tra1" alt="" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                    <br />
                    Remaining essentially unchanged. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </p>
                </div>
              )}
              {activeTab === "Instructor" && <div>Instructor Content...</div>}
              {activeTab === "FAQs" && <div>FAQs Content...</div>}
              {activeTab === "For Enrollment" && (
                <div>For Enrollment Content...</div>
              )}
            </div>
          </div>
        </div>
        <div className="custom-image">
          <img src={cbox} alt="" />
          <div>
            <div className="table-container">
              <div className="table-row">
                <div className="table-cell">Trainer</div>
                <div className="table-cell"></div> {/* Empty cell added */}
              </div>
              <div className="table-row">
                <div className="table-cell">Duration</div>
                <div className="table-cell">1 Month</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Sessions</div>
                <div className="table-cell">23 Sessions</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Course Type</div>
                <div className="table-cell">Online</div>
              </div>
              <div className="table-row" style={{ borderBottom: "none" }}>
                <div className="table-cell">Language</div>
                <div className="table-cell">English</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="train-head">Trainer</h1>
      <div className="side-train">
        <div className="side-image-train"></div>
        <p className="name-traine">Name</p>
        <p className="desgi-traine">Designation</p>
        <div className="side-text-image">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
            Remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>
      <div className="frequent">
        <div className="faq-container">
          <h2>Questions</h2>
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleExpand(index)}>
                <i>
                  Lorem ipsum has been the industry's standard dummy text ever
                  since the 1500s?
                </i>
                <span className="faq-arrow">{expanded[index] ? "▲" : "▼"}</span>
              </div>
              {expanded[index] && (
                <div className="faq-answer">Answer content goes here...</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="form-image">
        <div className="image-form">
          <img src={cbox} alt="" />
        </div>
        <div className="form">
          <div className="custom-form-container">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="custom-row">
                <div className="custom-col">
                  <div className="custom-form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="custom-col">
                  <div className="custom-form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="custom-row">
                <div className="custom-col">
                  <div className="custom-form-group">
                    <label htmlFor="course">Course:</label>
                    <select
                      id="course"
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      required
                    >
                      <option value="">Select Course</option>
                      <option value="course1">Course 1</option>
                      <option value="course2">Course 2</option>
                      <option value="course3">Course 3</option>
                    </select>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="custom-form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="custom-form-group">
                <label htmlFor="comment">Comment:</label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
              <div className="custom-form-group">
                <button className="custom-button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contactusDiv">
        <p>START TODAY FOR GETTING ONLINE CERTIFICATION</p>
        <h2>You Can Be Your Own Guiding Star With Our Help</h2>
        <button>Contact US</button>
      </div>
    </div>
  );
}

export default Training;
