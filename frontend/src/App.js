import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MyToolbar from './components/MyToolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AboutMe from './pages/AboutMe';
import FactorioRampantPyanodon from './pages/FactorioRampantPyanodon';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <MyToolbar />
      <Box className="scroll-container" sx={{ pb: 4 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/about-me" replace />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/factorio-rampant-pyanodon" element={<FactorioRampantPyanodon />} />
        </Routes>
      </Box>
    </div>
  );
};

export default App;