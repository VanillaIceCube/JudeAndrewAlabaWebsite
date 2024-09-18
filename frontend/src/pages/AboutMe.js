import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const AboutMe = () => (
  <Container maxWidth="md" sx={{ mt: 4, textAlign: 'center' }}>
    <Typography variant="h4" gutterBottom>
      Hello, I am Jude
    </Typography>
    <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}> {/* Lighter text color for body */}
      I am a developer, gamer, and content creator. Explore my latest projects and content!
    </Typography>
  </Container>
);

export default AboutMe;