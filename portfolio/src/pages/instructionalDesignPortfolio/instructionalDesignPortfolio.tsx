import React from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Container, Typography, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Categories } from './portfolioHelper';

const InstructionalDesignPortfolio: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', py: 4 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Instructional Design Portfolio
        </Typography>
        <Grid container spacing={3}>
          {Categories.map((category, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card>
                <CardActionArea onClick={() => handleCardClick(category.route)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={category.image}
                    alt={category.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {category.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default InstructionalDesignPortfolio;
