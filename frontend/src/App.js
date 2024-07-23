// src/App.js
import React from 'react';
import MyToolbar from './components/MyToolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const App = () => {
  return (
    <div>
      <MyToolbar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to My Website
          </Typography>
          <Typography variant="body1" paragraph>
            This is a sample website using Material-UI. The toolbar at the top contains three buttons, each with an icon.
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
            <Typography variant="body1" sx={{ maxWidth: '600px', textAlign: 'center' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh eget suscipit tincidunt, nunc odio malesuada justo, non dapibus leo felis ut quam. Aliquam erat volutpat.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default App;
