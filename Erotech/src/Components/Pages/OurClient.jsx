import React from "react";
import "./CSS/OurClient.css";
import OurClientsBanner from "../Assets/Our Clients.png";
import WavyGreyBG from "../Assets/WavyGreyBG.png";
import Section3Waves from "../Assets/Section3Waves.png";
import ContactDiv from "../ContactDiv/ContactDiv";
import Experience from "../Assets/Our Clients Page - Experience.png";
import Customer from "../Assets/Our Clients Page - Customer Satisfaction.png";
import Growth from "../Assets/Our Clients Page - Growth.png";
import HappyClients from "../Assets/Our Clients Page - Happy Clients.png";
import icon1 from "../Assets/Our Clients Icon 1.png";
import icon2 from "../Assets/Our Clients Icon  2.png";
import icon3 from "../Assets/Our Clients Icon  3.png";
import icon4 from "../Assets/Our Clients Icon  4.png";

const OurClient = () => {
  let stats = [
    {
      id: 0,
      number: "15+",
      text: "Years of Experience",
      img: Experience,
    },
    {
      id: 1,
      number: "95%",
      text: "Client Satisfaction Score",
      img: Customer,
    },
    {
      id: 2,
      number: "30%",
      text: "Annual growth for every year",
      img: Growth,
    },
    {
      id: 3,
      number: "100+",
      text: "Happy Clients",
      img: HappyClients,
    },
  ];
  let Clients = [
    {
      id: 0,
      logo: "Logo",
      name: "Company Name",
    },
    {
      id: 1,
      logo: "Logo",
      name: "Company Name",
    },
    {
      id: 2,
      logo: "Logo",
      name: "Company Name",
    },
    {
      id: 3,
      logo: "Logo",
      name: "Company Name",
    },
    {
      id: 4,
      logo: "Logo",
      name: "Company Name",
    },
    {
      id: 5,
      logo: "Logo",
      name: "Company Name",
    },
    {
      id: 6,
      logo: "Logo",
      name: "Company Name",
    },
    {
      id: 7,
      logo: "Logo",
      name: "Company Name",
    },
    {
      id: 8,
      logo: "Logo",
      name: "Company Name",
    },
    {
      id: 9,
      logo: "Logo",
      name: "Company Name",
    },
    {
      id: 10,
      logo: "Logo",
      name: "Company Name",
    },
    {
      id: 11,
      logo: "Logo",
      name: "Company Name",
    },
  ];
  return (
    <>
      <div className="ClientBanner">
        <img src={OurClientsBanner} alt="ClientsBanner" />
      </div>
      <div className="Deliver">
        <div className="row">
          <div className="col-lg-7 col-sm-12 deliverText">
            <h2>How We Deliver</h2>
            <p>
              At Erotech Solutions, we deliver value to our clients through a
              combination of expertise, collaboration, and personalized service.
              We begin by understanding your unique needs and objectives and
              tailoring our solutions accordingly. Our team of industry experts
              brings years of experience and insight to every project, ensuring
              that you receive the highest level of guidance and support.
              Through open communication and a collaborative approach, we work
              hand-in-hand with our clients to achieve their goals. Continuous
              improvement and a commitment to exceptional service are at the
              core of how we deliver results, ensuring that our clients stay
              ahead in the fast-paced world of Embedded Systems.
            </p>
            <div className="stats">
              {stats.map((e, i) => {
                return (
                  <div className="stat">
                    <div className="statBox">
                      <img src={e.img} alt={e.id} />
                    </div>
                    <div className="statText">
                      <h3>{e.number}</h3>
                      <h6>{e.text}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 deliverImage">
            <div className="topPoly">
              <div className="hex">
                <img src={icon1} alt="1" />
              </div>
              <div className="hex">
                <img src={icon2} alt="2" />
              </div>
            </div>
            <div className="bottomPoly">
              <div className="hex">
                <img src={icon3} alt="3" />
              </div>
              <div className="hex">
                <img src={icon4} alt="4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="clients"
        style={{ backgroundImage: `url(${WavyGreyBG})` }}
      >
        <h2>Our Clients</h2>
        <div className="clientCards">
          {Clients.map((e, i) => {
            return (
              <div className="clientCard">
                <h2>{e.logo}</h2>
                <p>{e.name}</p>
              </div>
            );
          })}
        </div>
        <img src={Section3Waves} alt="waves" className="WaveClient" />
      </div>
      <ContactDiv
        ptag="Ready to elevate your business or career in Embedded Systems?"
        htag="Partner with Erotech Solutions today and unlock new possibilities for success."
      />
    </>
  );
};

export default OurClient;
