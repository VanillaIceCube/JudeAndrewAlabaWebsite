import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import RouteIcon from '@mui/icons-material/Route';
import PersonIcon from '@mui/icons-material/Person';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import './MyToolbar.css';

const MyToolbar = () => {
  return (
    <AppBar position="static" className="toolbar">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button
            component={Link}
            to="/about-me"
            color="inherit"
            startIcon={<PersonIcon />}
            sx={{ mx: 1 }}
          >
            About me
          </Button>
          <Button
            component={Link}
            to="/data-engineering-project"
            color="inherit"
            startIcon={<RouteIcon />}
            sx={{ mx: 1 }}
          >
            Data Engineering Project
          </Button>
          <Button
            component={Link}
            to="/factorio-rampant-pyanodon"
            color="inherit"
            startIcon={<YouTubeIcon />}
            sx={{ mx: 1 }}
          >
            Factorio Rampant Pyanodon
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MyToolbar;