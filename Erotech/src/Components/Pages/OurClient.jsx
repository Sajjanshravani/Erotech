import React from "react";
import "./CSS/OurClient.css";
import OurClientsBanner from "../Assets/Our Clients.png";
import ClientsPolygon from "../Assets/ClientsPolygon.png";
import WavyGreyBG from "../Assets/WavyGreyBG.png";
import GraywaveBG from "../Assets/GraywaveBG.png";
import Section3Waves from "../Assets/Section3Waves.png";
import ContactDiv from "../ContactDiv/ContactDiv";

const OurClient = () => {
  let stats = [
    {
      id: 0,
      number: 3400,
      text: "UNITING EXPERTS WORLDWIDE",
    },
    {
      id: 1,
      number: 30,
      text: "FLAT STRUCTURE OFFICES IN 6 COUNTRIES",
    },
    {
      id: 2,
      number: "89.3%",
      text: "CLIENT SATISFACTION SCORE",
    },
    {
      id: 3,
      number: "20%",
      text: "ANNUAL GROWTH SINCE THE LAST YEAR",
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
            <div className="stats">
              {stats.map((e, i) => {
                return (
                  <div className="stat">
                    <div className="statBox"></div>
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
              <img src={ClientsPolygon} alt="polygon" />
              <img src={ClientsPolygon} alt="polygon" />
            </div>
            <div className="bottomPoly">
              <img src={ClientsPolygon} alt="polygon" />
              <img src={ClientsPolygon} alt="polygon" />
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
      <ContactDiv />
    </>
  );
};

export default OurClient;
