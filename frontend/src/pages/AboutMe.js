import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const AboutMe = () => (
  <Container maxWidth="md" sx={{ mt: 4 }}>
    <Paper elevation={3} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">
          Hello, I am me
        </Typography>
      </Box>
    </Paper>
  </Container>
);

export default AboutMe;