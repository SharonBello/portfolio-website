import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import Logo from '../../styles/icons/Logo.png'

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#415161',
        color: 'white',
        py: 3,
        px: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingBlock: '0.5em',
      }}
    >
      {/* Left Section: Rights Reserved */}
      <Typography variant="body2" sx={{ flex: 1, textAlign: 'left' }}>
        Sharon Bello Copyright © 2024 All rights reserved.
      </Typography>

      {/* Center Section: Logo */}
      <Box
        sx={{
          flex: 1,
          textAlign: 'center',
        }}
      >
        <img
          src={Logo} // Replace with your logo path
          alt="Your Logo"
          style={{
            width: '100px', // Adjust width as needed
            height: 'auto', // Maintain aspect ratio
          }}
        />
      </Box>

      {/* Right Section: Social Links */}
      <Box sx={{ flex: 1, textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        <IconButton
          aria-label="Send Email"
          color="inherit"
          href="mailto:your-email@gmail.com"
          target="_blank"
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          aria-label="WhatsApp"
          color="inherit"
          href="https://wa.me/972544767146?text=%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A6%D7%95%D7%A8%20%D7%A7%D7%A9%D7%A8"
          target="_blank"
        >
          <WhatsAppIcon />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          color="inherit"
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="Phone"
          color="inherit"
          href="tel:+972544767146"
        >
          <PhoneIcon />
        </IconButton>
        <IconButton
          aria-label="GitHub"
          color="inherit"
          href="https://github.com/your-github"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
