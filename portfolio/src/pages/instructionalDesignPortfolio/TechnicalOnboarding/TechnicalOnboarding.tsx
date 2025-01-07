import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PDFViewerModal from "./TechnicalPDFViewerModal"; // Import the modal component
import { TechnicalOnboardingPdfFiles } from "../portfolioHelper";

const TechnicalOnboarding: React.FC = () => {

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Technical Onboarding Documents
      </Typography>
      <Typography variant="body1" textAlign="center" marginBottom={4}>
        View detailed technical ERDs, sketches, and system architecture documents.
      </Typography>

      {/* Grid Layout for PDFs */}
      <Grid container spacing={4} justifyContent="center">
        {TechnicalOnboardingPdfFiles.map((doc, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <PDFViewerModal filePath={doc.src} thumbnail={""} />
              <Typography variant="subtitle1" mt={2}>
                {doc.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechnicalOnboarding;
