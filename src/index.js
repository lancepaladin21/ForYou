import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Letter from './Letter';
import Pictures from './Pictures';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/letter" element={<Letter />} />
      <Route path="/pictures" element={<Pictures />} />
    </Routes>
  </BrowserRouter>
);
