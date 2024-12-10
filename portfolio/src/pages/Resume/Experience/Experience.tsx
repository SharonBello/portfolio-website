import React from "react";
import "./Experience.scss";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, Typography } from "@mui/material";

const Experience = (props: any): JSX.Element => {
  const { timeline } = props

  return (
    <>
      <div className="timeline-header">
        <timeline.icon className="timeline-icon" />
        <Typography variant="h4" component="h2">
          {timeline.title}
        </Typography>
      </div>
      <VerticalTimeline layout="1-column-left">
        {timeline.content.map((entry: any, index: number) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            // contentStyle={{
            //   background: "#2B3A48",
            //   color: "#FFF",
            //   borderRadius: "8px",
            //   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            //   padding: "16px",
            // }}
            // contentArrowStyle={{ borderRight: "7px solid #2B3A48" }}
            // iconStyle={{
            //   background: "#6C757D",
            //   color: "#FFF",
            // }}
            icon={React.createElement(entry.icon)}
          >
            <Box sx={{ mb: 2, pb: 1 }} className="experience-card-title-container">
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
              {entry.details.map((detail: any, idx: number) => (
                <li key={idx} style={{ marginBottom: "0.5rem" }}>
                  {detail}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default Experience;
