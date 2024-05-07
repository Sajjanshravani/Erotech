import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Career.css";
import career from "../Assets/career.png";
import carImage1 from "../Assets/career-box.png";
import ApplyModal from "./ApplyModal";

function Career() {
  const [jobPosition, setJobPosition] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleApplyNow = (position) => {
    setJobPosition(position);
    setShowModal(true);
  };

  let aboutCard = [
    {
      id: 0,
      img: carImage1,
      title: "Embedded Software Developer",
      body: "Join us in shaping the future of technology as an Embedded Software Developer. Contribute to innovative projects and develop software solutions for embedded systems.",
    },
    {
      id: 1,
      img: carImage1,
      title: "Embedded IoT Engineer",
      body: "Drive innovation in the Internet of Things (IoT) space as an Embedded IoT Engineer. Design and implement IoT solutions that revolutionise industries and transform the way we live.",
    },
    {
      id: 3,
      img: carImage1,
      title: "Embedded Automotive Engineer",
      body: "Accelerate your career in automotive technology as an Embedded Automotive Engineer. Develop cutting-edge software for connected and autonomous vehicles, shaping the future of mobility.",
    },
    {
      id: 3,
      img: carImage1,
      title: "Trainer",
      body: "Inspire and empower the next generation of tech enthusiasts as a Trainer. Share your expertise, facilitate workshops, and help individuals thrive in the ever-evolving world of technology.",
    },
    {
      id: 4,
      img: carImage1,
      title: "Human Resource Executive",
      body: "Join our dynamic HR team and play a pivotal role in talent management and organisational development as a Human Resource Executive. Shape our culture and support our team members' growth.",
    },
    {
      id: 5,
      img: carImage1,
      title: "Digital Marketing Executive",
      body: "Elevate your career in digital marketing and drive business growth as a Digital Marketing Executive. Develop and execute innovative strategies to enhance our online presence and engage our audience effectively.",
    },
  ];

  return (
    <div>
      <div className="career-banner">
        <img src={career} alt="" />
      </div>
      <h1 className="recent">Our Recent Works</h1>
      <p className="discover">
        Discover our area of expertise and how you can leverage them to gain a
        competitive edge and grow revenue
      </p>
      <div className="about-cards">
        {aboutCard.map((e, i) => {
          return (
            <div className="about-card" key={i}>
              <img src={e.img} alt="card-image" />
              <div className="overlay">
                <div className="overlay-text">
                  <h2>{e.title}</h2>
                  <h4>{e.body}</h4>
                  <button
                    type="button"
                    className="btns"
                    onClick={() => handleApplyNow(e.title)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showModal && (
        <ApplyModal
          onClose={() => setShowModal(false)}
          jobPosition={jobPosition}
        />
      )}
      <div className="con-con">
        <div className="contactusDiv" style={{ marginTop: "0" }}>
          <p>START TODAY FOR GETTING ONLINE CERTIFICATION</p>
          <h2>You Can Be Your Own Guiding Star With Our Help</h2>
          <Link
            to="/contactUS"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <button>Contact US</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Career;
