import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PortfolioCard from '../../../components/PortfolioCard';
import {
  loomboxThumb,
  floriginsThumb,
  pansIsraelThumb,
  girlsPlusThumb,
} from '../../../assets/thumbnails';

const websiteItems = [
  {
    title: 'Loombox',
    description: 'AI-powered family story generator. Answer questions about your family and the app crafts personalised, shareable stories. Full-stack — React + Cloudflare Worker AI backend.',
    image: loomboxThumb,
    appRoute: '/instructional-design-portfolio/app/loombox',
  },
  {
    title: 'Florigins',
    description: 'Your ethnicity, origin, gender and preferences are algorithmically translated into a unique flower. Every user grows a different one. Complex generative UX/UI — freelance project.',
    image: floriginsThumb,
    appRoute: '/instructional-design-portfolio/app/florigins',
  },
  {
    title: 'PANS PANDAS Israel',
    description: 'Nonprofit advocacy website for PANS/PANDAS Israel — a rare paediatric neurological condition. Real client, custom domain panspandasil.org, real users.',
    image: pansIsraelThumb,
    appRoute: '/instructional-design-portfolio/app/pans-israel',
  },
  {
    title: 'Girls Plus Training',
    description: 'Platform for a year-long curriculum empowering teenage girls in tech and innovation — startup ideation, app development, and business planning. Curriculum designed and built by Sharon.',
    image: girlsPlusThumb,
    appRoute: '/instructional-design-portfolio/app/girls-plus',
  },
];

const Websites: React.FC = () => (
  <Box sx={{ width: '100%', minHeight: '100vh', py: 5, px: { xs: 2, md: 6 } }}>
    <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>Websites</Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
      Deployed web applications — freelance, client, and personal projects.
    </Typography>
    <Grid container spacing={3}>
      {websiteItems.map((item, i) => (
        <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
          <PortfolioCard
            title={item.title}
            description={item.description}
            image={item.image}
            appRoute={item.appRoute}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Websites;