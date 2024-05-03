import React, { useState, useEffect, useRef } from "react";
import "./Training.css";
import trainbanner from "../Assets/train-banner.png";
import train from "../Assets/train-1.png";
import cbox from "../Assets/cbox.png";
import user from "../Assets/user.png";
import phones from "../Assets/telephone.png";
import mail from "../Assets/email.png";
import chat from "../Assets/chat.png";

function Training() {
  const [activeTab, setActiveTab] = useState("Description");
  const [expanded, setExpanded] = useState(Array(4).fill(false));
  const [highlightedSection, setHighlightedSection] = useState("Description");

  const sections = [
    { title: "Description", id: "description" },
    { title: "Instructor", id: "instructor" },
    { title: "FAQs", id: "faqs" },
    { title: "For Enrollment", id: "enrollment" },
  ];

  const toggleExpand = (index) => {
    setExpanded(expanded.map((item, i) => (i === index ? !item : item)));
    setActiveTab(sections[index].title);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { name, email, phone, course, comment });
  };

  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((sectionRef) => {
        if (sectionRef.current) {
          const section = sectionRef.current;
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setHighlightedSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="train">
      <div className="train-banner">
        <img src={trainbanner} alt="" />
        <h1>Accelerate Your Career</h1>
        <p>
          Master Embedded Systems with Erotech Solutions Graduate Training
          Program
        </p>
      </div>

      <div className="training">
        <div className="custom">
          <div className="headi-tra">
            {sections.map(({ title, id }, index) => (
              <div
                key={index}
                className={`tab ${activeTab === title ? "active" : ""}`}
                onClick={() => toggleExpand(index)}
              >
                <p>{title}</p>
                <div
                  className={`underline ${
                    highlightedSection === id ? "active-underline" : ""
                  }`}
                ></div>
              </div>
            ))}
          </div>
          <hr className="line"></hr>
          <div
            className="par-train"
            id="description"
            ref={sectionRefs.current[0]}
          >
            <p>
              Embark on a transformative journey towards mastering Embedded
              Systems with Erotech Solutions' Graduate Training program.
              Designed for aspiring professionals seeking to launch their
              careers in this dynamic field, our comprehensive training
              curriculum, expert instructors, and hands-on approach ensure that
              you acquire the skills and knowledge needed to excel in today's
              technology-driven world.
            </p>
            <img src={train} className="tra1" alt="" />
            {/* <p>Description content goes here...</p> */}
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
      <div className="side-train" id="instructor" ref={sectionRefs.current[1]}>
        <div className="side-image-train"></div>
        <p className="name-traine">Name</p>
        <p className="desgi-traine">Designation</p>
        <div className="side-text-image">
          <p>
            Meet our dedicated team of industry experts who bring a wealth of
            experience and insight to every training session. With a passion for
            education and a commitment to excellence, our trainers are here to
            guide and support you every step of the way on your path to becoming
            an Embedded Systems specialist.
          </p>
        </div>
      </div>

      <div className="frequent" id="faqs" ref={sectionRefs.current[2]}>
        <div className="faq-container">
          <h2>Questions</h2>
          {/* FAQ Item 1 */}
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleExpand(0)}>
              <i>What is the duration of the training program?</i>
              <span className="faq-arrow">{expanded[0] ? "▲" : "▼"}</span>
            </div>
            {expanded[0] && (
              <div className="faq-answer">
                Our Embedded Graduate Training program typically spans [insert
                duration], providing participants with comprehensive instruction
                and practical experience in Embedded Systems.
              </div>
            )}
          </div>
          {/* FAQ Item 2 */}
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleExpand(1)}>
              <i>
                Do I need any prior experience or knowledge in Embedded Systems
                to enroll?
              </i>
              <span className="faq-arrow">{expanded[1] ? "▲" : "▼"}</span>
            </div>
            {expanded[1] && (
              <div className="faq-answer">
                No prior experience is required to enroll in our training
                program. Our curriculum is designed to accommodate participants
                with varying levels of experience, from beginners to those with
                some background in the field.
              </div>
            )}
          </div>
          {/* FAQ Item 3 */}
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleExpand(2)}>
              <i>
                Will I receive any certification upon completion of the
                training?
              </i>
              <span className="faq-arrow">{expanded[2] ? "▲" : "▼"}</span>
            </div>
            {expanded[2] && (
              <div className="faq-answer">
                Yes, participants who complete our Embedded Graduate Training
                program will receive a certification, validating their skills
                and knowledge in Embedded Systems.
              </div>
            )}
          </div>
          {/* FAQ Item 4 */}
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleExpand(3)}>
              <i>What is the format of the training sessions?</i>
              <span className="faq-arrow">{expanded[3] ? "▲" : "▼"}</span>
            </div>
            {expanded[3] && (
              <div className="faq-answer">
                Our training sessions blend theoretical instruction with
                hands-on practical exercises, providing participants with a
                well-rounded learning experience that prepares them for
                real-world challenges in Embedded Systems.
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="form-image" id="enrollment" ref={sectionRefs.current[3]}>
        <div className="image-form">
          <img src={cbox} alt="" />
        </div>
        <div className="form">
          <div className="custom-form-container">
            <form onSubmit={handleSubmit} style={{ border: "none" }}>
              <div className="custom-row">
                <div className="custom-col">
                  <div className="custom-form-group">
                    <label htmlFor="name">Name:</label>
                    <div className="input-with-icon">
                      <img src={user} alt="" />
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                </div>
                <div className="custom-col">
                  <div className="custom-form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <div className="input-with-icon">
                      <img src={phones} alt="" />
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
              </div>
              <div className="custom-form-group">
                <label htmlFor="comment">Comment:</label>
                <div className="input-with-icon textarea-with-icon">
                  <img src={chat} alt="" style={{ top: "18%" }} />
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
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

      <div className="trai-contact">
        <div className="contactusDiv">
          <p>
            Ready to kickstart your career in Embedded Systems? Enroll now in
            Erotech Solutions' Graduate Training program and unlock your
            potential in this exciting field.{" "}
          </p>
          <h2>Take the first step towards success today</h2>
          <button>Contact US</button>
        </div>
      </div>
    </div>
  );
}

export default Training;
