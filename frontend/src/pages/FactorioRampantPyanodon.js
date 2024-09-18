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
import PatreonIcon from '@mui/icons-material/MonetizationOn'; // Placeholder icon for Patreon
import DiscordIcon from '@mui/icons-material/Chat'; // Placeholder icon for Discord

const FactorioRampantPyanodon = () => (
  <Container maxWidth="md" sx={{ mt: 4 }}>
    {/* Title Section */}
    <Typography variant="h4" gutterBottom>
      Factorio Rampant Pyanodon
    </Typography>
    <Divider sx={{ my: 4 }} />

    {/* Introduction/Description */}
    <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
      Factorio is my all-time favorite game. It's a factory builder that focuses on resource management and logistics. <br />
      I'm currently playing with two of my favorite modpacks, which increase the complexity, difficulty, and length of the game.
    </Typography>
    <Divider sx={{ my: 4 }} />

    {/* Featured Video */}
    <Typography variant="h5" gutterBottom>
      My Latest Base Tour
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

    {/* Mod Author and Modpack Section */}
    <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
      Modpacks
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Link
              variant="h6"
              gutterBottom
              href="https://mods.factorio.com/user/pyanodon"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 2, display: 'block', color: 'secondary.main' }}
            >
              Pyanodons Modpack
            </Link>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" color="text.secondary">
              <strong>Author:</strong> Pyanodon <br />
              This modpack adds deep resource management and advanced factory complexity, perfect for experienced Factorio players.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Link
              variant="h6"
              gutterBottom
              href="https://mods.factorio.com/user/Veden"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 2, display: 'block', color: 'secondary.main' }}
            >
              Rampant Modpack
            </Link>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" color="text.secondary">
              <strong>Author:</strong> Veden <br />
              The Rampant mod brings smarter, evolving enemies and makes base defense much more challenging with enhanced AI.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <Divider sx={{ my: 4 }} />

    {/* Social Links Section */}
    <Box>
    <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
      Join me
    </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
            <YouTubeIcon sx={{ fontSize: 40, color: 'red', mr: 2 }} />
            <Link href="https://www.youtube.com/@VanillaIceCube" target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
              YouTube
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
            <PatreonIcon sx={{ fontSize: 40, color: '#f96854', mr: 2 }} />
            <Link href="https://www.patreon.com/VanillaIceCube" target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
              Patreon
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
            <DiscordIcon sx={{ fontSize: 40, color: '#7289da', mr: 2 }} />
            <Link href="https://discord.gg/9fRqhzTT" target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
              Discord
            </Link>
          </Card>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

export default FactorioRampantPyanodon;