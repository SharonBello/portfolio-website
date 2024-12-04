import React from 'react';
import Particles from 'react-tsparticles';
import type { ISourceOptions } from 'tsparticles-engine';
import './HomePage.scss';
import { Button, Typography, Box, Container } from '@mui/material';
import { useCallback } from "react";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

const HeroSection: React.FC = () => {

  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);


  const particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: "#ffffff", // Background color
      },
    },
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
        value: "#415161", // Particle color
      },
      links: {
        color: "#415161",
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
              <Typography variant="h4" className="intro-title">
                Elevate Your Learning Experience
              </Typography>
              <Typography variant="body1" className="intro-description">
                I design innovative learning solutions that simplify complex ideas, inspire growth, and empower organizations to achieve excellence.
              </Typography>
              <Button variant="contained" className="intro-button">
                Get in Touch
              </Button>
            </Box>
          </Container>
        </div>
      </section>

      {/* Content Section */}
      <Container maxWidth="lg" className="homepage__content-container">
        <Box className="homepage__content">
          <Typography variant="h4" className="homepage__content-title">
            What I have to offer as an Instructional Designer
          </Typography>
          <ul className="homepage__list">
            <li>
              Expertise in creating learner-centered instructional designs and adaptive learning solutions tailored to diverse audiences, simplifying complex concepts to inspire innovation and drive growth.
            </li>
            <li>
              Extensive experience in developing impactful curricula, including structured learning modules, onboarding materials, and interactive activities that foster meaningful and measurable learning outcomes.
            </li>
            <li>
              Proven ability to leverage cutting-edge tools such as Articulate Storyline, Rise 360, Moodle, and Canvas to design and deliver engaging learning experiences aligned with organizational goals.
            </li>
            <li>
              Strong technical skills, including proficiency in web development (HTML5, CSS3, JavaScript, React, and Node.js), multimedia tools (Adobe Creative Cloud, Figma, Camtasia), and learning analytics platforms like Google Analytics and LMS analytics to optimize learning strategies and user engagement.
            </li>
            <li>
              Demonstrated success in managing large-scale educational projects, supporting up to 200+ learners weekly through data-driven monitoring and personalized instructional adjustments to enhance outcomes.
            </li>
            <li>
              Skilled at integrating technology in education, including the design and deployment of innovative apps and learning solutions for international programs, such as entrepreneurship challenges and design thinking workshops.
            </li>
            <li>
              Accomplished in collaborative and leadership roles, fostering cross-disciplinary teamwork and mentoring professionals to achieve excellence in both educational and professional contexts.
            </li>
          </ul>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
