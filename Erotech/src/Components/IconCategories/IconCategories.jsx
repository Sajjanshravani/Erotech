import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import pentagon from "../Assets/pentagon.png";
import investVector2 from "../Assets/investVector2.png";
import Section3Pentagon from "../Assets/Section3Pentagon.png";
import Section3Dots from "../Assets/Section3Dots.png";
import catogoryImage1 from "../Assets/catogoryImage.png";
import catogoryImage2 from "../Assets/catogoryImage2.jpg";
import catogoryImage3 from "../Assets/catogoryImage3.jpg";
import catogoryImage4 from "../Assets/catogoryImage4.jpg";
import catogoryImage5 from "../Assets/catogoryImage5.jpg";
import graduationIcon from "../Assets/graduationIcon.png";
import softwareIcon from "../Assets/softwareIcon.png";
import automotiveIcon from "../Assets/automotiveIcon.png";
import architectureIcon from "../Assets/architectureIcon.png";
import workshopIcon from "../Assets/workshopIcon.png";
import Section3Waves from "../Assets/Section3Waves.png";

const IconCategories = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  let Categories = [
    {
      id: 0,
      title: "Embedded Graduate",
      icon: graduationIcon,
      image: catogoryImage1,
      text1:
        "At Erotech Solutions, our Embedded Graduate program is your gateway to a thriving career in embedded systems. Dive into a comprehensive curriculum designed to equip you with the skills and expertise needed to excel in this dynamic field. Through hands-on projects, expert instruction, and personalized mentorship, you'll gain a solid foundation in embedded hardware and software, preparing you for real-world challenges and opportunities. Join us and embark on a transformative journey towards becoming a sought-after embedded systems professional.",
      text2:
        "Explore our Embedded Graduate program page to learn more about how you can kickstart your career in embedded systems with Erotech Solutions.",
    },
    {
      id: 1,
      title: "Embedded Software Developer",
      icon: softwareIcon,
      image: catogoryImage2,
      text1:
        "Join the ranks of innovation as an Embedded Software Developer at Erotech Solutions. As part of our dynamic team, you'll have the opportunity to work on cutting-edge projects that push the boundaries of technology. From designing efficient algorithms to optimizing code for resource-constrained environments, you'll play a key role in shaping the future of embedded systems. Join us and unleash your creativity and technical expertise to create software solutions that drive the next wave of technological advancements.",
      text2:
        "Discover more about our Embedded Software Developer opportunities and how you can become part of our innovative team at Erotech Solutions.",
    },
    {
      id: 2,
      title: "Embedded Automotive Engineer",
      icon: automotiveIcon,
      image: catogoryImage3,
      text1:
        "Rev up your career in automotive technology with Erotech Solutions' Embedded Automotive Engineer roles. Join us on the fast track to innovation as we develop groundbreaking solutions for the automotive industry. From advanced driver assistance systems (ADAS) to autonomous vehicles, you'll be at the forefront of automotive technology, shaping the future of mobility. Join our team and accelerate your career as we drive innovation forward together.",
      text2:
        "Learn more about our Embedded Automotive Engineer positions and how you can play a pivotal role in shaping the future of automotive technology at Erotech Solutions.",
    },
    {
      id: 3,
      title: "Embedded IoT Engineer",
      icon: architectureIcon,
      image: catogoryImage4,
      text1:
        "At Erotech Solutions, we're leading the charge in the Internet of Things (IoT) revolution, and we're looking for passionate individuals to join our team as Embedded IoT Engineers. Dive into the world of connected devices and data-driven solutions as we develop innovative IoT solutions that transform industries. From designing sensor networks to developing IoT platforms, you'll have the opportunity to work on cutting-edge projects that make a real-world impact. Join us and be part of the digital transformation with Erotech Solutions.",
      text2:
        "Explore our Embedded IoT Engineer opportunities and discover how you can shape the future of IoT with Erotech Solutions.",
    },
    {
      id: 4,
      title: "Workshops",
      icon: workshopIcon,
      image: catogoryImage5,
      text1:
        "Ready to take your skills to the next level? Join us for our hands-on workshops at Erotech Solutions. Led by industry experts, our workshops cover a wide range of topics, from programming languages to emerging technologies, providing you with practical experience and valuable insights. Whether you're a beginner looking to get started or an experienced professional looking to expand your knowledge, our workshops offer something for everyone. Join us and unlock your potential with Erotech Solutions.",
      text2:
        "Discover more about our workshops and how you can advance your skills and knowledge with Erotech Solutions.",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState(0);
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
    <div className="IconCategories">
      <div className="desktopView">
        <div className="explore">
          <p>
            we don't just develop solutions—we redefine what's possible in the
            world of embedded systems technology.
          </p>
          <h2>Explore Categories</h2>
          <div className="categories">
            {Categories.map((e, i) => {
              return (
                <div
                  className="category"
                  key={i}
                  onClick={() => setSelectedCategory(i)}
                >
                  <img src={e.icon} alt={e.id} />
                  <h3>{e.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div
          ref={section3Ref}
          className={`section3 ${isSection3Visible ? "visible" : ""}`}
        >
          {selectedCategory !== null && (
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
                <div className="GrayImg">
                  <img
                    src={Categories[selectedCategory].image}
                    alt="grayImg"
                    className="categorygrayImg"
                  />
                </div>
              </div>
              <div
                className={`col-lg-5 col-sm-12 section3-Description ${
                  isSection3Visible ? "visible" : ""
                }`}
              >
                <p>{Categories[selectedCategory].text1}</p>
                <p>{Categories[selectedCategory].text2}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mobileView">
        <div className="explore">
          <p>
            we don't just develop solutions—we redefine what's possible in the
            world of embedded systems technology.
          </p>
          <h2>Explore Categories</h2>
        </div>
        <Slider {...settings}>
          {Categories.map((Categories, i) => {
            return (
              <div className="mobileCategory">
                <div className="row">
                  <div className="col-lg-7 col-sm-12 mobileCAtegory-Image">
                    <img src={Categories.icon} alt={Categories.id} />
                    <h3>{Categories.title}</h3>
                  </div>
                  <div className="col-lg-5 col-sm-12 mobileCategory-Description">
                    <p>{Categories.text1}</p>
                    <p>{Categories.text2}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default IconCategories;
