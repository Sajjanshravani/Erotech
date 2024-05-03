import React, { useState } from "react";
import "./Career.css";
import career from "../Assets/career.png";
import careerbox from "../Assets/career-box.png";

function Career() {
  const [jobPosition, setJobPosition] = useState("");

  const handleApplyNow = (position) => {
    setJobPosition(position);
  };
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
      <section className="card-section">
        <div className="container">
          <div className="row">
            {/* Repeat this block for each card */}
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="content">
                <img
                  className="content-image"
                  src={careerbox}
                  alt="Social Media Executive"
                />
                <h3 className="title">Embedded Software Developer</h3>
                <div className="content-details fadeIn-bottom">
                  <p className="content-text">
                    <p className="description">
                      Join us in shaping the future of technology as an Embedded
                      Software Developer. Contribute to innovative projects and
                      develop software solutions for embedded systems.
                    </p>
                    <button
                      type="button"
                      className="btns"
                      onClick={() => handleApplyNow("Social Media Executive")}
                    >
                      Apply Now
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="content">
                <img
                  className="content-image"
                  src={careerbox}
                  alt="Social Media Executive"
                />
                <h3 className="title">Embedded IoT Engineer</h3>
                <div className="content-details fadeIn-bottom">
                  <p className="content-text">
                    <p className="description">
                      Drive innovation in the Internet of Things (IoT) space as
                      an Embedded IoT Engineer. Design and implement IoT
                      solutions that revolutionise industries and transform the
                      way we live.
                    </p>
                    <button
                      type="button"
                      className="btns"
                      onClick={() => handleApplyNow("Social Media Executive")}
                    >
                      Apply Now
                    </button>
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="content">
                <img
                  className="content-image"
                  src={careerbox}
                  alt="Social Media Executive"
                />
                <h3 className="title">Embedded Automotive Engineer</h3>

                <div className="content-details fadeIn-bottom">
                  <p className="content-text">
                    <p className="description">
                      Accelerate your career in automotive technology as an
                      Embedded Automotive Engineer. Develop cutting-edge
                      software for connected and autonomous vehicles, shaping
                      the future of mobility.
                    </p>
                    <button
                      type="button"
                      className="btns"
                      onClick={() => handleApplyNow("Social Media Executive")}
                    >
                      Apply Now
                    </button>
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="content">
                <img
                  className="content-image"
                  src={careerbox}
                  alt="Social Media Executive"
                />
                <h3 className="title">Trainer</h3>
                <div className="content-details fadeIn-bottom">
                  <p className="content-text">
                    <p className="description">
                      Inspire and empower the next generation of tech
                      enthusiasts as a Trainer. Share your expertise, facilitate
                      workshops, and help individuals thrive in the
                      ever-evolving world of technology.
                    </p>
                    <button
                      type="button"
                      className="btns"
                      onClick={() => handleApplyNow("Social Media Executive")}
                    >
                      Apply Now
                    </button>
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="content">
                <img
                  className="content-image"
                  src={careerbox}
                  alt="Social Media Executive"
                />
                <h3 className="title">Human Resource Executive</h3>
                <div className="content-details fadeIn-bottom">
                  <p className="content-text">
                    <p className="description">
                      Join our dynamic HR team and play a pivotal role in talent
                      management and organisational development as a Human
                      Resource Executive. Shape our culture and support our team
                      members' growth. typesetting industry. Lorem Ipsum has
                      been the industry's
                    </p>
                    <button
                      type="button"
                      className="btns"
                      onClick={() => handleApplyNow("Social Media Executive")}
                    >
                      Apply Now
                    </button>
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="content">
                <img
                  className="content-image"
                  src={careerbox}
                  alt="Social Media Executive"
                />
                <h3 className="title">Digital Marketing Executive</h3>
                <div className="content-details fadeIn-bottom">
                  <p className="content-text">
                    <p className="description">
                      Elevate your career in digital marketing and drive
                      business growth as a Digital Marketing Executive. Develop
                      and execute innovative strategies to enhance our online
                      presence and engage our audience effectively.
                    </p>
                    <button
                      type="button"
                      className="btns"
                      onClick={() => handleApplyNow("Social Media Executive")}
                    >
                      Apply Now
                    </button>
                  </p>
                </div>
              </div>
            </div>
            {/* Repeat end */}
          </div>
        </div>
      </section>
      <div className="contactusDiv">
        <p>START TODAY FOR GETTING ONLINE CERTIFICATION</p>
        <h2>You Can Be Your Own Guiding Star With Our Help</h2>
        <button>Contact US</button>
      </div>
    </div>
  );
}

export default Career;
