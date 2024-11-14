
import { Link } from 'react-router-dom';
import logo from '../assets/1000441730-Kittl.svg';

export default function NavLinks() {
  return (
    <header className="bg-[#172A3A] py-4">
      <nav className="flex items-center justify-between px-8">
        {/* Logo */}
        <img src={logo} alt="Coinova Logo" className="w-40 h-auto" />

        {/* Navigation Links */}
        <ul className="text-[#09BC8A] flex gap-6 text-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        </ul>
      </nav>
    </header>
  );
}
