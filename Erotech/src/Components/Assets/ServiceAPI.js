import IOTBanner from "../Assets/IOTBanner.png";
import EmbeddedSystemsBanner from "../Assets/EmbeddedSystemsBanner.png";
import EMbeddedSystemsImg from "../Assets/service page-Embedded softwear services.jpg";
import IOTImg from "../Assets/Service page -IOT.jpg";
import Automotive from "../Assets/Service page- Industries Section-Automobile.jpg";
import Fintech from "../Assets/Service page - industries section-Fintech.jpg";
import Telecom from "../Assets/Service - industries-Telecommunications.jpg";
import Medtech from "../Assets/Service page- Industries Section-Medtech.jpg";
import Logistics from "../Assets/Service - industries-Logistics.jpg";
import ConsumerGoods from "../Assets/Service page- Industries Section-Consumer Goods.jpg";

let ServicePage = [
  {
    id: 0,
    page: "EmbeddedSystems",
    banner: EmbeddedSystemsBanner,
    ServiceTitle: "Embedded Systems",
    ServiceInfo:
      "Erotech Solutions offers unparalleled expertise in Embedded Systems services, providing innovative solutions tailored to meet the diverse needs of our clients. With a focus on cutting-edge technology and industry-leading practices, we deliver reliable, efficient, and scalable solutions that drive success in today's competitive market.",
    industryCard: [
      {
        id: 0,
        title: "Automative",
        info: "Revolutionise your automotive systems with Erotech Solutions' Embedded Systems services. From advanced driver assistance systems (ADAS) to vehicle telematics and infotainment, we empower automotive manufacturers and suppliers to innovate and thrive in an ever-evolving industry landscape.",
        bgimg: Automotive,
      },
      {
        id: 1,
        title: "Fintech",
        info: "Transform your financial technology offerings with Erotech Solutions' expertise in Embedded Systems. Whether you're developing secure payment solutions, robust banking systems, or innovative fintech applications, we provide the technical prowess and strategic insight needed to stay ahead in the dynamic fintech sector.",
        bgimg: Fintech,
      },
      {
        id: 2,
        title: "Telecom",
        info: "Empower your telecom infrastructure with Erotech Solutions' Embedded Systems services. From network optimization and software-defined networking (SDN) to IoT connectivity and 5G integration, we enable telecom operators and service providers to deliver seamless, high-performance communication solutions to their customers.",
        bgimg: Telecom,
      },
      {
        id: 3,
        title: "Medtech",
        info: "Elevate your medical devices and healthcare solutions with Erotech Solutions' Embedded Systems expertise. From wearable health monitors to advanced medical imaging systems, we help medtech companies design, develop, and deploy cutting-edge products that improve patient outcomes and enhance healthcare delivery.",
        bgimg: Medtech,
      },
      {
        id: 4,
        title: "Logistic",
        info: "Optimise your supply chain and logistics operations with Erotech Solutions' Embedded Systems services. From fleet management and asset tracking to warehouse automation and predictive analytics, we enable logistics companies to streamline processes, reduce costs, and deliver superior customer service.",
        bgimg: Logistics,
      },
      {
        id: 5,
        title: "Consumer Goods",
        info: "Enhance your consumer electronics and IoT devices with Erotech Solutions' Embedded Systems solutions. From smart home devices and wearable gadgets to connected appliances and IoT-enabled products, we help consumer goods companies deliver innovative, feature-rich products that delight customers and drive brand loyalty.",
        bgimg: ConsumerGoods,
      },
    ],
    section3Image: EMbeddedSystemsImg,
    section3Text:
      "At Erotech Solutions, service excellence is at the core of everything we do. Our team of experienced professionals is dedicated to delivering superior quality, reliability, and value in every project we undertake. From initial consultation to final deployment and beyond, we prioritize customer satisfaction, innovation, and integrity, ensuring that our clients receive the best possible service and solutions.",
    ptag: "Ready to transform your business with cutting-edge Embedded Systems solutions? ",
    htag: "Partner with Erotech Solutions and unlock new possibilities for innovation and growth. Contact us today to learn more and get started",
  },
  {
    id: 1,
    page: "IOT",
    banner: IOTBanner,
    ServiceTitle: "Internet of Things",
    ServiceInfo:
      "Erotech Solutions specialises in providing end-to-end Internet of Things (IoT) services, offering innovative solutions to help businesses leverage the power of connected devices and data. With our expertise in IoT technology, we enable organisations to drive efficiency, improve decision-making, and create new revenue streams in today's interconnected world.",
    industryCard: [
      {
        id: 0,
        title: "Automative",
        info: "Elevate your automotive systems with Erotech Solutions' IoT services. From connected vehicles and fleet management solutions to predictive maintenance and in-car infotainment, we empower automotive manufacturers and suppliers to deliver enhanced driving experiences and streamline operations.",
        bgimg: Automotive,
      },
      {
        id: 1,
        title: "Fintech",
        info: "Transform your financial services with Erotech Solutions' IoT solutions. Whether you're developing smart payment solutions, fraud detection systems, or personalised banking experiences, we help fintech companies harness IoT technology to enhance security, increase efficiency, and deliver innovative financial products and services.",
        bgimg: Fintech,
      },
      {
        id: 2,
        title: "Telecom",
        info: "Enhance your telecom infrastructure with Erotech Solutions' IoT services. From IoT-enabled network management and smart city initiatives to connected devices and consumer IoT applications, we assist telecom operators and service providers in deploying scalable, secure, and reliable IoT solutions to meet the demands of an increasingly connected world.",
        bgimg: Telecom,
      },
      {
        id: 3,
        title: "Medtech",
        info: "Innovate your medical devices and healthcare solutions with Erotech Solutions' IoT expertise. From remote patient monitoring and telemedicine platforms to connected medical devices and health data analytics, we enable medtech companies to improve patient outcomes, increase efficiency, and transform healthcare delivery.",
        bgimg: Medtech,
      },
      {
        id: 4,
        title: "Logistic",
        info: "Optimize your supply chain and logistics operations with Erotech Solutions' IoT solutions. From asset tracking and inventory management to predictive maintenance and route optimization, we help logistics companies reduce costs, increase visibility, and deliver superior customer service in an increasingly competitive market.",
        bgimg: Logistics,
      },
      {
        id: 5,
        title: "Consumer Goods",
        info: "Enhance your consumer electronics and IoT devices with Erotech Solutions' IoT services. From smart home devices and wearables to connected appliances and IoT-enabled products, we assist consumer goods companies in delivering innovative, connected experiences that delight customers and drive brand loyalty.",
        bgimg: ConsumerGoods,
      },
    ],
    section3Image: IOTImg,
    section3Text:
      "At Erotech Solutions, service excellence is our priority. With a team of experienced professionals and a customer-centric approach, we are committed to delivering superior quality, reliability, and value in every project we undertake. From initial consultation to ongoing support, we work closely with our clients to ensure that their IoT solutions meet their unique needs and exceed their expectations.",
    ptag: "Ready to unlock the potential of IoT for your business?",
    htag: "Partner with Erotech Solutions and harness the power of connected devices and data to drive innovation and growth. Contact us today to learn more and get started.",
  },
];

export default ServicePage;
