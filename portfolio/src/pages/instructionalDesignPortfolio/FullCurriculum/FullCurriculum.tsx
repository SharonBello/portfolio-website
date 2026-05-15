import React, { useState } from 'react';
import { Box, Typography, Modal, Chip } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PortfolioCard from '../../../components/PortfolioCard';
import {
  girlsPlusThumb,
  literaturePortalThumb,
  curriculumCard,
} from '../../../assets/thumbnails';

interface AppItem {
  kind: 'app';
  title: string;
  description: string;
  image: string;
  appRoute: string;
  featured?: boolean;
}

interface LinkItem {
  kind: 'link';
  title: string;
  description: string;
  image: string;
  link: string;
  details: string;
}

type CurriculumItem = AppItem | LinkItem;

const curriculumItems: CurriculumItem[] = [
  {
    kind: 'app',
    title: 'Girls Plus Training',
    description: 'Year-long curriculum empowering teenage girls in tech and innovation. Students conceptualise and develop their own startups — app programming, business plans, and marketing strategies. Curriculum designed and built by Sharon.',
    image: girlsPlusThumb,
    appRoute: '/instructional-design-portfolio/app/girls-plus',
    featured: true,
  },
  {
    kind: 'app',
    title: 'English Literature Portal',
    description: 'Complete Bagrut English curriculum: 5 poems, 2 short stories, 7 interactive modules. Covers LOTS, Analysis, HOTS and Bridging — with worked examples, annotated texts, and exam strategy.',
    image: literaturePortalThumb,
    appRoute: '/instructional-design-portfolio/app/literature-portal',
  },
  {
    kind: 'link',
    title: 'Social Engineering: How Hackers Steal Your Data',
    description: 'Learn about social engineering tactics and how to protect yourself.',
    image: curriculumCard,
    link: '#',
    details: 'Full curriculum details for this module.',
  },
  {
    kind: 'link',
    title: 'Diversity & Inclusion',
    description: 'Learn about diversity and inclusion principles.',
    image: curriculumCard,
    link: '#',
    details: 'Full curriculum details for this module.',
  },
  {
    kind: 'link',
    title: 'Working on a Project: Goal Setting',
    description: 'Set clear goals to drive project success.',
    image: curriculumCard,
    link: '#',
    details: 'Full curriculum details for this module.',
  },
  {
    kind: 'link',
    title: 'Effective Communication Skills',
    description: 'Improve your communication in professional settings.',
    image: curriculumCard,
    link: '#',
    details: 'Full curriculum details for this module.',
  },
  {
    kind: 'link',
    title: 'Leadership and Teamwork',
    description: 'Learn how to lead and collaborate effectively.',
    image: curriculumCard,
    link: '#',
    details: 'Full curriculum details for this module.',
  },
];

const FullCurriculum: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<LinkItem | null>(null);

  const featured = curriculumItems.find(i => i.kind === 'app' && (i as AppItem).featured) as AppItem | undefined;
  const rest = curriculumItems.filter(i => !(i.kind === 'app' && (i as AppItem).featured));

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', py: 5, px: { xs: 2, md: 6 } }}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>Full Curriculum</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Complete learning programmes — scope &amp; sequence, learning objectives, multi-week design.
      </Typography>

      {featured && (
        <Box sx={{ mb: 4 }}>
          <Chip label="Featured Programme" size="small" sx={{ mb: 1.5, background: '#FFCB74', color: '#2A1A00', fontWeight: 600, fontSize: 11 }} />
          <PortfolioCard
            title={featured.title}
            description={featured.description}
            image={featured.image}
            appRoute={featured.appRoute}
          />
        </Box>
      )}

      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'text.secondary' }}>More Projects</Typography>
      <Grid container spacing={3}>
        {rest.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            {item.kind === 'app' ? (
              <PortfolioCard
                title={item.title}
                description={item.description}
                image={item.image}
                appRoute={(item as AppItem).appRoute}
              />
            ) : (
              <PortfolioCard
                title={item.title}
                description={item.description}
                image={item.image}
                link={(item as LinkItem).link}
                onClick={() => setSelectedProject(item as LinkItem)}
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

export default FullCurriculum;