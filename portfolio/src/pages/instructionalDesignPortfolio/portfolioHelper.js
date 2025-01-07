import StorylineCard from "../../styles/images/PortfolioCards/storyline-card.png";
import InfographicCard from "../../styles/images/PortfolioCards/infographic-card.png";
import PresentationCard from "../../styles/images/PortfolioCards/presentation-card.png";
import CurriculumCard from "../../styles/images/PortfolioCards/curriculum-card.png";
import WebsitesCard from "../../styles/images/PortfolioCards/web-card.png";
import VideosCard from "../../styles/images/PortfolioCards/video-card.png";
import GamesCard from "../../styles/images/PortfolioCards/games-card.png";
import OnboardingCard from "../../styles/images/PortfolioCards/onboarding-card.png";
import ElearningCard from "../../styles/images/PortfolioCards/elearning-card.jpg";
import ABCSuperherosCard from "../../styles/images/PortfolioCards/Infographs/ABCSuperheros.png";
import BlueBirdPoem from "../../styles/images/PortfolioCards/Infographs/BlueBirdPoem.png";
import FrontendBackendBuild from "../../styles/images/PortfolioCards/Infographs/FrontendBackendBuild.png";
import GraphicDesignPrinciplesLine from "../../styles/images/PortfolioCards/Infographs/GraphicDesignPrinciplesLine.png";
import GraphicDesignPrinciplesShape from "../../styles/images/PortfolioCards/Infographs/GraphicDesignPrinciplesShape.png";
import KindnessStory from "../../styles/images/PortfolioCards/Infographs/KindnessStory.png";
import OpticalIllusion from "../../styles/images/PortfolioCards/Infographs/OpticalIllusion.png";
import PrinciplesOfInstructedSla from "../../styles/images/PortfolioCards/Infographs/PrinciplesOfInstructedSla.png";
import ReadingComprehension from "../../styles/images/PortfolioCards/Infographs/ReadingComprehension.png";
import SafetyPoster from "../../styles/images/PortfolioCards/Infographs/SafetyPoster.png";
import Spelling from "../../styles/images/PortfolioCards/Infographs/Spelling.png";
import StepUpReading from "../../styles/images/PortfolioCards/Infographs/StepUpReading.png";
import actualConsumptionPlan from "../../styles/images/PortfolioCards/TechnicalOnboardingPdf/actualConsumptionPlan.pdf";
import irrigationRequirementsPlan from "../../styles/images/PortfolioCards/TechnicalOnboardingPdf/irrigationRequirementsPlan.pdf";
import serverComponentsStructure from "../../styles/images/PortfolioCards/TechnicalOnboardingPdf/serverComponentsStructure.pdf";
import clientComponentsStructure from "../../styles/images/PortfolioCards/TechnicalOnboardingPdf/clientComponentsStructure.pdf";

export const Categories = [
  {
    title: "Storyline Courses",
    description:
      "Engage learners with interactive and scenario-based eLearning modules.",
    image: StorylineCard,
    route: "/instructional-design-portfolio/storyline-courses",
  },
  {
    title: "Infographics",
    description:
      "Simplify complex information with visually appealing infographics.",
    image: InfographicCard,
    route: "/instructional-design-portfolio/infographics",
  },
  {
    title: "Presentations",
    description:
      "Deliver impactful presentations to educate and influence audiences.",
    image: PresentationCard,
    route: "/instructional-design-portfolio/presentations",
  },
  {
    title: "Full Curriculum",
    description:
      "Develop comprehensive learning paths tailored to organizational goals.",
    image: CurriculumCard,
    route: "/instructional-design-portfolio/full-curriculum",
  },
  {
    title: "Websites",
    description:
      "Create educational platforms to deliver and track learner progress.",
    image: WebsitesCard,
    route: "/instructional-design-portfolio/websites",
  },
  {
    title: "Videos",
    description: "Use engaging video content to enhance knowledge retention.",
    image: VideosCard,
    route: "/instructional-design-portfolio/videos",
  },
  {
    title: "Educational Games",
    description:
      "Incorporate gamification to make learning interactive and fun.",
    image: GamesCard,
    route: "/instructional-design-portfolio/educational-games",
  },
  {
    title: "Technical Onboarding",
    description:
      "Streamline employee onboarding with clear and effective materials.",
    image: OnboardingCard,
    route: "/instructional-design-portfolio/technical-onboarding",
  },
  {
    title: "eLearning Projects",
    description: "Design and implement impactful online learning experiences.",
    image: ElearningCard,
    route: "/instructional-design-portfolio/elearning-projects",
  },
];

export const InfographicImages = [
  {
    title: "Optical Illusion",
    src: OpticalIllusion,
    description:
      "An artistic and educational illustration exploring the science of visual perception through optical illusions.",
  },
  {
    title: "Graphic Design Principles - Line",
    src: GraphicDesignPrinciplesLine,
    description:
      "Explains the importance of line as a fundamental principle in graphic design.",
  },
  {
    title: "Graphic Design Principles - Shape & Volume",
    src: GraphicDesignPrinciplesShape,
    description:
      "Covers the role of shape and volume in creating effective graphic designs.",
  },
  {
    title: "Frontend/Backend Build",
    src: FrontendBackendBuild,
    description:
      "A technical infographic detailing the setup for building frontend and backend projects with modern tools.",
  },
  {
    title: "Principles of SLA",
    src: PrinciplesOfInstructedSla,
    description:
      "This infographic explains the core principles of Second Language Acquisition (SLA), focusing on structured learning approaches and opportunities for L2 input/output.",
  },
  {
    title: "Kindness Story",
    src: KindnessStory,
    description:
      "A heartwarming story that highlights how small acts of kindness can make a big difference in difficult times.",
  },
  {
    title: "ABC Superheroes",
    src: ABCSuperherosCard,
    description:
      "An educational poster designed for children to learn the alphabet through popular superheroes.",
  },
  {
    title: "Spelling Infographic",
    src: Spelling,
    description:
      "A detailed infographic that breaks down spelling rules and common patterns for learners.",
  },
  {
    title: "Step-Up Reading",
    src: StepUpReading,
    description:
      "Illustrates strategies for improving reading comprehension and decoding skills in learners.",
  },
  {
    title: "Reading Comprehension",
    src: ReadingComprehension,
    description:
      "This infographic provides tips and strategies for understanding and analyzing written texts effectively.",
  },
  {
    title: "Safety Poster",
    src: SafetyPoster,
    description:
      "A safety-themed educational poster to promote awareness and safe practices.",
  },
  {
    title: "BlueBird Poem",
    src: BlueBirdPoem,
    description:
      "An artistic representation of Charles Bukowski's poem 'Bluebird', capturing its emotional essence.",
  },
];

export const TechnicalOnboardingPdfFiles = [
  {
    title: "Actual Consumption Plan",
    src: actualConsumptionPlan,
    description:
      "Provides a detailed overview of the system's real-time resource consumption metrics, designed to help technical teams monitor and optimize system performance effectively.",
  },
  {
    title: "Irrigation Requirements Plan",
    src: irrigationRequirementsPlan,
    description:
      "Outlines the calculated irrigation requirements based on environmental factors, helping technical staff ensure accurate and efficient resource allocation.",
  },
  {
    title: "Server Components Structure",
    src: serverComponentsStructure,
    description:
      "Illustrates the architecture of server-side components, offering insights into backend operations, scalability considerations, and integration points.",
  },
  {
    title: "Client Components Structure",
    src: clientComponentsStructure,
    description:
      "Details the structure of client-side components, showcasing user interface design, data flow, and interaction patterns critical for frontend developers.",
  },
];
