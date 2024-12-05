import React from 'react';
import { Box, Card, CardContent, Typography, List, ListItem } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';

const Resume: React.FC = () => {
  const cardsData = [
    {
      title: 'Summary',
      content: `Innovative and accomplished Instructional Designer and Learning Developer with expertise in creating impactful, learner-centered journeys. Extensive experience in instructional design, curriculum development, and technological integration for diverse audiences. Specializes in crafting adaptive learning solutions that simplify complex concepts, inspire innovation, and drive personal and professional growth. Proven ability to deliver transformative educational programs by blending creativity, strategy, and cutting-edge tools to empower individuals and organizations to achieve meaningful learning outcomes.`,
    },
    {
      title: 'Tech Skills',
      content: `
      - Articulate Storyline, Rise 360, LMS platforms (Moodle, Canvas, TalentLMS).
      - Adobe Creative Cloud (Photoshop, Illustrator, XD), Figma, Camtasia, H5P, Canva.
      - Web Development and Programming: HTML5, CSS3/SASS, JavaScript (ES6), React, Node.js, Angular.
      - Analytics: Google Analytics, Tag Manager, LMS analytics, SolarWinds, HotJar, BrowserStack.`,
    },
    {
      title: 'Education',
      content: `
      - M.A - Innovation track in Information Systems & Education with honors (2023)
      - Coding Academy Full-Stack Bootcamp (2022)
      - Teaching Certificate of English as a Second Language with honors (2017)
      - B.Ed. Des - Bachelor in Fashion and Textile Design with highest honors (2002).`,
    },
    {
      title: 'Volunteer Work',
      content: `SheCodes – Frontend Track mentor at the Tel-Aviv University Branch (2022).`,
    },
    {
      title: 'Languages',
      content: `Hebrew, English, Portuguese.`,
    },
  ];

  const experiences = [
    {
      title: 'Instructional Designer & Learning Developer',
      company: 'Girls Plus – Girls Technovation Challenge',
      date: '2024 - Present',
      year: '2024',
      description: `
      - Designed a comprehensive curriculum for mentors and instructors to guide teenage girls in an innovation and entrepreneurship program as a part of an international challenge.
      - Developed onboarding materials, structured learning modules, and engaging activities to enhance mentoring and instructional effectiveness for programming skills, design and creative thinking, video editing, script writing, and marketing and business plans.
      - Enhanced mentoring skills with "How to Mentor" guides, fostering impactful mentor-mentee relationships.
      - Guided participants through the creation of innovative apps and business plans, culminating in a working app, video pitch, and app demo.`,
    },
    {
      title: 'Full Stack Developer',
      company: 'Treetoscope',
      date: '2022 - 2024',
      year: '2022',
      description: `
      - Developed Frontend using React, Redux, and SCSS, and Backend using Node.js, Nest, and AWS infrastructure. Integrated AWS services such as Amplify, Cognito, RDS, IAM, EC2, S3, SNS, SWS.
      - Created a comprehensive app structure chart and XML-based documentation to streamline onboarding, visually represent system architecture, and standardize communication of app functionality.
      - Implemented data analytics tools (Google Analytics, Tag Manager) to monitor platform performance and user engagement.`,
    },
    {
      title: 'Information and Technology Coordinator, Design & English Teacher',
      company: 'Cramim HS',
      date: '2016 - 2021',
      year: '2016',
      description: `
      - Created and maintained ICT policies, procedures, and reference guides, supporting the effective use of technology in educational environments.
      - Monitored and managed the weekly learning progress of 200+ students, analyzing data to inform instructional adjustments and improve learning outcomes.
      - Planned and executed a yearly curriculum, including both in-class and remote learning components, ensuring alignment with pedagogical goals and technological advancements while monitoring and analyzing its effectiveness.`,
    },
    {
      title: 'Design Director',
      company: 'Kidichick Ltd.',
      date: '2007 - 2015',
      year: '2007',
      description: `
      - Directed creative teams in conceptualizing and delivering high-quality design projects, adhering to timelines and budgets.
      - Fostered team development and introduced innovative approaches to enhance client deliverables.
      - Developed strategic design plans with projected timelines and budgets for key collections.`,
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        padding: '32px 16px',
        backgroundColor: '#f9f9f9',
        gap: 4,
        alignItems: 'stretch',
      }}
    >
      {/* Left Side: Masonry */}
      <Box
        sx={{
          flex: 7,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          minWidth: '4em',
          flexGrow: 1,
        }}
      >
        <Masonry columns={{ xs: 1, sm: 2, md: 2 }} spacing={2}>
          {cardsData.map((card, index) => (
            <Card
              elevation={3}
              key={index}
              sx={{
                gridColumn: index === 0 ? 'span 2' : 'auto', // Summary takes double width
                gridRow: index === 0 ? 'span 2' : 'auto', // Summary takes more height
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {card.title}
                </Typography>
                {Array.isArray(card.content) ? (
                  <List>
                    {card.content.map((item, idx) => (
                      <ListItem key={idx} sx={{ paddingLeft: 0, marginBottom: 1 }}>
                        - {item}
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    {card.content}
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </Masonry>
      </Box>

      {/* Right Side: Timeline */}
      <Box
        sx={{
          flex: 5,
          maxHeight: 'calc(100vh - 64px)',
          overflowY: 'auto',
          padding: 2,
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          scrollbarWidth: 'thin',
          scrollbarColor: '#aaa transparent',
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#aaa',
            borderRadius: '6px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#888',
          },
          scrollBehavior: 'smooth',
          flexGrow: 1,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Professional Experience
        </Typography>
        <VerticalTimeline layout="1-column-left">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.date}
              icon={
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#415161',
                    borderRadius: '50%',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                >
                  {exp.year}
                </Box>
              }
              contentStyle={{ background: '#415161', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #415161' }}
            >
              <Typography variant="h6">{exp.title}</Typography>
              <Typography variant="subtitle1" gutterBottom>
                {exp.company}
              </Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                {exp.description}
              </Typography>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Box>
    </Box>
  );
};

export default Resume;
