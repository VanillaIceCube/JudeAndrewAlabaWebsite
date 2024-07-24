import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const FactorioRampantPyanodon = () => (
  <Container maxWidth="md" sx={{ mt: 4 }}>
    <Paper elevation={3} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <Typography variant="h4" gutterBottom>
        Factorio Rampant Pyanodon
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">
          Hehe, I'm gonna plug my {' '}
          <Link href="https://www.youtube.com/@VanillaIceCube" target="_blank" rel="noopener noreferrer">
            youtube channel
          </Link>
          .
        </Typography>
      </Box>
    </Paper>
  </Container>
);

export default FactorioRampantPyanodon;