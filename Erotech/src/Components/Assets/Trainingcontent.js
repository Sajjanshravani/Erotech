import cbox from "../Assets/cbox.png";
import train from "../Assets/train-1.png";
import Embedded from "../Assets/Embedded Graduate.jpg";
import IOT1 from "../Assets/IOT1.jpg";
import IOT2 from "../Assets/IOT2.jpg";
import ESD1 from "../Assets/ESD1.jpg";
import ESD2 from "../Assets/ESD2.jpg";
import EAD1 from "../Assets/EAD1.jpg";
import EAD2 from "../Assets/TrainingpageESD.jpg";
import Workshop1 from "../Assets/Workshop1.jpg";
import Workshop2 from "../Assets/Workshop2.jpg";
import short from "../Assets/shortterm1.jpg";

const trainingContent = [
  {
    id: 1,
    course: "Embedded Graduate",
    head1: "Accelerate Your Career",
    para1:
      "Master Embedded Systems with Erotech Solutions Graduate Training Program",
    banneerimage: Embedded,
    paraimage: train,
    trainingparagragh:
      "Embark on a transformative journey towards mastering Embedded Systems with Erotech Solutions Graduate Training program. Designed for aspiring professionals seeking to launch their careers in this dynamic field, our comprehensive training curriculum, expert instructors, and hands-on approach ensure that you acquire the skills and knowledge needed to excel in today's technology-driven world.",
    trainshortdesc:
      "Meet our dedicated team of industry experts who bring a wealth of experience and insight to every training session. With a passion for education and a commitment to excellence, our trainers are here to guide and support you every step of the way on your path to becoming an Embedded Systems specialist.",
    faqs: [
      {
        qid: 1,
        question: "What is the duration of the training program?",
        visited: false,
        answer:
          "Our Embedded Graduate Training program typically spans [insert duration], providing participants with comprehensive instruction and practical experience in Embedded Systems.",
      },
      {
        qid: 2,
        question:
          "Do I need any prior experience or knowledge in Embedded Systems to enroll?",
        visited: false,
        answer:
          "No prior experience is required to enroll in our training program. Our curriculum is designed to accommodate participants with varying levels of experience, from beginners to those with some background in the field.",
      },
      {
        qid: 3,
        question:
          "Will I receive any certification upon completion of the training?",
        visited: false,
        answer:
          "Yes, participants who complete our Embedded Graduate Training program will receive a certification, validating their skills and knowledge in Embedded Systems.",
      },
      {
        qid: 4,
        question: "What is the format of the training sessions?",
        visited: false,
        answer:
          "Our training sessions blend theoretical instruction with hands-on practical exercises, providing participants with a well-rounded learning experience that prepares them for real-world challenges in Embedded Systems.",
      },
    ],
    conthead:
      "Ready to kickstart your career in Embedded Systems? Enroll now in Erotech Solutions Graduate Training program and unlock your potential in this exciting field.",
    contpara: "Take the first step towards success today",
  },

  {
    id: 2,
    course: "Embedded Software Developer",
    head1: "Unlock Your Potential",
    para1:
      "Excel in Embedded Software Development with Erotech Solutions Training Program",
    banneerimage: ESD1,
    paraimage: ESD2,
    trainingparagragh:
      "Elevate your skills and embark on a rewarding career journey in Embedded Software Development with Erotech Solutions' comprehensive training program. Our industry-leading curriculum, hands-on approach, and expert instruction ensure that you gain the knowledge and experience needed to thrive in this competitive field.",
    trainshortdesc:
      "Meet our team of seasoned professionals who bring years of experience and expertise to our Embedded Software Developer Training program. With a passion for education and a dedication to excellence, our trainers are committed to helping you succeed and reach your full potential in the world of Embedded Software Development.",
    faqs: [
      {
        qid: 1,
        question:
          "What programming languages are covered in the training program?",
        visited: false,
        answer:
          "Our training program covers a range of programming languages commonly used in Embedded Software Development, including C, C++, and Python, among others.",
      },
      {
        qid: 2,
        question:
          "Do I need any prior coding experience to enroll in the training?",
        visited: false,
        answer:
          "While prior coding experience is beneficial, it is not required to enroll in our training program. Our curriculum is designed to accommodate participants with varying levels of experience, from beginners to more experienced developers.",
      },
      {
        qid: 3,
        question:
          "Will I have access to practical projects and hands-on exercises?",
        visited: false,
        answer:
          "Yes, our training program includes practical projects and hands-on exercises to reinforce learning and provide real-world experience in Embedded Software Development.",
      },
      {
        qid: 4,
        question: "Is there any post-training support or resources available?",
        visited: false,
        answer:
          "Yes, our training program participants have access to post-training support and resources, including online forums, additional learning materials, and guidance from our expert trainers.",
      },
    ],
    conthead:
      "Ready to take your skills to the next level in Embedded Software Development? Enroll now in Erotech Solutions' comprehensive training program and accelerate your career. ",
    contpara: "Seize the opportunity today!",
  },
  {
    id: 3,
    course: "Embedded Automotive Engineer",
    head1: "Drive Innovation",
    para1:
      "Excel in Embedded Automotive Engineering with Erotech Solutions Training Program",
    banneerimage: EAD1,
    paraimage: EAD2,
    trainingparagragh:
      "Rev up your career in Embedded Automotive Engineering with Erotech Solutions specialized training program. Dive into the world of automotive technology, learn from industry experts, and gain the skills and knowledge needed to succeed in this exciting and rapidly evolving field.",
    trainshortdesc:
      "Meet our team of experienced professionals who are passionate about automotive technology and dedicated to your success in our Embedded Automotive Engineer Training program. With a blend of industry experience and instructional expertise, our trainers are committed to providing you with the guidance and support you need to thrive in the automotive industry.",
    faqs: [
      {
        qid: 1,
        question: "What topics are covered in the training program?",
        visited: false,
        answer:
          "Our training program covers a range of topics relevant to Embedded Automotive Engineering, including vehicle electronics, embedded systems design, automotive software development, and more.",
      },
      {
        qid: 2,
        question:
          "Are there any prerequisites for enrolling in the training program?",
        visited: false,
        answer:
          "While prior knowledge of automotive engineering or embedded systems is beneficial, it is not required to enroll in our training program. Our curriculum is designed to accommodate participants with varying levels of experience and background.",
      },
      {
        qid: 3,
        question:
          "Will I have the opportunity to work on real-world automotive projects?",
        visited: false,
        answer:
          "Yes, our training program includes practical projects and hands-on exercises that simulate real-world automotive engineering scenarios, allowing you to apply your learning in a practical context.",
      },
      {
        qid: 4,
        question:
          "Is there any career support provided after completing the training program?",
        visited: false,
        answer:
          "Yes, participants of our training program have access to career support services, including job placement assistance, resume-building workshops, and networking opportunities within the automotive industry.",
      },
    ],
    conthead:
      "Ready to accelerate your career in Embedded Automotive Engineering? Enroll now in Erotech Solutions' comprehensive training program and drive innovation in the automotive industry.  ",
    contpara: "Start your journey today!",
  },
  {
    id: 4,
    course: "Embedded IoT Engineer",
    head1: "Connect the Future",
    para1:
      "Master Embedded IoT Engineering with Erotech Solutions Training Program",
    banneerimage: IOT1,
    paraimage: IOT2,
    trainingparagragh:
      "Dive into the world of the Internet of Things (IoT) and unleash your potential as an Embedded IoT Engineer with Erotech Solutions' comprehensive training program. Explore cutting-edge technologies, gain hands-on experience, and acquire the skills needed to thrive in the fast-growing field of IoT.",
    trainshortdesc:
      "Meet our team of seasoned professionals who are passionate about IoT technology and dedicated to your success in our Embedded IoT Engineer Training program. With a wealth of experience and expertise in IoT systems and embedded development, our trainers are committed to providing you with the knowledge and guidance needed to excel in this dynamic field.",
    faqs: [
      {
        qid: 1,
        question: "What technologies are covered in the training program?",
        visited: false,
        answer:
          "Our training program covers a range of technologies relevant to Embedded IoT Engineering, including sensor networks, wireless communication protocols, cloud computing, and data analytics.",
      },
      {
        qid: 2,
        question:
          "Do I need any prior experience in IoT or embedded systems to enroll in the training program?",
        visited: false,
        answer:
          "No prior experience is required to enroll in our training program. Our curriculum is designed to accommodate participants with varying levels of experience, from beginners to more experienced engineers.",
      },
      {
        qid: 3,
        question:
          "Will I have the opportunity to work on real-world IoT projects?",
        visited: false,
        answer:
          "Yes, our training program includes practical projects and hands-on exercises that simulate real-world IoT scenarios, allowing you to apply your learning in a practical context and build a portfolio of IoT projects.",
      },
      {
        qid: 4,
        question:
          "What career opportunities are available after completing the training program?",
        visited: false,
        answer:
          "Upon completing our training program, participants can pursue various career opportunities in industries such as smart cities, healthcare, agriculture, manufacturing, and more, as IoT engineers, solution architects, or system integrators.",
      },
    ],
    conthead:
      "Ready to shape the future of technology with IoT? Enroll now in Erotech Solutions' Embedded IoT Engineer Training program and unlock your potential in this exciting field. ",
    contpara: "Join us today",
  },
  {
    id: 5,
    course: "Short Term Courses",
    head1: "Accelerate Your Skills",
    para1: "Explore Short-Term Courses with Erotech Solutions",
    banneerimage: short,
    paraimage: short,
    trainingparagragh:
      "Ready to enhance your skills and stay ahead in your career? Dive into our range of short-term courses designed to provide you with practical, focused training in key areas of technology. From programming languages to emerging technologies, our courses are tailored to help you acquire new skills quickly and effectively.",
    trainshortdesc:
      "Meet our team of experienced instructors who are passionate about education and dedicated to your success in our short-term courses. With expertise in their respective fields and a commitment to excellence, our trainers provide engaging and informative instruction that empowers you to reach your goals.",
    faqs: [
      {
        qid: 1,
        question: "What topics are covered in the short-term courses?",
        visited: false,
        answer:
          "Our short-term courses cover a variety of topics, including programming languages (such as Python, Java, and JavaScript), web development, data science, artificial intelligence, cybersecurity, and more.",
      },
      {
        qid: 2,
        question: "How long are the short-term courses?",
        visited: false,
        answer:
          "The duration of our short-term courses varies depending on the topic and depth of coverage. Courses typically range from a few days to a few weeks, allowing you to acquire new skills quickly and efficiently.",
      },
      {
        qid: 3,
        question:
          "Are the courses suitable for beginners or are they more advanced?",
        visited: false,
        answer:
          "Our short-term courses cater to individuals with varying levels of experience, from beginners to advanced learners. We offer introductory courses for those new to a topic, as well as more advanced courses for those looking to deepen their knowledge.",
      },
      {
        qid: 4,
        question:
          "Will I receive a certificate upon completing the short-term course?",
        visited: false,
        answer:
          "Yes, participants who complete our short-term courses will receive a certificate of completion, validating their skills and knowledge in the respective subject area.",
      },
    ],
    conthead:
      "Ready to shape the future of technology with IoT? Enroll now in Erotech Solutions' Embedded IoT Engineer Training program and unlock your potential in this exciting field. ",
    contpara: "towards success.",
  },
  {
    id: 6,
    course: "Work Shops ",
    head1: "Hands-On Learning",
    para1: "Explore Workshops with Erotech Solutions",
    banneerimage: Workshop1,
    paraimage: Workshop2,
    trainingparagragh:
      "Immerse yourself in experiential learning with Erotech Solutions dynamic workshops. Designed to provide practical, hands-on experience in key areas of technology, our workshops offer participants the opportunity to learn new skills, solve real-world challenges, and network with industry experts. From introductory sessions to advanced topics, our workshops cater to learners of all levels and interests.",
    trainshortdesc:
      "Meet our team of expert instructors who bring a wealth of industry experience and instructional expertise to our workshops. Passionate about education and dedicated to your success, our trainers provide engaging and interactive instruction that empowers you to apply your learning in a practical context and achieve your goals.",
    faqs: [
      {
        qid: 1,
        question: "What topics are covered in the workshops?",
        visited: false,
        answer:
          "Our workshops cover a wide range of topics, including programming languages, web development, data science, artificial intelligence, cybersecurity, and more. We offer workshops on both introductory and advanced topics to cater to diverse interests and skill levels.",
      },
      {
        qid: 2,
        question: "What is the format of the workshops",
        visited: false,
        answer:
          "Our workshops typically consist of a combination of lectures, hands-on exercises, group discussions, and practical projects. Participants have the opportunity to engage with the material in a dynamic and interactive environment, facilitating a deeper understanding of the subject matter.",
      },
      {
        qid: 3,
        question:
          "Are the workshops suitable for beginners or are they more advanced?",
        visited: false,
        answer:
          "Our workshops are designed to accommodate participants with varying levels of experience, from beginners to advanced learners. We offer introductory workshops for those new to a topic, as well as more advanced workshops for those looking to deepen their knowledge and skills.",
      },
      {
        qid: 4,
        question:
          "Will I receive any materials or resources after attending the workshop? ",
        visited: false,
        answer:
          "Yes, participants of our workshops will receive access to workshop materials, resources, and supplementary materials to support their continued learning and development in the respective subject area.",
      },
    ],
    conthead:
      "Ready to dive into hands-on learning? Explore our workshops and gain practical experience in key areas of technology with Erotech Solutions. ",
    contpara: "Register now and take your skills to the next level.",
  },
];

export { trainingContent };
