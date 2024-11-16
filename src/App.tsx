
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavLinks from './Component/NavLinks';
import Hero from './Component/Hero';
import PrivacyPolicy from './Component/Privacy-policy';
import Services from './Component/Services';
import NewsletterSection from './Component/NewsletterSection';
import ContactSection from './Component/ContactSection';

function App() {
  return (
    <>
      <NavLinks />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path='/service' element={<Services />} />
        <Route path='/form' element={<NewsletterSection />} />
        <Route path='/contact' element={<ContactSection/>} />
      </Routes>
    </>
  );
}

export default App;
