import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/api')) {
      window.location.href = location.pathname;
    }
  }, [location]);

  return (
    <Routes>
      {/* Define other routes */}
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} /> {/* Catch-all for undefined routes */}
    </Routes>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
