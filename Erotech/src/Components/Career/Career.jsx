import React, { useState } from "react";
import "./Career.css";
import career from "../Assets/career.png";
import careerbox from "../Assets/career-box.png";

function Career() {
  const [jobPosition, setJobPosition] = useState("");

  const handleApplyNow = (position) => {
    setJobPosition(position);
    // You can add additional logic here, like opening a modal
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
                <h3 className="title">Lorem Ipsum</h3>
                <div className="content-details fadeIn-bottom">
                  <p className="content-text">
                    <p className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                    <button
                      type="button"
                      className="btn"
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
                <h3 className="title">Lorem Ipsum</h3>
                <div className="content-details fadeIn-bottom">
                  <p className="content-text">
                    <p className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                    <button
                      type="button"
                      className="btn"
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
                <h3 className="title">Lorem Ipsum</h3>

                <div className="content-details fadeIn-bottom">
                  <p className="content-text">
                    <p className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                    <button
                      type="button"
                      className="btn"
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
                <h3 className="title">Lorem Ipsum</h3>
                <div className="content-details fadeIn-bottom">
                  <p className="content-text">
                    <p className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                    <button
                      type="button"
                      className="btn"
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
                <h3 className="title">Lorem Ipsum</h3>
                <div className="content-details fadeIn-bottom">
                  <p className="content-text">
                    <p className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                    <button
                      type="button"
                      className="btn"
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
                <h3 className="title">Lorem Ipsum</h3>
                <div className="content-details fadeIn-bottom">
                  <p className="content-text">
                    <p className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                    <button
                      type="button"
                      className="btn"
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
