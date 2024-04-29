import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import background from "../Assets/banner-about.png";
import pentagon from "../Assets/pentagon.png";
import investVector2 from "../Assets/investVector2.png";
import Section3Pentagon from "../Assets/Section3Pentagon.png";
import Section3Dots from "../Assets/Section3Dots.png";
import Section3Waves from "../Assets/Section3Waves.png";
import greywave from "../Assets/Frame.png";

function About() {
  const [isSection3Visible, setIsSection3Visible] = useState(false);
  const section3Ref1 = useRef(null); // First section ref
  const section3Ref2 = useRef(null); // Second section ref

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSection3Visible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (section3Ref1.current) {
      observer.observe(section3Ref1.current);
    }

    if (section3Ref2.current) {
      observer.observe(section3Ref2.current);
    }

    return () => {
      if (section3Ref1.current) {
        observer.unobserve(section3Ref1.current);
      }

      if (section3Ref2.current) {
        observer.unobserve(section3Ref2.current);
      }
    };
  }, []);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const numbers = [100, 200, 300, 400];

  useEffect(() => {
    const timeouts = numbers.map((number, index) => {
      let start = 0;
      const interval = setInterval(() => {
        if (start <= number) {
          setCounts((prevCounts) => {
            const updatedCounts = [...prevCounts];
            updatedCounts[index] = start;
            return updatedCounts;
          });
          start++;
        } else {
          clearInterval(interval);
        }
      }, 5);
      return interval;
    });

    return () => {
      timeouts.forEach((interval) => clearInterval(interval));
    };
  }, [numbers]);
  const boxContent = [
    {
      title: "Finished Sessions",
      description: "Get Some Variety Guidance And For Your Future Career.",
    },
    {
      title: "Satisfaction Rate",
      description: "Develop Skill For Career Various Science & Language.",
    },
    {
      title: "Enrolled Learners",
      description: "Make Reservation With Consultant To Get Dream Career.",
    },
    {
      title: "Online Instructors",
      description: "Learn From Anywhere In The World With Any Devices.",
    },
  ];

  return (
    <div className="abu">
      <div className="about">
        <img src={background} alt="" />
        <h1>Get Personalized Recommendations</h1>
        <p>Your high- Quality Training Specialist of IT - EROTECH Solutions</p>
      </div>
      <div className="about-ani">
        <div
          ref={section3Ref1}
          className={`section3 ${isSection3Visible ? "visible" : ""}`}
        >
          <div className="row">
            <div
              className={`col-lg-5 col-sm-12 section3-Description11 ${
                isSection3Visible ? "visible" : ""
              }`}
            >
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
            <div
              className={`col-lg-7 col-sm-12 section3-Image ${
                isSection3Visible ? "visible" : ""
              }`}
            >
              <img
                src={pentagon}
                alt="Section3Vectors"
                className="Section3Vector vector12"
              />
              <img
                src={investVector2}
                alt="Section3Vectors"
                className="Section3Vector vector22"
              />
              <img
                src={Section3Dots}
                alt="Section3Vectors"
                className="Section3Vector dotsVector1"
              />
              <img
                src={Section3Waves}
                alt="Section3Vectors"
                className="Section3Vector wavesVector1"
              />
              <img
                src={Section3Pentagon}
                alt="Section3Vectors"
                className="Section3Vector pentagonVector1"
              />
              <div className="Graybox">IMAGE</div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-1">
        <div className="container">
          {counts.map((count, index) => (
            <div
              className="animated-box"
              key={index}
              style={{ animationDelay: `${index + 1}s` }}
            >
              <span className="animated-count">{count}</span>
              <h3>{boxContent[index].title}</h3>
              <p>{boxContent[index].description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="greywave">
        <img src={greywave} alt="" />
        <div className="grey">
          <div className="greybox"></div>
          <div className="greybox"></div>
          <div className="greybox"></div>
        </div>
      </div>
      <div className="text-image">
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

export default About;
