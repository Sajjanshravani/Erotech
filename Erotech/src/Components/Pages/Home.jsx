import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./CSS/Home.css";
import Homebanner1 from "../Assets/Homebanner1.png";
import Homebanner2 from "../Assets/Homebanner2.png";
import Circle from "../Assets/Circle.png";
import pentagon from "../Assets/pentagon.png";
import investVector1 from "../Assets/investVector1.png";
import investVector2 from "../Assets/investVector2.png";
import IconCarousel from "../IconCarousel/IconCarousel";
import Section3Pentagon from "../Assets/Section3Pentagon.png";
import Section3Dots from "../Assets/Section3Dots.png";
import Section3Waves from "../Assets/Section3Waves.png";
import Section6BG from "../Assets/Section6BG.png";
import ContactDiv from "../ContactDiv/ContactDiv";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const [isVisible, setIsVisible] = useState(false);
  const investingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (investingRef.current) {
      observer.observe(investingRef.current);
    }

    return () => {
      if (investingRef.current) {
        observer.unobserve(investingRef.current);
      }
    };
  }, []);

  const [isSection3Visible, setIsSection3Visible] = useState(false);
  const section3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSection3Visible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (section3Ref.current) {
      observer.observe(section3Ref.current);
    }

    return () => {
      if (section3Ref.current) {
        observer.unobserve(section3Ref.current);
      }
    };
  }, []);

  const [isSection4Visible, setIsSection4Visible] = useState(false);
  const section4Ref = useRef(null);

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

  return (
    <>
      <div className="HomeBanner">
        <Slider {...settings}>
          <div className="HomeSlide">
            <img src={Homebanner1} alt="home-banner1" />
            <div className="BannerText">
              <p>Get Personalized Recommendations</p>
              <h2>
                Your high- Quality Training <br />
                Specialist of IT - EROTECH Solutions
              </h2>
              <div className="Bannericons">
                <div className="iconBox">
                  icon <br />
                  text
                </div>
                <div className="iconBox"></div>
                <div className="iconBox"></div>
                <div className="iconBox"></div>
              </div>
            </div>
          </div>
          <div className="HomeSlide">
            <img src={Homebanner2} alt="home-banner2" />
            <div className="BannerText">
              <p>Get Personalized Recommendations</p>
              <h2>
                Your high- Quality Training <br />
                Specialist of IT - EROTECH Solutions
              </h2>
              <div className="Bannericons">
                <div className="iconBox">
                  icon <br />
                  text
                </div>
                <div className="iconBox"></div>
                <div className="iconBox"></div>
                <div className="iconBox"></div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div
        ref={investingRef}
        className={`investing ${isVisible ? "visible" : ""}`}
      >
        <div className="invest-title">
          <p>STUDY WITH YOUR FAVORITE TUTORS</p>
          <h2>Investing In Yourself</h2>
        </div>
        <div className="invest-body">
          <div className="invest-img">IMAGE</div>
          <div className="invest-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <img src={Circle} alt="vector1" className="vector1 investVector" />
        <img
          src={investVector1}
          alt="vector2"
          className="vector2 investVector"
        />
        <img
          src={investVector2}
          alt="vector3"
          className="vector3 investVector"
        />
        <img src={pentagon} alt="vector4" className="vector4 investVector" />
      </div>
      <div className="explore">
        <p>LARGEST SELECTION OF COURSES</p>
        <h2>Explore Categories</h2>
        <IconCarousel />
      </div>
      <div
        ref={section3Ref}
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
              className="Section3Vector vector1"
            />
            <img
              src={investVector2}
              alt="Section3Vectors"
              className="Section3Vector vector2"
            />
            <img
              src={Section3Dots}
              alt="Section3Vectors"
              className="Section3Vector dotsVector"
            />
            <img
              src={Section3Waves}
              alt="Section3Vectors"
              className="Section3Vector wavesVector"
            />
            <img
              src={Section3Pentagon}
              alt="Section3Vectors"
              className="Section3Vector pentagonVector"
            />
            <div className="GrayImg">IMAGE</div>
          </div>
          <div
            className={`col-lg-5 col-sm-12 section3-Description ${
              isSection3Visible ? "visible" : ""
            }`}
          >
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div
        ref={section4Ref}
        className={`section4 ${isSection4Visible ? "visible" : ""}`}
      >
        <div className="row">
          <div
            className={`col-lg-5 col-sm-12 section4-Description ${
              isSection4Visible ? "visible" : ""
            }`}
          >
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div
            className={`col-lg-7 col-sm-12 section4-Boxes ${
              isSection4Visible ? "visible" : ""
            }`}
          >
            <div className="leftBoxes">
              <div className="section4Box section4Box1">
                <h2>1.926</h2>
                <h3>Finished Sessions</h3>
                <p>Get Some Variety Guidance And For Your Future Career.</p>
              </div>
              <div className="section4Box section4Box2">
                <h2>3.092+</h2>
                <h3>Enrolled Learners</h3>
                <p>GMake Reservation With Consultant To Get Dream Career.</p>
              </div>
            </div>
            <div className="rightBoxes">
              <div className="section4Box section4Box3">
                <h2>100%</h2>
                <h3>Satisfaction Rate</h3>
                <p>Develop Skill For Career Various Science & Language.</p>
              </div>
              <div className="section4Box section4Box4">
                <h2>20k+</h2>
                <h3>Online Instructors</h3>
                <p>Learn From Anywhere In The World With Any Devices.</p>
              </div>
            </div>
            <img
              src={Section3Waves}
              alt="Section3Vectors"
              className="Section4wavesVector"
            />
          </div>
        </div>
      </div>
      <div className="popularCourses">
        <p>BEGIN YOUR JOURNEY AT EROTECH</p>
        <h2>Popular Courses</h2>
        <div className="popularCourseCards">
          <div className="popularCourseCard"></div>
          <div className="popularCourseCard"></div>
          <div className="popularCourseCard"></div>
        </div>
      </div>
      <div
        className="section6"
        style={{ backgroundImage: `url(${Section6BG})` }}
      >
        <div className="section6ImageBox"></div>
      </div>
      <ContactDiv />
    </>
  );
};

export default Home;
