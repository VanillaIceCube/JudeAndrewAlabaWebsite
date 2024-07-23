// src/components/MyToolbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const MyToolbar = () => {
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button color="inherit" startIcon={<HomeIcon />} sx={{ mx: 1 }}>Home</Button>
          <Button color="inherit" startIcon={<InfoIcon />} sx={{ mx: 1 }}>About</Button>
          <Button color="inherit" startIcon={<ContactMailIcon />} sx={{ mx: 1 }}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MyToolbar;
