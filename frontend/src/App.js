import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyToolbar from './components/MyToolbar';
import CssBaseline from '@mui/material/CssBaseline';
import AboutMe from './pages/AboutMe';
import DataEngineeringProject from './pages/DataEngineeringProject';
import FactorioRampantPyanodon from './pages/FactorioRampantPyanodon';
import './App.css';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <MyToolbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/data-engineering-project" element={<DataEngineeringProject />} />
        <Route path="/factorio-rampant-pyanodon" element={<FactorioRampantPyanodon />} />
      </Routes>
    </div>
  );
};

export default App;