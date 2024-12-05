import React from 'react';
import { useNavigate } from "react-router-dom";
import Particles from 'react-tsparticles';
import type { ISourceOptions } from 'tsparticles-engine';
import './HomePage.scss';
import { Container, Typography, Card, CardContent, Box, Button } from '@mui/material';
import Slider from 'react-slick';
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Show 3 cards initially
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 960, // Show 2 cards for tablets
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600, // Show 1 card for mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const cardData = [
    { title: 'Bringing Ideas to Life', description: 'Transforming complex concepts into engaging, learner-centered experiences that spark curiosity and inspire growth.' },
    { title: 'Crafting Learning Journeys', description: 'Designing interactive curricula and experiences that leave a lasting impact and deliver measurable success.' },
    { title: 'Modern Tools', description: 'Harnessing the latest tools like Storyline, Rise 360, and Moodle to create seamless and effective learning solutions.' },
    { title: 'Mastering Technology', description: 'From multimedia design to analytics, leveraging technology to enhance engagement and optimize learning strategies.' },
    { title: 'Scaling Success', description: 'Driving large-scale learning initiatives with precision, supporting learners through personalized, data-driven approaches.' },
    { title: 'Fostering Excellence', description: 'Building strong teams, mentoring professionals, and leading cross-disciplinary efforts to achieve impactful results.' },
  ];

  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);


  const particlesOptions: ISourceOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff", // Particle color
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none", // Correctly typed value
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <Box className="homepage">
      <section className="hero-section">
        {/* Particle Background */}
        <div id="tsparticles-container">
          <Particles id="tsparticles" options={particlesOptions} init={particlesInit} loaded={particlesLoaded} />
        </div>
        {/* Text + Button Above Hero */}
        <div className="hero-section__content">
          <Container maxWidth="lg">
            <Box className="hero-section__intro">
              <Typography variant="h3" className="intro-title">
                Learning Experience Developer
              </Typography>
              <Typography variant="body1" className="intro-description">
                Step into a world where <b>learning</b> becomes an inspiring <b>adventure</b>, where innovative <b>solutions</b> not only illuminate complex ideas but also empower <b>growth</b>, spark creativity, and drive excellence and <b>success</b>.
              </Typography>
              <Box className="hero-buttons">
                <Button
                  variant="contained"
                  className="hero-button primary"
                  startIcon={<WhatsAppIcon />}
                  onClick={() => {
                    window.open(
                      "https://wa.me/972544767146?text=%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A6%D7%95%D7%A8%20%D7%A7%D7%A9%D7%A8",
                      "_blank"
                    );
                  }}
                >
                  Get in Touch
                </Button>
                <Button
                  variant="text"
                  className="hero-button secondary"
                  onClick={() => navigate("/instructional-design-portfolio")}
                  endIcon={<ArrowForwardIosIcon style={{ fontSize: "1rem" }} />}
                >
                  Explore My Work
                </Button>
              </Box>
            </Box>
          </Container>
        </div>
      </section>

      {/* Content Section */}
      <Container className="homepage__content-container">
        <Box sx={{ mt: 4, px: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>
            What I Have to Offer as an Learning Developer
          </Typography>
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <Box key={index} sx={{ px: 2 }}>
                <Card elevation={3} sx={{ maxWidth: 400, margin: '0 auto' }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="div"
                      gutterBottom
                      sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        pb: 1,
                      }}
                    >
                      {card.title}
                      <Box
                        sx={{
                          content: '""',
                          display: 'block',
                          width: '40px',
                          height: '3px',
                          backgroundColor: '#FFCB74',
                          margin: '8px auto 0',
                        }}
                      />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#415161"
                      sx={{
                        textAlign: 'center',
                        fontSize: {
                          xs: '0.875rem', // Extra-small screens
                          sm: '1rem', // Small screens
                          md: '1.125rem', // Medium screens
                        },
                        lineHeight: {
                          xs: '1.4',
                          sm: '1.6',
                          md: '1.8',
                        },
                      }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
