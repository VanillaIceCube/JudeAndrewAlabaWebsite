import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import './MyToolbar.css';

const MyToolbar = () => {
  return (
    <AppBar position="static" className="toolbar">
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