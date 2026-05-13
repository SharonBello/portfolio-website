import React, { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PortfolioCard from "../../../components/PortfolioCard";
import PortfolioCategoryLayout from "../PortfolioCategoryLayout/PortfolioCategoryLayout";

const portfolioItems = [
  { title: "Social Engineering: How Hackers Steal Your Data", description: "Learn about social engineering tactics and how to protect yourself.", image: "https://via.placeholder.com/150", details: "Detailed content for project 1." },
  { title: "Diversity & Inclusion", description: "Learn about diversity and inclusion principles.", image: "https://via.placeholder.com/150", details: "Detailed content for project 2." },
  { title: "Working on a Project: Goal Setting", description: "Set clear goals to drive project success.", image: "https://via.placeholder.com/150", details: "Detailed content for project 3." },
];

const ELearningProjects: React.FC = () => {
  const [selected, setSelected] = useState<null | typeof portfolioItems[0]>(null);

  return (
    <PortfolioCategoryLayout>
      <Typography variant="h4" gutterBottom>E Learning Projects</Typography>
      <Grid container spacing={3}>
        {portfolioItems.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <PortfolioCard title={item.title} description={item.description} image={item.image} link="#" onClick={() => setSelected(item)} />
          </Grid>
        ))}
      </Grid>

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "90%", maxWidth: 400, bgcolor: "background.paper", boxShadow: 24, borderRadius: 2, p: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>{selected?.title}</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>{selected?.details}</Typography>
          <Typography variant="body2" color="text.secondary">{selected?.description}</Typography>
        </Box>
      </Modal>
    </PortfolioCategoryLayout>
  );
};

export default ELearningProjects;