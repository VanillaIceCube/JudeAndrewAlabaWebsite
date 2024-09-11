import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const FactorioRampantPyanodon = () => (
  <Container maxWidth="md" sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      Factorio Rampant Pyanodon
    </Typography>
    <Box sx={{ mt: 2 }}>
      <Typography variant="body1" gutterBottom>
        Hehe, I'm gonna plug my{' '}
        <Link href="https://www.youtube.com/@VanillaIceCube" target="_blank" rel="noopener noreferrer">
          YouTube channel
        </Link>.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Here's my latest base tour episode! <br />
        Thanks for the view!
      </Typography>
      <Box sx={{ mt: 4, position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          title="Factorio Rampant Pyanodon Video"
          src="https://www.youtube.com/embed/XCvq1H2OVWs?autoplay=1&mute=1&si=1U_alQOuaZOev2ap"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </Box>
    </Box>
  </Container>
);

export default FactorioRampantPyanodon;