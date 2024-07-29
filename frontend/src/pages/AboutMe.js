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
            src="https://media.licdn.com/dms/image/D5603AQHQ4u6GR83ZSA/profile-displayphoto-shrink_200_200/0/1706633212465?e=1727913600&v=beta&t=ObBTdTUGC0fZ14X-aIjLnNWQ-kfKri7ailBwXYS_0WA" 
            sx={{ width: 150, height: 150, mb: 2, mx: 'auto' }} 
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="body1" gutterBottom>
            Hello! My name is Jude Andrew Alaba, and I made this website. I'm not quite sure what to put here yet, but I do know that I would like to show, not tell.
          </Typography>
        </Grid>
      </Grid>
      
      <Divider sx={{ my: 4 }} />
      
      <Typography variant="h5" gutterBottom>
        Biography
      </Typography>
      <Typography variant="body1" gutterBottom>
        A long long time ago, in a country far away...
      </Typography>
      
      <Divider sx={{ my: 4 }} />
      
      <Typography variant="h5" gutterBottom>
        Hobbies
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        <Paper elevation={1} sx={{ p: 2, width: '45%' }}>
          <Typography variant="h6" gutterBottom>
            Volleyball
          </Typography>
          <Typography variant="body1">
            Catch me on the Beach Sun/Wed!
          </Typography>
        </Paper>
        <Paper elevation={1} sx={{ p: 2, width: '45%' }}>
          <Typography variant="h6" gutterBottom>
            Snowboarding
          </Typography>
          <Typography variant="body1">
            Catch me on the slopes hopefully at least every other weekend during the winter season!
          </Typography>
        </Paper>
      </Box>
    </Paper>
  </Container>
);

export default AboutMe;