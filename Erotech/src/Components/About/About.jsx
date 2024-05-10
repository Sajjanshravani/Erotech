import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import background from "../Assets/banner-about.png";
import pentagon from "../Assets/pentagon.png";
import investVector2 from "../Assets/investVector2.png";
import Section3Pentagon from "../Assets/Section3Pentagon.png";
import Section3Dots from "../Assets/Section3Dots.png";
import Section3Waves from "../Assets/Section3Waves.png";
import greywave from "../Assets/Frame.png";
import about1 from "../Assets/Aboutus1.jpg";
import about2 from "../Assets/Aboutus2.jpg";

function About() {
  const section3Ref1 = useRef(null); // Ref for the first section
  const section3Ref2 = useRef(null); // Ref for the second section
  const [isSection3Visible1, setIsSection3Visible1] = useState(false);
  const [isSection3Visible2, setIsSection3Visible2] = useState(false);

  // useEffect for intersection observer for section 1
  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSection3Visible1(true);
          observer1.disconnect(); // Disconnect observer once section is intersecting
        }
      },
      { threshold: 0.5 }
    );

    if (section3Ref1.current) {
      observer1.observe(section3Ref1.current);
    }

    return () => {
      if (section3Ref1.current) {
        observer1.unobserve(section3Ref1.current);
      }
    };
  }, []);

  // useEffect for intersection observer for section 2
  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSection3Visible2(true);
          observer2.disconnect(); // Disconnect observer once section is intersecting
        }
      },
      { threshold: 0.5 }
    );

    if (section3Ref2.current) {
      observer2.observe(section3Ref2.current);
    }

    return () => {
      if (section3Ref2.current) {
        observer2.unobserve(section3Ref2.current);
      }
    };
  }, []);
  const [isSection4Visible, setIsSection4Visible] = useState(false);
  const section4Ref = useRef(null);
  const [box1Count, setBox1Count] = useState(0);
  const [box2Count, setBox2Count] = useState(0);
  const [box3Count, setBox3Count] = useState(0);
  const [box4Count, setBox4Count] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSection4Visible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (section4Ref.current) {
      observer.observe(section4Ref.current);
    }

    return () => {
      if (section4Ref.current) {
        observer.unobserve(section4Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    let start = 0;
    let end1 = 100;
    let end2 = 98;
    let end3 = 100;
    let end4 = 1000;
    let totalSteps = 100;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const step1 = ((end1 - start) * (currentStep / totalSteps)).toFixed(0);
      const step2 = ((end2 - start) * (currentStep / totalSteps)).toFixed(0);
      const step3 = ((end3 - start) * (currentStep / totalSteps)).toFixed(0);
      const step4 = ((end4 - start) * (currentStep / totalSteps)).toFixed(0);
      setBox1Count(step1);
      setBox2Count(step2);
      setBox3Count(step3);
      setBox4Count(step4);

      if (currentStep >= totalSteps) {
        clearInterval(interval);
      }
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [isSection4Visible]);

  return (
    <div className="abu">
      <div className="about">
        <img src={background} alt="" />
        <h1>Empowering Innovation</h1>
        <p>Unveiling the Story of Erotech Solutions</p>
      </div>
      <div className="about-ani">
        <div
          ref={section3Ref1}
          className={`section3 ${isSection3Visible1 ? "visible" : ""}`} // Use isSection3Visible1 for visibility
        >
          <div className="row">
            <div
              className={`col-lg-5 col-sm-12 section3-Description11 ${
                isSection3Visible1 ? "visible" : ""
              }`}
            >
              <p>
                Welcome to Erotech Solutions, your premier destination for
                cutting-edge training and consultancy services in Embedded
                Systems.
                <br />
                At Erotech Solutions, we specialize in empowering individuals
                and businesses with the knowledge and skills needed to excel in
                the dynamic field of Embedded Systems. With a deep understanding
                of the industry's evolving landscape, we're dedicated to
                equipping our clients with the tools and expertise necessary to
                thrive in today's technology-driven world.
              </p>
            </div>
            <div
              className={`col-lg-7 col-sm-12 section3-Image ${
                isSection3Visible1 ? "visible" : ""
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
              <div className="Graybox">
                <img src={about1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-1">
        <div className="container">
          <div className="animated-box">
            <span className="animated-count">{box1Count}%</span>
            <h3>Training Success Rate</h3>
            <p>Our Success meets with our Expert Trainers</p>
          </div>
          <div className="animated-box">
            <span className="animated-count">{box2Count}%</span>
            <h3>Job Placement Rate</h3>
            <p>Top Companies are hiring our Candidates</p>
          </div>
          <div className="animated-box">
            <span className="animated-count">{box3Count}+</span>
            <h3>Online Instructors</h3>
            <p>Expert Instructors to train the Candidates</p>
          </div>
          <div className="animated-box">
            <span className="animated-count">{box4Count}+</span>
            <h3>Finished Sessions</h3>
            <p>Completed Sessions with our core team</p>
          </div>
          {/* Repeat for other boxes */}
        </div>
      </div>

      {/* <div className="greywave">
        <img src={greywave} alt="" />
        <div className="grey">
          <div className="greybox"></div>
          <div className="greybox"></div>
          <div className="greybox"></div>
        </div>
      </div> */}
      <div className="text-image">
        <div
          ref={section3Ref2}
          className={`section3 ${isSection3Visible2 ? "visible" : ""}`} // Use isSection3Visible2 for visibility
        >
          <div className="row">
            <div
              className={`col-lg-7 col-sm-12 section3-Image ${
                isSection3Visible2 ? "visible" : ""
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
              <div className="GrayImg3">
                <img src={about2} alt="" />
              </div>
            </div>
            <div
              className={`col-lg-5 col-sm-12 section3-Description3 ${
                isSection3Visible2 ? "visible" : ""
              }`}
            >
              <p>
                Our team of seasoned professionals brings a wealth of experience
                and insight to every project, ensuring that our training
                programs and consultancy services are not only comprehensive but
                also tailored to meet the specific needs of our clients. Whether
                you're a novice looking to break into the world of Embedded
                Systems or a seasoned professional seeking to expand your skill
                set, Erotech Solutions is here to support you every step of the
                way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="con-last">
        <div className="contactusDiv">
          <p>
            Join us as we embark on a journey of discovery and innovation with
            Erotech Solutions.
          </p>
          <h2>
            Together, let's unlock new opportunities and shape the future of
            Embedded Systems.
          </h2>
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

export default About;
