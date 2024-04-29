import React, { useEffect, useRef, useState } from "react";
import "./Publication.css";
import background from "../Assets/banner-about.png";
import pentagon from "../Assets/pentagon.png";
import investVector2 from "../Assets/investVector2.png";
import Section3Pentagon from "../Assets/Section3Pentagon.png";
import Section3Dots from "../Assets/Section3Dots.png";
import Section3Waves from "../Assets/Section3Waves.png";
import greywave from "../Assets/Frame-1.png";
import wave from "../Assets/wave.png";

function Publication() {
  const [isSection3Visible, setIsSection3Visible] = useState(false);
  // const section3Ref = useRef(null);
  const section3Ref2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSection3Visible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    // if (section3Ref1.current) {
    //   observer.observe(section3Ref1.current);
    // }

    if (section3Ref2.current) {
      observer.observe(section3Ref2.current);
    }

    return () => {
      // if (section3Ref1.current) {
      //   observer.unobserve(section3Ref1.current);
      // }

      if (section3Ref2.current) {
        observer.unobserve(section3Ref2.current);
      }
    };
  }, []);

  return (
    <div className="pub">
      <div className="publication-banner">
        <img src={background} alt="" />
        <h1>Get Personalized Recommendations</h1>
        <p>Your high- Quality Training Specialist of IT - EROTECH Solutions</p>
      </div>
      <div className="text-image-publication">
        <div
          ref={section3Ref2}
          className={`section3 ${isSection3Visible ? "visible" : ""}`}
        >
          <div className="row">
            <div
              className={`col-lg-7 col-sm-12 section3-Image ${
                isSection3Visible ? "visible" : ""
              }`}
            >
              <img
                src={pentagon}
                alt="Section3Vectors"
                className="Section3Vector vector13"
              />
              <img
                src={investVector2}
                alt="Section3Vectors"
                className="Section3Vector vector23"
              />
              <img
                src={Section3Dots}
                alt="Section3Vectors"
                className="Section3Vector dotsVector3"
              />
              <img
                src={Section3Waves}
                alt="Section3Vectors"
                className="Section3Vector wavesVector3"
              />
              <img
                src={Section3Pentagon}
                alt="Section3Vectors"
                className="Section3Vector pentagonVector3"
              />
              <div className="GrayImg3">IMAGE</div>
            </div>
            <div
              className={`col-lg-5 col-sm-12 section3-Description3 ${
                isSection3Visible ? "visible" : ""
              }`}
            >
              <h1>Why Choose Erotech Solutions Publication?</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pub-greywave">
        <img src={greywave} alt="" />
        <p>5 training things</p>
        <div className="pub-box">
          <div className="pub-box1"></div>
          <div className="pub-box1"></div>
          <div className="pub-box1"></div>
        </div>
        <div className="pub-boxes">
          <div className="pub-box2"></div>
          <div className="pub-box2"></div>
          <img src={wave} alt="" />
        </div>
      </div>
      <div className="con-last">
        <div className="contactusDiv">
          <p>START TODAY FOR GETTING ONLINE CERTIFICATION</p>
          <h2>You Can Be Your Own Guiding Star With Our Help</h2>
          <button>Contact US</button>
        </div>
      </div>
    </div>
  );
}

export default Publication;
