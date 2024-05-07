import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./CSS/Home.css";
import Homebanner1 from "../Assets/Homebanner1.png";
import Homebanner2 from "../Assets/Homebanner2.png";
import Circle from "../Assets/Circle.png";
import pentagon from "../Assets/pentagon.png";
import investVector1 from "../Assets/investVector1.png";
import investVector2 from "../Assets/investVector2.png";
import Section3Waves from "../Assets/Section3Waves.png";
import GraywaveBG from "../Assets/GraywaveBG.png";
import ContactDiv from "../ContactDiv/ContactDiv";
import IconCategories from "../IconCategories/IconCategories";
import BannerIcon1 from "../Assets/Home Page - Banner - Slide 1 - 1.png";
import BannerIcon2 from "../Assets/Home Page - Banner - Slide 1 - 2.png";
import BannerIcon3 from "../Assets/Home Page - Banner - Slide 1 - 3.png";
import BannerIcon4 from "../Assets/Home Page - Banner - Slide 1 - 4.png";
import BannerIcon5 from "../Assets/Home Page - Banner - Slide 2-1.png";
import BannerIcon6 from "../Assets/Home Page - Banner - Slide 2- 2.png";
import BannerIcon7 from "../Assets/Home Page - Banner - Slide 2-3.png";
import BannerIcon8 from "../Assets/Home Page - Banner - Slide 2-4.png";
import testimonial1 from "../Assets/testimonial1.jpeg";
import testimonial2 from "../Assets/testimonial2.jpeg";
import testimonial3 from "../Assets/testimonial3.jpeg";
import investImg from "../Assets/home page first section.jpg";
import popular1 from "../Assets/2.jpg";
import popular2 from "../Assets/ESD2.jpg";
import popular3 from "../Assets/TrainingpageESD.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  var tests = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  let testimonials = [
    {
      id: 0,
      text: "The Embedded IoT Engineer training at Erotech Solutions was an eye-opener for me. The instructors were incredibly knowledgeable and provided hands-on experience with cutting-edge IoT technologies. I feel confident in my ability to design and implement IoT solutions after completing this program. Highly recommended ",
      image: testimonial1,
    },
    {
      id: 1,
      text: "I can't say enough good things about the Embedded Software Developer training at Erotech Solutions. The curriculum was well-structured, and the instructors were patient and supportive. I learned valuable skills that have helped me advance in my career. Thank you, Erotech Solutions, for the exceptional training!",
      image: testimonial2,
    },
    {
      id: 2,
      text: "As someone passionate about automotive technology, the Embedded Automotive Engineer training at Erotech Solutions exceeded my expectations. The hands-on projects and real-world applications provided valuable insights into the automotive industry. I now feel equipped to tackle complex challenges in this field. Truly grateful for the experience!",
      image: testimonial3,
    },
  ];

  let PopularCourses = [
    {
      id: 0,
      image: popular1,
      title: "Embedded Graduate",
      link: "/training/1",
    },
    {
      id: 1,
      image: popular2,
      title: "Embedded Software Developer",
      link: "/training/2",
    },
    {
      id: 2,
      image: popular3,
      title: "Embedded Automative Engineer",
      link: "/training/3",
    },
  ];

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
    <div>
      <div className="HomeBanner">
        <Slider {...settings}>
          <div className="HomeSlide">
            <img src={Homebanner1} alt="home-banner1" />
            <div className="BannerText">
              <p>Get Personalized Recommendations</p>
              <h2>
                Empowering innovation, one embedded solution at a time with
                Erotech Solutions
              </h2>
              <div className="Bannericons">
                <div className="grayIcon">
                  <img
                    src={BannerIcon1}
                    className="iconBox"
                    alt="bannericons"
                  />
                </div>
                <div className="grayIcon">
                  <img
                    src={BannerIcon2}
                    className="iconBox"
                    alt="bannericons"
                  />
                </div>
                <div className="grayIcon">
                  <img
                    src={BannerIcon3}
                    className="iconBox"
                    alt="bannericons"
                  />
                </div>
                <div className="grayIcon">
                  <img
                    src={BannerIcon4}
                    className="iconBox"
                    alt="bannericons"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="HomeSlide">
            <img src={Homebanner2} alt="home-banner2" />
            <div className="BannerText">
              <p>Revolutionising tech education while empowering clientele</p>
              <h2>Erotech Solutions: Advancing Tech, Inspiring Minds</h2>
              <div className="Bannericons">
                <div className="grayIcon">
                  <img
                    src={BannerIcon5}
                    className="iconBox"
                    alt="bannericons"
                  />
                </div>
                <div className="grayIcon">
                  <img
                    src={BannerIcon6}
                    className="iconBox"
                    alt="bannericons"
                  />
                </div>
                <div className="grayIcon">
                  <img
                    src={BannerIcon7}
                    className="iconBox"
                    alt="bannericons"
                  />
                </div>
                <div className="grayIcon">
                  <img
                    src={BannerIcon8}
                    className="iconBox"
                    alt="bannericons"
                  />
                </div>
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
          <p>Revolutionizing tech education while empowering clientele</p>
          <h2>Erotech Solutions: Advancing Tech, Inspiring Minds</h2>
        </div>
        <div className="invest-body">
          <div className="invest-img">
            <img src={investImg} alt="investImg" />
          </div>
          <div className="invest-text">
            <p>
              At Erotech Solutions, we not only provide cutting-edge solutions
              in embedded software and IoT technologies, but we also offer
              comprehensive training programs to empower individuals and
              organisations in mastering these fields. Our team of experts works
              closely with our clients to develop innovative solutions that meet
              their unique needs and challenges. We pride ourselves on our
              commitment to excellence, as evidenced by our numerous paper
              publications and certifications in the field.
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
      <IconCategories />
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
              Backed by a proven history of excellence, we consistently push the
              boundaries of technology forward. Leveraging our deep expertise in
              hardware, firmware, and software, we engineer solutions that are
              both robust and scalable. Our unwavering commitment to client
              satisfaction drives us to deliver innovative and reliable results.
              Passionate about technological advancement, we remain at the
              forefront of industry evolution. This dedication sets us apart as
              a trusted partner in the ever-changing landscape of embedded
              systems development.
            </p>
          </div>
          <div
            className={`col-lg-7 col-sm-12 section4-Boxes ${
              isSection4Visible ? "visible" : ""
            }`}
          >
            <div className="leftBoxes">
              <div className="section4Box section4Box1">
                <h2>
                  <span className="count">{box1Count}%</span>
                </h2>
                <h3>Training Success Rate</h3>
                <p>Our Success meets with our Expert Trainers</p>
              </div>
              <div className="section4Box section4Box2">
                <h2>
                  <span className="count">{box2Count}%</span>
                </h2>
                <h3>Job Placement Rate</h3>
                <p> Top Companies are hiring our Candidates</p>
              </div>
            </div>
            <div className="rightBoxes">
              <div className="section4Box section4Box3">
                <h2>
                  <span className="count">{box3Count}+</span>
                </h2>
                <h3>Online Instructors</h3>
                <p>Expert Instructors to train the Candidates</p>
              </div>
              <div className="section4Box section4Box4">
                <h2>
                  <span className="count">{box4Count}+</span>
                </h2>
                <h3>Finished Sessions</h3>
                <p>Completed Sessions with our core team</p>
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
          {PopularCourses.map((e, i) => {
            return (
              <div className="popularCourseCard" key={i}>
                <img src={e.image} alt="popular1" />
                <div className="popularHover">
                  <h2>{e.title}</h2>
                  <Link to={e.link}>
                    <button>View Details</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="section6"
        style={{ backgroundImage: `url(${GraywaveBG})` }}
      >
        <h2>Testimonials</h2>
        <Slider {...tests}>
          {testimonials.map((e, i) => {
            return (
              <div className="testimonial" key={i}>
                <div className="test-text">
                  <p>{e.text}</p>
                </div>
                <div className="test-img">
                  <img src={e.image} alt={e.id} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <ContactDiv
        ptag="START TODAY FOR GETTING ONLINE CERTIFICATION"
        htag="You Can Be Your Own Guiding Star With Our Help"
      />
    </div>
  );
};

export default Home;
