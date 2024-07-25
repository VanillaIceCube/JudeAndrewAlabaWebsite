import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const AboutMe = () => (
  <Container maxWidth="md" sx={{ mt: 4 }}>
    <Paper elevation={3} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Avatar 
            alt="Profile Picture" 
            src="https://via.placeholder.com/150" 
            sx={{ width: 150, height: 150, mb: 2, mx: 'auto' }} 
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="body1" gutterBottom>
            Hello, I am [Your Name], a [Your Profession] from [Your City/Country]. I have a passion for [Your Passion] and enjoy spending my time [Your Hobbies].
          </Typography>
        </Grid>
      </Grid>
      
      <Divider sx={{ my: 4 }} />
      
      <Typography variant="h5" gutterBottom>
        Biography
      </Typography>
      <Typography variant="body1" gutterBottom>
        [Your Biography]
      </Typography>
      
      <Divider sx={{ my: 4 }} />
      
      <Typography variant="h5" gutterBottom>
        Hobbies
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        <Paper elevation={1} sx={{ p: 2, width: '45%' }}>
          <Typography variant="h6" gutterBottom>
            Hobby 1
          </Typography>
          <Typography variant="body1">
            [Description of Hobby 1]
          </Typography>
        </Paper>
        <Paper elevation={1} sx={{ p: 2, width: '45%' }}>
          <Typography variant="h6" gutterBottom>
            Hobby 2
          </Typography>
          <Typography variant="body1">
            [Description of Hobby 2]
          </Typography>
        </Paper>
        {/* Add more hobby sections as needed */}
      </Box>
      
      <Divider sx={{ my: 4 }} />
      
      <Typography variant="h5" gutterBottom>
        Contact Information
      </Typography>
      <Typography variant="body1" gutterBottom>
        Email: [Your Email]
      </Typography>
      <Typography variant="body1" gutterBottom>
        Phone: [Your Phone Number]
      </Typography>
    </Paper>
  </Container>
);

export default AboutMe;