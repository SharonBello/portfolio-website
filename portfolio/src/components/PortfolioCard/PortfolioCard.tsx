import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  onClick?: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, image, link }) => (
  <Card sx={{ maxWidth: '100%' }}>
    <CardMedia
      component="img"
      height="140"
      image={image}
      alt={title}
    />
    <CardContent>
      <Typography variant="h6" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary" href={link} target="_blank">
        View Project
      </Button>
    </CardActions>
  </Card>
);

export default PortfolioCard;
