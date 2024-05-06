import React, { useState } from "react";
import "./Career.css";

function ApplyModal({ onClose, jobPosition }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You can access form fields: name, email, phone, course, comment
    // and also jobPosition which is passed from Career component
    console.log("Form submitted:", { name, email, phone, course, comment });
    onClose(); // Close modal after form submission
  };

  return (
    <div className="apply-modal">
      <div className="form">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="modform">
          <form onSubmit={handleSubmit} style={{ border: "none" }}>
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
              <button className="cus-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ApplyModal;
