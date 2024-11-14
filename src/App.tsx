import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavLinks from './Component/NavLinks';
import Hero from './Component/Hero';
import PrivacyPolicy from './Component/Privacy-policy';
import Services from './Component/Services';

function App() {
  return (
    <>
      <NavLinks />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path='/service' element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
