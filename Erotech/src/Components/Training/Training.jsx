import React, { useState } from "react";
import "./Training.css";
import backgroundImage from "../Assets/Mask group.png";
import train from "../Assets/train-1.png";
import cbox from "../Assets/cbox.png";

function Training() {
  const [activeTab, setActiveTab] = useState("Description");
  return (
    <div className="train">
      <div
        className="background-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="training">
        <div className="custom">
          <h1>Customer-centric Info-Tech Strategies tier level</h1>
          <div className="tab-layout">
            <div className="tabs">
              <div
                className={`tab ${activeTab === "Description" ? "active" : ""}`}
                onClick={() => setActiveTab("Description")}
              >
                Description
              </div>
              <div
                className={`tab ${activeTab === "Instructor" ? "active" : ""}`}
                onClick={() => setActiveTab("Instructor")}
              >
                Instructor
              </div>
              <div
                className={`tab ${activeTab === "FAQs" ? "active" : ""}`}
                onClick={() => setActiveTab("FAQs")}
              >
                FAQs
              </div>
              <div
                className={`tab ${
                  activeTab === "For Enrollment" ? "active" : ""
                }`}
                onClick={() => setActiveTab("For Enrollment")}
              >
                For Enrollment
              </div>
            </div>
            <div className="content">
              {activeTab === "Description" && (
                <div className="par-train">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                    <br />
                    Remaining essentially unchanged. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </p>

                  <img src={train} className="tra1" alt="" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                    <br />
                    Remaining essentially unchanged. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </p>
                </div>
              )}
              {activeTab === "Instructor" && <div>Instructor Content...</div>}
              {activeTab === "FAQs" && <div>FAQs Content...</div>}
              {activeTab === "For Enrollment" && (
                <div>For Enrollment Content...</div>
              )}
            </div>
          </div>
        </div>
        <div className="custom-image">
          <img src={cbox} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Training;
