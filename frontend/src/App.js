import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Exclude /api routes */}
        <Route path="/api/*" element={<div />} />
        <Route path="/admin/*" element={<div />} />
        {/* Define other routes */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
