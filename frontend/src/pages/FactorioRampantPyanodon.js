import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FactorioRampantPyanodon = () => (
  <Container maxWidth="md" sx={{ mt: 4 }}>
    {/* Title Section */}
    <Typography variant="h4" gutterBottom>
      Factorio Rampant Pyanodon
    </Typography>
    <Divider sx={{ my: 4 }} />

    {/* Introduction/Description */}
    <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
      Factorio Rampant Pyanodon is a hardcore mod pack for Factorio that introduces incredibly complex and intricate factory setups.
      Dive into my series where I explore the depths of this mod, share tips, and showcase my insane base creations!
    </Typography>

    {/* Link to YouTube */}
    <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
      Check out my{' '}
      <Link href="https://www.youtube.com/@VanillaIceCube" target="_blank" rel="noopener noreferrer" sx={{ color: 'secondary.main' }}>
        YouTube channel <YouTubeIcon sx={{ verticalAlign: 'middle' }} />
      </Link>{' '}
      for more content.
    </Typography>
    <Divider sx={{ my: 4 }} />

    {/* Featured Video */}
    <Typography variant="h5" gutterBottom>
      Featured Video: My Latest Base Tour
    </Typography>
    <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
      Watch the latest episode where I tour my latest insane base. Don't forget to subscribe!
    </Typography>

    <Box sx={{ mt: 4, position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
      <iframe
        title="Factorio Rampant Pyanodon Video"
        src="https://www.youtube.com/embed/XCvq1H2OVWs?autoplay=1&mute=1&si=1U_alQOuaZOev2ap"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px', border: 'none' }}
      />
    </Box>
    <Divider sx={{ my: 4 }} />

    {/* Feature Highlights */}
    <Typography variant="h5" gutterBottom>
      What You’ll Learn:
    </Typography>
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={12} sm={6}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <CheckCircleIcon color="secondary" sx={{ fontSize: 40 }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Complex Factory Designs
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Learn how to design factories that manage intricate modpack requirements.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <CheckCircleIcon color="secondary" sx={{ fontSize: 40 }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Base Expansion Tips
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Discover strategies for efficient base expansions in Pyanodon.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    {/* Call to Action */}
    <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
      Subscribe for More
    </Typography>
    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
      Don't miss out on future tutorials, base tours, and gameplay tips. Make sure to subscribe to my YouTube channel and hit the bell icon!
    </Typography>
  </Container>
);

export default FactorioRampantPyanodon;