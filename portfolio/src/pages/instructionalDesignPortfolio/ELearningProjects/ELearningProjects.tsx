import React, { useState } from 'react';
import { Box, Typography, Modal } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PortfolioCard from '../../../components/PortfolioCard';
import {
  literaturePortalThumb,
  aiScorerThumb,
  elearningCard,
} from '../../../assets/thumbnails';

interface AppItem {
  kind: 'app';
  title: string;
  description: string;
  image: string;
  appRoute: string;
}

interface LinkItem {
  kind: 'link';
  title: string;
  description: string;
  image: string;
  link: string;
  details: string;
}

type PortfolioItem = AppItem | LinkItem;

const portfolioItems: PortfolioItem[] = [
  // ── AI-POWERED ID TOOLS ──
  {
    kind: 'app',
    title: 'English Literature Portal',
    description: '5-point Bagrut prep: 5 poems, 2 short stories — Rise 360-style modules with HOTS quiz, stanza analysis, bridging activities and exam strategy.',
    image: literaturePortalThumb,
    appRoute: '/instructional-design-portfolio/app/literature-portal',
  },
  {
    kind: 'app',
    title: 'AI Bagrut Scorer',
    description: 'AI-powered answer scorer using MOE rubrics. Students type a LOTS, Analysis, HOTS or Bridging answer and receive instant criterion-specific feedback with a score.',
    image: aiScorerThumb,
    appRoute: '/instructional-design-portfolio/app/ai-bagrut-scorer',
  },
  // ── E-LEARNING MODULES ──
  {
    kind: 'link',
    title: 'Social Engineering: How Hackers Steal Your Data',
    description: 'Learn about social engineering tactics and how to protect yourself.',
    image: elearningCard,
    link: '#',
    details: 'Detailed content for project 1.',
  },
  {
    kind: 'link',
    title: 'Diversity & Inclusion',
    description: 'Learn about diversity and inclusion principles.',
    image: elearningCard,
    link: '#',
    details: 'Detailed content for project 2.',
  },
  {
    kind: 'link',
    title: 'Working on a Project: Goal Setting',
    description: 'Set clear goals to drive project success.',
    image: elearningCard,
    link: '#',
    details: 'Detailed content for project 3.',
  },
  {
    kind: 'link',
    title: 'Time Management Tips',
    description: 'Discover effective time management strategies.',
    image: elearningCard,
    link: '#',
    details: 'Detailed content for project 4.',
  },
  {
    kind: 'link',
    title: 'Effective Communication Skills',
    description: 'Improve your communication in professional settings.',
    image: elearningCard,
    link: '#',
    details: 'Detailed content for project 5.',
  },
  {
    kind: 'link',
    title: 'Leadership and Teamwork',
    description: 'Learn how to lead and collaborate effectively.',
    image: elearningCard,
    link: '#',
    details: 'Detailed content for project 6.',
  },
];

const ELearningProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<LinkItem | null>(null);

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', py: 5, px: { xs: 2, md: 6 } }}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>eLearning Projects</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Interactive learning modules and AI-powered educational tools.
      </Typography>

      <Grid container spacing={3}>
        {portfolioItems.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            {item.kind === 'app' ? (
              <PortfolioCard
                title={item.title}
                description={item.description}
                image={item.image}
                appRoute={item.appRoute}
              />
            ) : (
              <PortfolioCard
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
                onClick={() => setSelectedProject(item)}
              />
            )}
          </Grid>
        ))}
      </Grid>

      <Modal open={!!selectedProject} onClose={() => setSelectedProject(null)}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%', maxWidth: 400,
          bgcolor: 'background.paper', boxShadow: 24, borderRadius: 2, p: 4,
        }}>
          <Typography variant="h5" sx={{ mb: 2 }}>{selectedProject?.title}</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>{selectedProject?.details}</Typography>
          <Typography variant="body2" color="text.secondary">{selectedProject?.description}</Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default ELearningProjects;