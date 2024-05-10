import React, { useState } from "react";
import user from "../Assets/user.png";
import phones from "../Assets/phone.png";
import mail from "../Assets/mail.png";
import chat from "../Assets/comment.png";
import cours from "../Assets/course.png";
import "./Career.css";

function ApplyModal({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [comment, setComment] = useState("");

  const handleInputs = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "Name":
        setName(value);
        break;
      case "MailId":
        setEmail(value);
        break;
      case "Phone":
        setPhone(value);
        break;
      case "Course":
        setCourse(value);
        break;
      case "Comment":
        setComment(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You can access form fields: name, email, phone, course, comment
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
          <form onSubmit={handleSubmit} style={{ boxShadow: "none" }}>
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
                      value={name}
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
                      value={email}
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
                    <img src={cours} alt="" />
                    <select
                      id="course"
                      name="Course"
                      value={course}
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
                    <img src={phones} alt="" />
                    <input
                      type="tel"
                      id="phone"
                      name="Phone"
                      value={phone}
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
                  name="Comment"
                  value={comment}
                  onChange={handleInputs}
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
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
  );
}

export default ApplyModal;
