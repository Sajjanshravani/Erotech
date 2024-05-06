import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./Training.css";
import trainbanner from "../Assets/train-banner.png";
import train from "../Assets/train-1.png";
import cbox from "../Assets/cbox.png";
import user from "../Assets/user.png";
import phones from "../Assets/telephone.png";
import mail from "../Assets/email.png";
import chat from "../Assets/chat.png";
import { trainingContent } from "../Assets/Trainingcontent";
import swal from "sweetalert";

const initialForm = {
  Name:"",
  MailId:"",
  Course:"",
  Phone:"",
  Comment:""
}

function Training({ onSubmit }) {
  const { id } = useParams();
  const [formInfo, setFormInfo] = useState({...initialForm});


  const [currentContent, setCurrentContent] = useState(
    trainingContent[parseInt(id) - 1]
  );

  const [activeTab, setActiveTab] = useState("Description");
  const [expanded, setExpanded] = useState(
    trainingContent[parseInt(id) - 1].faqs
  );
  const [highlightedSection, setHighlightedSection] = useState("Description");

  const sections = [
    { title: "Description", id: "description" },
    { title: "Instructor", id: "instructor" },
    { title: "FAQs", id: "faqs" },
    { title: "For Enrollment", id: "enrollment" },
  ];

  const toggleExpand = (index) => {
    const temp = expanded.map((item, i) => {
      if (index === i) {
        return {
          visited: !item.visited,
          question: item.question,
          answer: item.answer,
        };
      } else {
        return item;
      }
    });
    setExpanded(temp);
    setActiveTab(sections[index].title);
  };

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
  "https://script.google.com/macros/s/AKfycbzqV2mzpMaMYtxjfDvdR7I1d47iAfRz8myuxG5yDHM2_Slbqy9gG4BxvACl_zqzNrQ/exec";
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
        <h1>{currentContent.head1}</h1>
        <p>{currentContent.para1}</p>
      </div>

      <div className="training">
        <div className="custom">
          <h1>Customer-centric Info-Tech Strategies tier level</h1>
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
            <p>{currentContent.trainingparagragh}</p>
            <img src={currentContent.paraimage} className="tra1" alt="" />
            {/* <p>Description content goes here...</p> */}
          </div>
        </div>
        <div className="custom-image">
          <img src={currentContent.banneerimage} alt="" />
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
          <p>{currentContent.trainshortdesc}</p>
        </div>
      </div>

      <div className="frequent" id="faqs" ref={sectionRefs.current[2]}>
        <div className="faq-container">
          <h2>Questions</h2>
          {/* FAQ Item 1 */}

          <ul>
            {currentContent.faqs.map((item, index) => (
              <li key={item.question} className="faq-item">
                <div
                  className="faq-question"
                  onClick={() => toggleExpand(index)}
                >
                  <i>{item.question}</i>
                  <span className="faq-arrow">
                    {expanded[index].visited ? "▲" : "▼"}
                  </span>
                </div>
                {expanded[index].visited && (
                  <div className="faq-answer">{expanded[index].answer}</div>
                )}
              </li>
            ))}
          </ul>
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
                      <img src={phones} alt="" />
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
          <p>{currentContent.conthead}</p>
          <h2>{currentContent.contpara}</h2>
          <button>Contact US</button>
        </div>
      </div>
    </div>
  );
}

export default Training;
