import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const AboutMe = () => (
  <Container maxWidth="md" sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      About me
    </Typography>
    <Box sx={{ mt: 2 }}>
      <Typography variant="body1">
        I <em>will</em> be putting a project in here...
      </Typography>
    </Box>
  </Container>
);

export default AboutMe;