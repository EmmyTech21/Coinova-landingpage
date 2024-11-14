import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavLinks from './Component/NavLinks';
import Hero from './Component/Hero';

function App() {
  return (
    <>
      <Routes>
        {/* Combined Route */}
        <Route path="/" element={
          <>
            <NavLinks />
            <Hero />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
