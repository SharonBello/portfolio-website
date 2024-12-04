import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: '#6c63ff',
      color: '#fff',
      textAlign: 'center',
      py: 2,
      mt: 'auto',
    }}
  >
    <Typography variant="body2">© 2024 Your Name. All rights reserved.</Typography>
  </Box>
);

export default Footer;
