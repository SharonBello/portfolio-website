import React from "react";
import "./Resume.scss";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, Avatar, Typography } from "@mui/material";
import ResumeHelper from "./ResumeHelper";
import ProfilePic from "../../styles/images/profile-pic.png";
import Slider from "react-slick";

const Resume: React.FC = () => {
  const { summary, education, timeline, skills, volunteer, languages } = ResumeHelper;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div className="resume-container">
      {/* Row 1: Picture and Summary */}
      <div className="picture">
        <Avatar
          alt="Profile Picture"
          src={ProfilePic}
          sx={{
            width: 200,
            height: 200,
            boxShadow: "0 0 0 8px white, 0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      <div className="summary summary-card">
        {/* Decorative Background Shape */}
        <div className="background-shape"></div>

        {/* Header with Title and Icon */}
        <div className="summary-header">
          <Typography variant="h4" component="h2" className="summary-title">
            {summary.title}
          </Typography>
          <summary.icon className="summary-icon" />
        </div>

        {/* Summary Content */}
        <div className="summary-content">
          {summary.content.map((section, index) => (
            <Typography key={index} variant="body1" className="summary-text">
              {section.heading && <strong>{section.heading}: </strong>}
              {section.text}
            </Typography>
          ))}
        </div>
      </div>

      {/* Row 2: Education, Timeline, and Skills */}
      <div className="education-card">
        <div className="background-shape"></div>
        <div className="education-header">
          <education.icon className="education-icon" />
          <Typography variant="h4" component="h2" className="education-title">
            {education.title}
          </Typography>
        </div>
        <div className="education-content">
          {education.content.map((item, index) => (
            <div key={index} className="education-item">
              <Typography variant="subtitle1" className="education-year">
                {item.year}
              </Typography>
              <div className="education-details">
                <Typography variant="h6" className="education-degree">
                  {item.degree}
                </Typography>
                <Typography variant="body2" className="education-university">
                  {item.university}
                </Typography>
                <Typography variant="body2" className="education-description">
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Box sx={{ mt: 4, px: 3 }} className="timeline-section">
        <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
          {timeline.title}
        </Typography>
        <VerticalTimeline layout="1-column-left">
          {timeline.content.map((entry, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#2B3A48",
                color: "#FFF",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "16px",
              }}
              contentArrowStyle={{ borderRight: "7px solid #2B3A48" }}
              date={entry.duration}
              iconStyle={{
                background: "#6C757D",
                color: "#FFF",
              }}
              icon={React.createElement(entry.icon)}
            >
              <Box sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.4)", mb: 2, pb: 1 }}>
                <Box className="experience-card-title">
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {entry.company}
                  </Typography>
                  <Typography>{entry.duration}</Typography>
                </Box>
                <Typography variant="subtitle1" sx={{ fontStyle: "italic", color: "#BDD0DB" }}>
                  {entry.title}
                </Typography>
              </Box>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#FFF" }}>
                {entry.details.map((detail, idx) => (
                  <li key={idx} style={{ marginBottom: "0.5rem" }}>
                    {detail}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Box>

      <Box className="skills-card" sx={{ mt: 4 }}>
        <Box className="skills-card-header">
          <Typography variant="h4" component="h2" className="skills-title">
            {skills.title}
          </Typography>
          <Box className="background-shape"></Box>
        </Box>
        <Slider {...settings}>
          {skills.groups.flatMap((group) =>
            group.skills.map((skill, index) => (
              <Box key={index} className="carousel-item" sx={{ textAlign: "center", padding: "16px" }}>
                {/* Dynamic color applied to the icon */}
                {React.createElement(skill.icon, {
                  className: "skill-icon",
                  style: { color: skill.color }, // Adjust icon color dynamically
                })}
                <Typography
                  variant="body2"
                  className="skill-title"
                  sx={{
                    mt: 1,
                    color: "text.primary",
                    fontWeight: "bold",
                  }}
                >
                  {skill.name}
                </Typography>
              </Box>
            ))
          )}
        </Slider>
      </Box>

      {/* Row 3: Volunteer */}
      <div className="volunteer">
        <h2>{volunteer.title}</h2>
        <ul>
          {volunteer.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Row 4: Languages */}
      <div className="languages">
        <h2>{languages.title}</h2>
        <ul>
          {languages.content.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
