import React from "react";
import { Box, Typography } from "@mui/material";
import { HiOutlineDocumentText } from "react-icons/hi";
import "./Certificates.scss"; // Import the SCSS file

interface Certificate {
  title: string;
  company: string;
  year: string;
}

interface CertificatesProps {
  certificates: {
    title: string;
    content: Certificate[];
  };
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  return (
    <Box className="certificate-card-container">
      <Box className="certificate-title-container">
        <Typography variant="h5" className="certificate-title">
          {certificates.title}
        </Typography>
        <Box className="certificate-icon">
          <HiOutlineDocumentText />
        </Box>
      </Box>

      <Box component="ul" className="certificate-list">
        {certificates.content.map((cert, index) => (
          <Box component="li" key={index} className="certificate-item">
            <Box className="certificate-row">
              <Typography variant="body1" className="certificate-name">
                {cert.title}
              </Typography>
              <Typography variant="body2" className="certificate-year">
                {cert.year}
              </Typography>
            </Box>
            <Typography variant="body2" className="certificate-company">
              {cert.company}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Certificates;
