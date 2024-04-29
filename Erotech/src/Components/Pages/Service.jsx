import React, { useEffect, useRef, useState } from "react";
import "./CSS/Service.css";
import GraywaveBG from "../Assets/GraywaveBG.png";
import ContactDiv from "../ContactDiv/ContactDiv";
import Section3Pentagon from "../Assets/Section3Pentagon.png";
import Section3Dots from "../Assets/Section3Dots.png";
import Section3Waves from "../Assets/Section3Waves.png";
import investVector2 from "../Assets/investVector2.png";
import pentagon from "../Assets/pentagon.png";
import ServicePage from "../Assets/ServiceAPI";

const Service = ({ page }) => {
  const currentPage = ServicePage.find((content) => content.page === page);

  if (!currentPage) {
    return <div>Page not found</div>;
  }

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
  return (
    <>
      <div className="ServiceBanner">
        <img src={currentPage.banner} alt="ServiceBanner" />
      </div>
      <div className="ServiceAbout">
        <h2>{currentPage.ServiceTitle}</h2>
        <p>{currentPage.ServiceInfo}</p>
      </div>
      <div
        className="industriesServe"
        style={{ backgroundImage: `url(${GraywaveBG})` }}
      >
        <h2>Industries We Serve</h2>
        <div className="industryCards">
          {currentPage.industryCard.map((e, i) => {
            return (
              <div className="industyCard">
                <h3>{e.title}</h3>
                <p>{e.info}</p>
              </div>
            );
          })}
        </div>
        <button className="industrybtn">Talk to us to learn more</button>
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
      <ContactDiv />
    </>
  );
};

export default Service;
