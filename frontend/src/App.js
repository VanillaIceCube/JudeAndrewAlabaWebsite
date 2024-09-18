import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MyToolbar from './components/MyToolbar';
import AboutMe from './pages/AboutMe';
import FactorioRampantPyanodon from './pages/FactorioRampantPyanodon';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyToolbar />
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
