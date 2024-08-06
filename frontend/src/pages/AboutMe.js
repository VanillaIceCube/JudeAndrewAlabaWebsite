import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import './AboutMe.css';

const AboutMe = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [detailLevel, setDetailLevel] = useState(0);
  const [ageDetails, setAgeDetails] = useState('');

  useEffect(() => {
    if (detailLevel >= 5) {
      const interval = setInterval(() => {
        setAgeDetails(calculateAgeDetails(detailLevel));
      }, 100); // Update every 100ms for real-time display
      return () => clearInterval(interval);
    } else {
      setAgeDetails(calculateAgeDetails(detailLevel));
    }
  }, [detailLevel]);

  const handleAgeClick = () => {
    setDetailLevel((prevLevel) => (prevLevel + 1) % 7);
  };

  const calculateAgeDetails = (detailLevel) => {
    const birthDate = new Date(Date.UTC(1998, 6, 29, 7, 30)); // UTC time for 3:30 PM in UTC+8
    const now = new Date();
    const diff = now - birthDate;

    const years = now.getUTCFullYear() - birthDate.getUTCFullYear();
    const months = now.getUTCMonth() - birthDate.getUTCMonth();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);

    switch (detailLevel) {
      case 1:
        return `${years} Years ${months} Months`;
      case 2:
        return `${years} Years ${months} Months ${days % 30} Days`;
      case 3:
        return `${years} Years ${months} Months ${days % 30} Days ${hours % 24} Hours`;
      case 4:
        return `${years} Years ${months} Months ${days % 30} Days ${hours % 24} Hours ${minutes % 60} Minutes`;
      case 5:
        return `${years} Years ${months} Months ${days % 30} Days ${hours % 24} Hours ${minutes % 60} Minutes ${seconds % 60} Seconds`;
      default:
        return `${years} Years`;
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/Florence.jpg`} alt="Background" />
          <div className="overlay">
            <Typography 
              variant="h2" 
              gutterBottom 
              className="jude-text" 
              sx={{ fontSize: isSmallScreen ? '1.5rem' : '2rem' }}
            >
              Hi! I'm Jude.
            </Typography>
          </div>
        </div>

        <Divider sx={{ my: { xs: 2, sm: 4 } }} />

        <Typography variant="h5" gutterBottom className="typography-text">
          I am <Box
            component="span" 
            onClick={handleAgeClick} 
            className="age-text"
          >
            {ageDetails}
          </Box> Old!
        </Typography>

        <Divider sx={{ my: { xs: 2, sm: 4 } }} />

        <Typography variant="h5" gutterBottom>
          Biography
        </Typography>
        <Typography variant="body1" gutterBottom>
          A long long time ago, in a country far away...
        </Typography>

        <Divider sx={{ my: { xs: 2, sm: 4 } }} />

        <Typography variant="h5" gutterBottom>
          Hobbies
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={1} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Volleyball
              </Typography>
              <Typography variant="body1">
                Catch me on the Beach Sun/Wed!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={1} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Snowboarding
              </Typography>
              <Typography variant="body1">
                Catch me on the slopes hopefully at least every other weekend during the winter season!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AboutMe;