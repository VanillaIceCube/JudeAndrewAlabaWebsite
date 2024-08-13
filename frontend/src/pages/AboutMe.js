import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Carousel from 'react-material-ui-carousel';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
    const birthDate = new Date(Date.UTC(1998, 6, 29, 7, 30));
    const now = new Date();
    
    let years = now.getUTCFullYear() - birthDate.getUTCFullYear();
    let months = now.getUTCMonth() - birthDate.getUTCMonth();
    let days = now.getUTCDate() - birthDate.getUTCDate();
    let hours = now.getUTCHours() - birthDate.getUTCHours();
    let minutes = now.getUTCMinutes() - birthDate.getUTCMinutes();
    let seconds = now.getUTCSeconds() - birthDate.getUTCSeconds();
    
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getUTCFullYear(), now.getUTCMonth(), 0);
      days += prevMonth.getUTCDate();
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    switch (detailLevel) {
      case 1:
        return `${years} Years ${months} Months`;
      case 2:
        return `${years} Years ${months} Months ${days} Days`;
      case 3:
        return `${years} Years ${months} Months ${days} Days ${hours} Hours`;
      case 4:
        return `${years} Years ${months} Months ${days} Days ${hours} Hours ${minutes} Minutes`;
      case 5:
        return `${years} Years ${months} Months ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
      default:
        return `${years} Years`;
    }
  };

  const carouselItems = [
    {
      title: "Sport?",
      content: (
        <Box>
          <Typography variant="body1">
            I can't deciede between Volleyball & Snowboarding!
          </Typography>
        </Box>
      ),
    },
    {
      title: "Food?",
      content: (
        <Box>
          <Typography variant="body1">
            Probably Poutine & Sushi!
            My all time favorite Poutine is Ma Poule Mouillée in Montreal!
          </Typography>
        </Box>
      ),
    },
    {
      title: "Author?",
      content: (
        <Typography variant="body1">
          Brandon Sanderson!

          Favorite book so far is Yumi and the Nightmare Painter
        </Typography>
      ),
    },
    {
      title: "Video Game?",
      content: (
        <Typography variant="body1">
          Factorio!
        </Typography>
      ),
    },
    {
      title: "Board Game?",
      content: (
        <Typography variant="body1">
          Dominion!
        </Typography>
      ),
    },
  ];

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
              Hi! I'm Jude Andrew.
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
          </Box> old.
        </Typography>

        <Divider sx={{ my: { xs: 2, sm: 4 } }} />

        <Typography variant="h5" gutterBottom>
          What is my favorite...
        </Typography>

        <Carousel animation="slide">
          {carouselItems.map((item, index) => (
            <Paper key={index} elevation={2} sx={{ p: 2 }}>
              <Grid container spacing={2} alignItems="center">
                {item.icon && (
                  <Grid item>
                    <Box sx={{ fontSize: '2rem', color: theme.palette.primary.main }}>
                      {item.icon}
                    </Box>
                  </Grid>
                )}
                <Grid item xs>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  {item.content}
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Carousel>
      </Paper>
    </Container>
  );
};

export default AboutMe;