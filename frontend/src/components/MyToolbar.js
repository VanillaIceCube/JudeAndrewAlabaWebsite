import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const MyToolbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button color="inherit">Button 1</Button>
          <Button color="inherit">Button 2</Button>
          <Button color="inherit">Button 3</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MyToolbar;
