import React from 'react';
import './PortfolioCard.scss';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, image, link }) => (
  <div className="portfolio-card">
    <img src={image} alt={title} className="portfolio-card-image" />
    <div className="portfolio-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  </div>
);

export default PortfolioCard;
