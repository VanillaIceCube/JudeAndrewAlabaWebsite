import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useLocation } from 'react-router-dom';

const tabData = [
  { label: 'About me', path: '/about-me', icon: <PersonIcon sx={{ color: '#76c893' }} /> },
  { label: 'Factorio Rampant Pyanodon', path: '/factorio-rampant-pyanodon', icon: <YouTubeIcon sx={{ color: '#76c893' }} /> },
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
    <Box
      sx={{
        width: '100%',
        bgcolor: '#1e1e1e', // Dark background
        display: 'flex',
        justifyContent: 'center',
        py: 1,
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', // Soft shadow for subtle depth
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
      >
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            component={Link}
            to={tab.path}
            icon={tab.icon}
            iconPosition="start"
            sx={{ color: 'text.primary', minWidth: 120, px: 2 }} // Consistent spacing for tabs
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default MyToolbar;