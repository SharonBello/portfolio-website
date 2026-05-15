import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;        // external URL — opens in new tab
  appRoute?: string;    // internal portfolio route — stays within the app
  onClick?: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  image,
  link,
  appRoute,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (appRoute) {
      navigate(appRoute);
    }
  };

  const renderButton = () => {
    if (appRoute) {
      // Internal navigation — stays within portfolio, no new tab
      return (
        <Button size="small" color="primary" onClick={handleClick}>
          View Project
        </Button>
      );
    }
    if (link) {
      // link is guaranteed string here (truthy check narrows the type)
      return (
        <Button size="small" color="primary" href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
      );
    }
    // onClick only (e.g. modal trigger)
    if (onClick) {
      return (
        <Button size="small" color="primary" onClick={onClick}>
          View Project
        </Button>
      );
    }
    return null;
  };

  return (
    <Card sx={{ maxWidth: '100%' }}>
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: '100%',
          height: 160,
          objectFit: 'cover',
          display: 'block',
          backgroundColor: '#f0f0f0',
        }}
      />
      <CardContent>
        <Typography variant="h6" component="div">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
      <CardActions>{renderButton()}</CardActions>
    </Card>
  );
};

export default PortfolioCard;