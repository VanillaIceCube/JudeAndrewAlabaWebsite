import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // Optional but useful for global resets
import theme from './theme';
import MyTab from './components/MyTab';
import AboutMe from './pages/AboutMe';
import FactorioRampantPyanodon from './pages/FactorioRampantPyanodon';
import { Routes, Route, Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyTab />
      <Box sx={{ pb: 4 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/about-me" replace />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/factorio-rampant-pyanodon" element={<FactorioRampantPyanodon />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
