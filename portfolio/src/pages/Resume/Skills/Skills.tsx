import React from "react";
import "./Skills.scss";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";

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

const Skills = (props: any): JSX.Element => {
  const { skills } = props

  return (
    <>
      <Box className="skills-card-header">
        <Typography variant="h4" component="h2" className="skills-title">
          {skills.title}
        </Typography>
        <Box className="skills-background-shape"></Box>
      </Box>
      <Slider {...settings} className="skills-slider">
        {skills.groups.flatMap((group: { skills: any[]; }) =>
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
    </>
  );
};

export default Skills;
