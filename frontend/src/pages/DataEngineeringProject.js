import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const DataEngineeringProject = () => (
  <Container maxWidth="md" sx={{ mt: 4 }}>
    <Paper elevation={3} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <Typography variant="h4" gutterBottom>
        Data Engineering Project
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">
          I <em>will</em> be putting a project in here...
        </Typography>
      </Box>
    </Paper>
  </Container>
);

export default DataEngineeringProject;