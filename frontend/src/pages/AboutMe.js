import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import './AboutMe.css';

const AboutMe = () => (
  <Container maxWidth="md" sx={{ mt: 4 }}>
    <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/Florence.jpg`} alt="Background" />
        <div className="overlay">
          <Typography variant="h2" gutterBottom className="jude-text">
            Hi! I'm Jude.
          </Typography>
        </div>
      </div>

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

export default AboutMe;