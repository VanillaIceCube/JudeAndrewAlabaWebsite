import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import RouteIcon from '@mui/icons-material/Route';
import PersonIcon from '@mui/icons-material/Person';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './MyToolbar.css';

const MyToolbar = () => {
  return (
    <AppBar position="static" className="toolbar">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button color="inherit" startIcon={<PersonIcon />} sx={{ mx: 1 }}>About me</Button>
          <Button color="inherit" startIcon={<RouteIcon />} sx={{ mx: 1 }}>Data Engineering Project</Button>
          <Button color="inherit" startIcon={<YouTubeIcon />} sx={{ mx: 1 }}>Factorio Rampant Pyanodon</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MyToolbar;