import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks: { name: string; path: string }[] = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Portfolio', path: '/instructional-design-portfolio' },
    { name: 'About', path: '/about' },
  ];


  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" className="header">
      <Toolbar className="header__toolbar">

        {/* Hamburger Menu for Small Screens */}
        <IconButton
          edge="start"
          aria-label="menu"
          className="header__menu-icon"
          onClick={() => toggleDrawer(true)}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' }, // Visible only on small screens
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo Section */}
        <Box className="header__logo">
          <Typography variant="h6" component="a" href="/" className="header__title">
            Sharon Bello Portfolio
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box className="header__nav-links">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `header__nav-link ${isActive ? 'active' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </Box>
      </Toolbar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
        className="header__drawer"
        PaperProps={{
          sx: {
            width: '250px', // Adjust width of the drawer
            padding: '16px', // Add padding for spacing
            backgroundColor: '#f9fafb', // Light gray background
          },
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'left',
            marginBottom: '16px',
            color: 'black',
          }}
        >
          Sharon Bello Portfolio
        </Typography>
        <List>
          {navLinks.map((link, index) => (
            <ListItem
              key={index}
              onClick={() => toggleDrawer(false)}
              className="header__drawer-item"
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `header__drawer-link ${isActive ? 'active' : ''}`
                }
              >
                {link.name}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
