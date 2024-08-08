import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import RouteIcon from '@mui/icons-material/Route';
import PersonIcon from '@mui/icons-material/Person';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useLocation } from 'react-router-dom';
import './MyToolbar.css';

const MyToolbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [value, setValue] = useState(false);

  useEffect(() => {
    switch (currentPath) {
      case '/about-me':
        setValue(0);
        break;
      case '/data-engineering-project':
        setValue(1);
        break;
      case '/factorio-rampant-pyanodon':
        setValue(2);
        break;
      default:
        setValue(false);
    }
  }, [currentPath]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }} className="toolbar">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        TabIndicatorProps={{ style: { backgroundColor: 'white' } }}
      >
        <Tab
          label="About me"
          component={Link}
          to="/about-me"
          icon={<PersonIcon />}
          iconPosition="start"
        />
        <Tab
          label="Data Engineering Project"
          component={Link}
          to="/data-engineering-project"
          icon={<RouteIcon />}
          iconPosition="start"
        />
        <Tab
          label="Factorio Rampant Pyanodon"
          component={Link}
          to="/factorio-rampant-pyanodon"
          icon={<YouTubeIcon />}
          iconPosition="start"
        />
      </Tabs>
    </Box>
  );
};

export default MyToolbar;