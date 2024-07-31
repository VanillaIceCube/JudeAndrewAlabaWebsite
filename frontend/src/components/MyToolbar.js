import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import RouteIcon from '@mui/icons-material/Route';
import PersonIcon from '@mui/icons-material/Person';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useLocation } from 'react-router-dom';
import './MyToolbar.css';

const MyToolbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [underlineStyle, setUnderlineStyle] = useState({});
  const buttonsRef = useRef([]);

  useEffect(() => {
    const activeButton = buttonsRef.current.find(
      button => button && button.dataset.path === currentPath
    );
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setUnderlineStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [currentPath]);

  return (
    <AppBar position="static" className="toolbar">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <Button
            component={Link}
            to="/about-me"
            color="inherit"
            startIcon={<PersonIcon />}
            className={currentPath === '/about-me' ? 'active' : ''}
            sx={{ mx: 1 }}
            data-path="/about-me"
            ref={el => buttonsRef.current[0] = el}
          >
            About me
          </Button>
          <Button
            component={Link}
            to="/data-engineering-project"
            color="inherit"
            startIcon={<RouteIcon />}
            className={currentPath === '/data-engineering-project' ? 'active' : ''}
            sx={{ mx: 1 }}
            data-path="/data-engineering-project"
            ref={el => buttonsRef.current[1] = el}
          >
            Data Engineering Project
          </Button>
          <Button
            component={Link}
            to="/factorio-rampant-pyanodon"
            color="inherit"
            startIcon={<YouTubeIcon />}
            className={currentPath === '/factorio-rampant-pyanodon' ? 'active' : ''}
            sx={{ mx: 1 }}
            data-path="/factorio-rampant-pyanodon"
            ref={el => buttonsRef.current[2] = el}
          >
            Factorio Rampant Pyanodon
          </Button>
          <div className="underline" style={underlineStyle}></div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MyToolbar;