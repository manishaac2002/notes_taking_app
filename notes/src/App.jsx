import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/WritePage" element={<WritePage />} />
      {/* Add other routes here if needed */}
    </Routes>
  );
}

export default App;
