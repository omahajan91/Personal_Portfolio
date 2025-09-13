// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      {/* The MainLayout component wraps all the pages */}
      <Route path="/" element={<MainLayout />}>
        {/* The 'index' route is the default page for the parent path '/' */}
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;