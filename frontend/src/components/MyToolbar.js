import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import RouteIcon from '@mui/icons-material/Route';
import PersonIcon from '@mui/icons-material/Person';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useLocation } from 'react-router-dom';

const tabData = [
  { label: 'About me', path: '/about-me', icon: <PersonIcon /> },
  { label: 'Data Engineering Project', path: '/data-engineering-project', icon: <RouteIcon /> },
  { label: 'Factorio Rampant Pyanodon', path: '/factorio-rampant-pyanodon', icon: <YouTubeIcon /> },
];

const MyToolbar = () => {
  const location = useLocation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const currentTab = tabData.findIndex(tab => tab.path === location.pathname);
    setValue(currentTab === -1 ? 0 : currentTab);
  }, [location.pathname]);

  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        TabIndicatorProps={{ style: { backgroundColor: 'white', height: '2px' } }}
      >
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            component={Link}
            to={tab.path}
            icon={tab.icon}
            iconPosition="start"
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default MyToolbar;