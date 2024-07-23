import React from 'react';
import MyToolbar from './components/MyToolbar';
import Typography from '@mui/material/Typography';

const App = () => {
  return (
    <div>
      <MyToolbar />
      <div style={{ padding: 20 }}>
        <Typography variant="body1">
          Hello this is my Website!
        </Typography>
      </div>
    </div>
  );
};

export default App;