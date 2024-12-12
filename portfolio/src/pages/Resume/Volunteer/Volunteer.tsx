import React from "react";
import { Box, Icon, Typography } from "@mui/material";
import "./Volunteer.scss"; // Import the SCSS file

interface VolunteerItem {
  name: string;
  role: string;
  icon: any;
  year: string;
  description: string;
  link: string;
}

interface VolunteerProps {
  volunteer: {
    title: string;
    content: VolunteerItem[];
  };
}

const Volunteer: React.FC<VolunteerProps> = ({ volunteer }) => {
  return (
    <>
      <Typography variant="h4" component="h2" className="volunteer-title">
        {volunteer.title}
      </Typography>
      <Box className="volunteer-card-grid-container">
        {volunteer.content.map((item, index) => (
          <Box key={index} className="flip-volunteer-card">
            <Box className="flip-volunteer-card-inner">
              {/* Front Side */}
              <Box className="flip-volunteer-card-front">
                <Icon className="company-logo">
                  {item.icon}
                </Icon>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {item.name}
                </Typography>
                <Typography variant="body1">{item.year}</Typography>
                <Typography variant="body1">
                  {item.role}
                </Typography>
              </Box>

              {/* Back Side */}
              <Box className="flip-volunteer-card-back">
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {item.name}
                </Typography>
                <Box
                  component="hr"
                  sx={{
                    margin: "10px 0",
                    border: "1px solid #415161",
                    width: "90%",
                  }}
                />
                <Typography variant="body1">{item.description}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Volunteer;
