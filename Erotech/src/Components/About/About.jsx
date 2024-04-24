import React, { useEffect, useState } from "react";
import "./About.css";
import curl from "../Assets/wave.png";
import backgroundImage from "../Assets/Mask group.png";
import star from "../Assets/star.png";
import smallstart from "../Assets/smallstar.png";
import pent from "../Assets/pentagon.png";
import greywave from "../Assets/greywave.png";
import ring from "../Assets/ring.png";

const About = () => {
  const stats = [
    {
      number: 1.926,
      label: "Finished Sessions",
      subtext: "Get Some Market Guidance and Free Your Future Career.",
    },
    {
      number: 100,
      label: "Satisfaction Rate",
      subtext: "Develop Skill for Career Various Sciences & Languages.",
    },
    {
      number: 3092,
      label: "Enrolled Learners",
      subtext: "Make Reservation With Consultant To Get Dream Career.",
    },
    {
      number: 20000,
      label: "Online Instructors",
      subtext: "Learn From Anywhere In The World With Any Devices.",
    },
  ];

  const [countingDone, setCountingDone] = useState(false);

  useEffect(() => {
    if (!countingDone) {
      const delay = 500; // Delay between each count in milliseconds
      const duration = 2000; // Duration of the counting animation in milliseconds

      const counters = document.querySelectorAll(".stat-number");
      counters.forEach((counter, index) => {
        const target = stats[index].number;
        const increment = Math.ceil(target / (duration / delay));
        let currentCount = 0;

        const updateCount = () => {
          currentCount += increment;
          if (currentCount >= target) {
            counter.textContent = target;
            setCountingDone(true);
          } else {
            counter.textContent = currentCount;
            setTimeout(updateCount, delay);
          }
        };

        updateCount();
      });
    }
  }, [countingDone, stats]);

  return (
    <div className="about">
      <div
        className="background-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="container-about">
        <div className="text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
        <div className="image">
          {/* <img src={imageSrc} alt="Your Image" /> */}
        </div>
      </div>
      <div className="wave">
        <img src={curl} alt="" />
      </div>
      <div className="star">
        <img src={star} alt="star" />
      </div>
      <div className="smallstar">
        <img src={smallstart} alt="smallstar" />
      </div>
      <div className="pent"></div>
      <div className="smallpen">
        <img src={pent} alt="" />
      </div>
      <div className="statistics-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-number">
              {index === 1
                ? `${stat.number}%`
                : index === 2
                ? `${stat.number.toLocaleString()}+`
                : index === 3
                ? `${(stat.number / 1000).toFixed(1)}k+`
                : stat.number.toLocaleString()}
            </div>
            <div className="stat-label">{stat.label}</div>
            <p>{stat.subtext}</p>
          </div>
        ))}
      </div>
      <>
        <div className="greywave">
          <img src={greywave} alt="wave" />
        </div>
        <div className="grey">
          <div className="greybox"></div>
          <div className="greybox"></div>
          <div className="greybox"></div>
        </div>
        <img src={smallstart} className="red" alt="" />
        <img src={ring} className="ring" alt="" />
        <img src={curl} className="curl" alt="" />
        <img src={pent} className="greypent" alt="" />
        <img src={pent} className="orangepent" alt="" />
      </>

      <div className="cont-rep">
        <div className="abu-cont">
          <div className="image-1">
            {/* <img src={imageSrc} alt="Your Image" /> */}
          </div>
          <div className="text-1">
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
        <>
          <img src={curl} className="or-wave" alt="" />
          <img src={star} className="star-1" alt="star" />
          <img src={smallstart} className="smallstar-1" alt="smallstar" />
          <div className="pent-1"></div>
          <div className="smallpen-1">
            <img src={pent} alt="" />
          </div>
        </>
      </div>
      <>
        <div className="start-today">
          <p className="top-text">
            START TODAY FOR GETTING ONLINE CERTIFICATION
          </p>
          <h2 className="main-text">
            You Can Be Your Own Guiding Star With Our Help
          </h2>
          <button className="contact-button">Contact Us</button>
        </div>
      </>
    </div>
  );
};

export default About;
