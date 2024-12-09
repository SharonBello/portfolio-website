import React from "react";
import "./Resume.scss";
import { Box } from "@mui/material";
import ResumeHelper from "./ResumeHelper";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
import ProjectsVolunteer from "./ProjectsVolunteer";
import Profile from "./Profile";
import Languages from "./Languages";
import Experience from "./Experience";
import Certificates from "./Certificates";

const Resume: React.FC = () => {
  const { summary, education, timeline, skills, volunteer, languages, certificates } = ResumeHelper;

  return (
    <div className="resume-container">
      {/* Row 1: Picture and Summary */}
      <div className="picture">
        <Profile />
      </div>

      <div className="summary summary-card">
        <Summary summary={summary} />
      </div>

      {/* Row 2: Education, Timeline, and Skills */}
      <div className="education">
        <Education education={education} />
      </div>

      <Box sx={{ mt: 4, px: 3 }} className="timeline-section">
        <Experience timeline={timeline} />
      </Box>

      <Box className="skills-card" sx={{ mt: 4 }}>
        <Skills skills={skills} />
      </Box>

      {/* Row 3: Volunteer, Languages, Certificates */}
      <div className="bottom-cards">
        <ProjectsVolunteer volunteer={volunteer} />
        <Certificates certificates={certificates} />
        <Languages languages={languages} />
      </div>
    </div>
  );
};

export default Resume;
