import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBullseye,
  FaBriefcase,
  FaGraduationCap,
  FaAngular,
  FaAws,
  FaHotjar,
  FaPlus,
  FaCode,
  FaChalkboardTeacher,
} from "react-icons/fa";
import {
  SiAdobe,
  SiMoodle,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiPingdom,
  SiCanva,
} from "react-icons/si";
import { ReactComponent as StorylineIcon } from "../../styles/icons/storyline-icon.svg";
import { ReactComponent as RiseIcon } from "../../styles/icons/rise-icon.svg";
import { ReactComponent as CamtasiaIcon } from "../../styles/icons/camtasia-icon.svg";
import { ReactComponent as H5PIcon } from "../../styles/icons/h5p-icon.svg";
import { ReactComponent as BrowserStackIcon } from "../../styles/icons/browwserstack-icon.svg";
import { MdEngineering, MdDesignServices } from "react-icons/md";

const ResumeHelper = {
  summary: {
    title: "Summary",
    icon: FaBullseye,
    content: [
      {
        heading: "Innovative and accomplished",
        text: "Instructional Designer and Learning Developer with expertise in creating impactful, learner-centered journeys.",
      },
      {
        heading: "Specialization",
        text: "Crafting adaptive learning solutions that simplify complex concepts, inspire innovation, and drive personal and professional growth. Proven ability to deliver transformative educational programs by blending creativity, strategy, and cutting-edge tools to empower individuals and organizations to achieve meaningful learning outcomes.",
      },
    ],
  },
  education: {
    title: "Education",
    icon: FaGraduationCap,
    content: [
      {
        year: "2023",
        degree: "Masters of Technologies in Education",
        university: "Haifa University",
        description: "Innovation track, graduated with honors.",
      },
      {
        year: "2022",
        degree: "Coding Academy Full-Stack Bootcamp",
        university: "Coding Academy",
        description:
          "FullStack web development, and hands-on coding experience.",
      },
      {
        year: "2017",
        degree: "Teaching Certificate of English as a Second Language",
        university: "Kibbutzim College of Education",
        description:
          "Advanced teaching methodologies and second-language acquisition techniques, graduated with honors.",
      },
      {
        year: "2002",
        degree: "Bachelor of Design and Education",
        university: "The NB Haifa School of Design, Haifa University",
        description:
          "Innovative design practices and textile creation expertise as well as design teaching methods, graduated with honors.",
      },
    ],
  },
  timeline: {
    title: "Experience",
    icon: FaBriefcase,
    content: [
      {
        company: "Girls Plus – Girls Technovation Challenge",
        title: "Instructional Designer & Learning Developer",
        duration: "2024 - Present",
        details: [
          "Designed a comprehensive curriculum for mentors and instructors to guide teenage girls in innovation and entrepreneurship.",
          "Developed onboarding materials, structured learning modules, and engaging activities to enhance mentoring and instructional effectiveness.",
          "Guided participants through creating innovative apps and business plans, culminating in a working app, video pitch, and app demo.",
        ],
        icon: FaPlus,
      },
      {
        company: "Treetoscope",
        title: "Full Stack Developer",
        duration: "2022 – 2024",
        details: [
          "Handled programming duties using React, Redux, SCSS, Node.js, and AWS infrastructure.",
          "Implemented data analytics tools (Google Analytics, Tag Manager) to monitor platform performance.",
          "Created XML-based technical documentation to streamline onboarding and represent system architecture.",
        ],
        icon: FaCode,
      },
      {
        company: "Cramim HS",
        title:
          "Information and Technology Coordinator, Design and English Teacher",
        duration: "2016 – 2021",
        details: [
          "Created and maintained ICT policies and procedures to support effective technology use in education.",
          "Monitored weekly learning progress for 200+ students and adjusted instruction to improve outcomes.",
          "Planned and executed yearly curricula, including remote learning components aligned with technological advancements.",
        ],
        icon: FaChalkboardTeacher,
      },
      {
        company: "Kidichick Ltd.",
        title: "Design Director",
        duration: "2007 – 2015",
        details: [
          "Directed creative teams in delivering high-quality design projects on time and within budget.",
          "Developed strategic design plans with projected timelines and budgets for key collections.",
        ],
        icon: MdDesignServices,
      },
    ],
  },
  skills: {
    title: "Tech Skills",
    icon: MdEngineering, // Skills card icon
    groups: [
      {
        title: "Learning Tools",
        skills: [
          {
            name: "Articulate Storyline",
            icon: StorylineIcon,
            color: "#FF6F61",
            link: "https://www.articulate.com/",
          },
          {
            name: "Rise 360",
            icon: RiseIcon,
            color: "#FF8E53",
            link: "https://articulate.com/rise",
          },
          {
            name: "LMS platforms: Moodle",
            icon: SiMoodle,
            color: "#F9812A",
            link: "https://moodle.org/",
          },
          {
            name: "Camtasia",
            icon: CamtasiaIcon,
            color: "#44B39D",
            link: "https://www.techsmith.com/camtasia.html",
          },
          {
            name: "H5P",
            icon: H5PIcon,
            color: "#282828",
            link: "https://h5p.org/",
          },
        ],
      },
      {
        title: "Design Tools",
        skills: [
          {
            name: "Adobe Creative Suite",
            icon: SiAdobe,
            color: "#FF0000",
            link: "https://www.adobe.com/creativecloud.html",
          },
          {
            name: "Adobe Photoshop",
            icon: SiAdobephotoshop,
            color: "#31A8FF",
            link: "https://www.adobe.com/products/photoshop.html",
          },
          {
            name: "Adobe Illustrator",
            icon: SiAdobeillustrator,
            color: "#FF9A00",
            link: "https://www.adobe.com/products/illustrator.html",
          },
          {
            name: "Adobe XD",
            icon: SiAdobexd,
            color: "#FF61F6",
            link: "https://www.adobe.com/products/xd.html",
          },
          {
            name: "Figma",
            icon: SiFigma,
            color: "#A259FF",
            link: "https://www.figma.com/",
          },
          {
            name: "Canva",
            icon: SiCanva,
            color: "#00C4CC",
            link: "https://www.canva.com/",
          },
        ],
      },
      {
        title: "Web Development",
        skills: [
          {
            name: "HTML5",
            icon: FaHtml5,
            color: "#E34F26",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          },
          {
            name: "CSS3",
            icon: FaCss3Alt,
            color: "#1572B6",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
          {
            name: "JavaScript",
            icon: FaJsSquare,
            color: "#F7DF1E",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          },
          {
            name: "React",
            icon: FaReact,
            color: "#61DAFB",
            link: "https://reactjs.org/",
          },
          {
            name: "Node.js",
            icon: FaNodeJs,
            color: "#339933",
            link: "https://nodejs.org/",
          },
          {
            name: "Angular",
            icon: FaAngular,
            color: "#DD0031",
            link: "https://angular.io/",
          },
        ],
      },
      {
        title: "Cloud & Monitoring",
        skills: [
          {
            name: "AWS",
            icon: FaAws,
            color: "#FF9900",
            link: "https://aws.amazon.com/",
          },
          {
            name: "Google Analytics",
            icon: SiGoogleanalytics,
            color: "#F4B400",
            link: "https://analytics.google.com/",
          },
          {
            name: "Google Tag Manager",
            icon: SiGoogletagmanager,
            color: "#246FDB",
            link: "https://tagmanager.google.com/",
          },
          {
            name: "SolarWinds/Pingdom",
            icon: SiPingdom,
            color: "#FFC726",
            link: "https://www.solarwinds.com/pingdom",
          },
          {
            name: "HotJar",
            icon: FaHotjar,
            color: "#FF3B30",
            link: "https://www.hotjar.com/",
          },
          {
            name: "BrowserStack",
            icon: BrowserStackIcon,
            color: "#FF8300",
            link: "https://www.browserstack.com/",
          },
        ],
      },
    ],
  },
  volunteer: {
    title: "Volunteer",
    content: [
      "SheCodes – Frontend Track mentor at the Tel-Aviv University Branch (2022)",
    ],
  },
  languages: {
    title: "Languages",
    content: ["Hebrew", "English", "Portuguese"],
  },
};

export default ResumeHelper;
