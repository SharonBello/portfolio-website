import { PptxGenJS } from "react-pptx";
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
  FaHandsHelping,
  FaSeedling,
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
import { ReactComponent as ButterflyButtonIcon } from "../../styles/icons/butterflyButton-icon.svg";
import { ReactComponent as GirlsPlusIcon } from "../../styles/icons/girlsPlus-icon.svg";
import { ReactComponent as SheCodesIcon } from "../../styles/icons/sheCodes-icon.svg";
import { ReactComponent as PrimapIcon } from "../../styles/icons/primap-icon.svg";
import { MdEngineering, MdDesignServices } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiProjectorLine } from "react-icons/ri";
import girlsPlus1 from "../../styles/images/ProjectsImagesAndDocuments/girlsPlus1.png";
import girlsPlus2 from "../../styles/images/ProjectsImagesAndDocuments/girlsPlus2.png";
import girlsPlus3 from "../../styles/images/ProjectsImagesAndDocuments/girlsPlus3.png";
import dudiSelaPic1 from "../../styles/images/ProjectsImagesAndDocuments/dudiSelaPic1.png";
import dudiSelaPic2 from "../../styles/images/ProjectsImagesAndDocuments/dudiSelaPic2.png";
import dudiSelaPic3 from "../../styles/images/ProjectsImagesAndDocuments/dudiSelaPic3.png";
import dudiSelaPic4 from "../../styles/images/ProjectsImagesAndDocuments/dudiSelaPic4.png";
import dudiSelaPic5 from "../../styles/images/ProjectsImagesAndDocuments/dudiSelaPic5.png";
import dudiSelaPic6 from "../../styles/images/ProjectsImagesAndDocuments/dudiSelaPic6.png";
import dudiSelaPic7 from "../../styles/images/ProjectsImagesAndDocuments/dudiSelaPic7.png";
import dudiSelaPic8 from "../../styles/images/ProjectsImagesAndDocuments/dudiSelaPic8.png";
import dudiSelaPic9 from "../../styles/images/ProjectsImagesAndDocuments/dudiSelaPic9.png";
import dudiSelaPic10 from "../../styles/images/ProjectsImagesAndDocuments/dudiSelaPic10.png";
import dudiSelaPic11 from "../../styles/images/ProjectsImagesAndDocuments/dudiSelaPic11.png";
import michikoLogo from "../../styles/images/ProjectsImagesAndDocuments/michikoLogo.png";
import michikoPoster from "../../styles/images/ProjectsImagesAndDocuments/michikoPoster.png";
import michikoOnePager from "../../styles/images/ProjectsImagesAndDocuments/michikoOnePager.pdf";
import michikoInvestorsPresentation from "../../styles/images/ProjectsImagesAndDocuments/michikoInvestorsPresentation.pdf";
import michikoIntroVideo from "../../styles/images/ProjectsImagesAndDocuments/michikoIntroVideo.mp4";
import climateGameMockup from "../../styles/images/ProjectsImagesAndDocuments/climateGameMockup.png";
import climateGameGif from "../../styles/images/ProjectsImagesAndDocuments/climateGameGif.gif";
import wiser1 from "../../styles/images/ProjectsImagesAndDocuments/wiser1.png";
import wiser2 from "../../styles/images/ProjectsImagesAndDocuments/wiser2.png";
import primapPoster from "../../styles/images/ProjectsImagesAndDocuments/primapPoster.png";
import userSpecsPrimap from "../../styles/images/ProjectsImagesAndDocuments/userSpecsPrimap.png";

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
    icon: FaHandsHelping,
    content: [
      {
        name: "Technovation Girls",
        icon: <GirlsPlusIcon />,
        year: "2022 - Present",
        role: "Learning Experience Developer",
        description:
          "Technovation empowers girls to create technology-driven solutions, supported by mentors, and inspiring to shape a better future.",
        link: "https://technovation.org/",
      },
      {
        name: "SheCodes",
        icon: <SheCodesIcon />,
        year: "2022",
        role: "Frontend Track mentor",
        description:
          "SheCodes aims to empower women by providing support and resources for learning to code, fostering community engagement, and enriching the learning experience.",
        link: "https://www.shecodes.io/",
      },
      {
        name: "The Butterfly Button",
        icon: <ButterflyButtonIcon />,
        year: "2022",
        role: "UX/UI and FrontEnd Developer",
        description:
          "The Butterfly-Button is an embedded plugin which allows individuals suffering from domestic violence to get help.",
        link: "https://www.butterfly-button.com/",
      },
      {
        name: "Primap",
        icon: <PrimapIcon />,
        year: "2021 - 2022",
        role: "Co-Creator & Full Stack Developer",
        description:
          "Collaborated with Rakefet NGO and Haifa Innovation Labs to create a platform addressing teenage social anxiety through targeted social activities and user-centered design.",
        link: "https://rakefet-group.org.il/",
      },
    ],
  },
  languages: {
    title: "Languages",
    icon: BiWorld,
    content: ["Hebrew", "English", "Portuguese"],
  },
  certificates: {
    title: "Certificates",
    icon: HiOutlineDocumentText,
    content: [
      {
        title: "Full-Stack Developer",
        company: "Coding Academy",
        year: "2022",
      },
      {
        title: "Founder's Journey - Build and Manage High-Growth Teams",
        company: "University of Haifa",
        year: "2022",
      },
      {
        title: "Teaching With Fortnite Creative",
        company: "Unreal Engine",
        year: "2021",
      },
      {
        title: "Group Facilitation in a Multidisciplinary Approach",
        company: "Oranim Academic College of Education",
        year: "2020",
      },
      {
        title: "Teaching Certificate in ESL",
        company: "Kibbutzim College",
        year: "2016",
      },
      {
        title: "Teaching Certificate in Design",
        company: "The NB Haifa School of Design",
        year: "2002",
      },
    ],
  },
  projects: {
    title: "Projects",
    icon: RiProjectorLine,
    content: [
      {
        name: "Technovation Girls",
        company: "Technovation",
        icon: "",
        role: "Mentor",
        year: "2024 - Present",
        description:
          "Guided girls in developing technology-based solutions for their communities. Mentored through the Technovation platform to help foster innovation and problem-solving skills.",
        link: "https://sites.google.com/atidplus.com/girlsplus?usp=sharing",
        images: [girlsPlus1, girlsPlus2, girlsPlus3],
      },
      {
        name: "Dudi Sela Tennis Academy",
        company: "Dudi Sela Academy",
        icon: "",
        role: "Full Stack Developer",
        year: "2022",
        description:
          "Developed a website for the Dudi Sela Tennis Academy to showcase programs, achievements, and enrollment information.",
        link: "https://github.com/SharonBello/Dudi-Sela-WebApp-Frontend",
        images: [
          dudiSelaPic1,
          dudiSelaPic2,
          dudiSelaPic3,
          dudiSelaPic4,
          dudiSelaPic5,
          dudiSelaPic6,
          dudiSelaPic7,
          dudiSelaPic8,
          dudiSelaPic9,
          dudiSelaPic10,
          dudiSelaPic11,
        ],
      },
      {
        name: "Michiko",
        company: "Michiko",
        icon: "",
        role: "Co-Founder",
        year: "2022",
        description:
          "Co-founded Michiko, focusing on education through gamified VR learning experience.",
        link: "",
        images: [michikoLogo, michikoPoster],
        pdfFile: [michikoOnePager, michikoInvestorsPresentation],
        videoFile: [
          {
            path: michikoIntroVideo,
            thumbnail: "",
          },
        ],
      },
      {
        name: "ClimateGame",
        company: "Unit 8200 Hackathon",
        icon: "",
        role: "Full Stack Developer",
        year: "2022",
        description:
          "Built a gamified web application during a hackathon to educate users on climate change and sustainable practices.",
        link: "https://github.com/SharonBello/ClimateGame-Sharon",
        images: [climateGameMockup, climateGameGif],
      },
      {
        name: "Wiserr",
        company: "Wiserr.io",
        icon: "",
        role: "Full Stack Developer",
        year: "2022",
        description:
          "Collaborated on building a platform that connects seniors with mentors for skill development.",
        link: "https://github.com/SharonBello/Wiserr-Frontend",
        images: [wiser1, wiser2],
      },
      {
        name: "Primap",
        company: "Primap - An innovative technological training platform",
        icon: FaSeedling,
        role: "Full Stack Developer",
        year: "2022",
        description:
          "An innovative technological training platform to engage social anxiety teenagers in targeted social activties aiming to decrease social avoidence and improve conversational skills.",
        link: "https://rakefet-group.org.il/",
        images: [primapPoster, userSpecsPrimap],
      },
    ],
  },
};

export default ResumeHelper;
