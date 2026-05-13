import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PDFViewerModal from "./TechnicalPDFViewerModal";
import { TechnicalOnboardingPdfFiles } from "../portfolioHelper";
import PortfolioCategoryLayout from "../PortfolioCategoryLayout/PortfolioCategoryLayout";

const TechnicalOnboarding: React.FC = () => (
  <PortfolioCategoryLayout>
    <Typography variant="h4" gutterBottom textAlign="center">
      Technical Onboarding Documents
    </Typography>
    <Typography variant="body1" textAlign="center" marginBottom={4}>
      View detailed technical ERDs, sketches, and system architecture documents.
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {TechnicalOnboardingPdfFiles.map((doc, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <PDFViewerModal filePath={doc.src} thumbnail={""} />
            <Typography variant="subtitle1" mt={2}>
              {doc.title}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </PortfolioCategoryLayout>
);

export default TechnicalOnboarding;