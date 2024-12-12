import React, { useState } from 'react';
import { Box, Container, Typography, Modal } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PortfolioCard from '../../components/PortfolioCard';

const portfolioItems = [
  {
    title: "Social Engineering: How Hackers Steal Your Data",
    description: "Learn about social engineering tactics and how to protect yourself.",
    image: "https://via.placeholder.com/150",
    details: "Detailed content for project 1.",
  },
  {
    title: "Diversity & Inclusion",
    description: "Learn about diversity and inclusion principles.",
    image: "https://via.placeholder.com/150",
    details: "Detailed content for project 2.",
  },
  {
    title: "Working on a Project: Goal Setting",
    description: "Set clear goals to drive project success.",
    image: "https://via.placeholder.com/150",
    details: "Detailed content for project 3.",
  },
  {
    title: "Time Management Tips",
    description: "Discover effective time management strategies.",
    image: "https://via.placeholder.com/150",
    details: "Detailed content for project 4.",
  },
  {
    title: "Effective Communication Skills",
    description: "Improve your communication in professional settings.",
    image: "https://via.placeholder.com/150",
    details: "Detailed content for project 5.",
  },
  {
    title: "Leadership and Teamwork",
    description: "Learn how to lead and collaborate effectively.",
    image: "https://via.placeholder.com/150",
    details: "Detailed content for project 6.",
  },
];

const instructionalDesignPortfolio: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedProject, setSelectedProject] = useState<null | typeof portfolioItems[0]>(null);

  const handleCardClick = (item: typeof portfolioItems[0]) => {
    setSelectedProject(item);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container component="main" sx={{ py: 4 }}>
        {/* <Grid container spacing={4}> */}
        {/* Portfolio Section */}
        <Grid size={{ xs: 12, md: 8 }}>
          {/* <Typography variant="h4" gutterBottom>
              Portfolio
            </Typography> */}
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {portfolioItems.map((item, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <PortfolioCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  link="#"
                  onClick={() => handleCardClick(item)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Container>

      {/* Modal for Card Details */}
      <Modal open={!!selectedProject} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            {selectedProject?.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {selectedProject?.details}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {selectedProject?.description}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default instructionalDesignPortfolio;
