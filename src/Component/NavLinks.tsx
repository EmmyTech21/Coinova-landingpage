import { Link } from "react-router-dom";
import logo from '../assets/1000441730-Kittl.svg';

export default function NavLinks() {
  return (
    <header className="bg-[#172A3A] h-38">
      <nav className="border-t-4 border-[#09BC8A] border-b-4 flex items-center justify-between px-8 pt-8">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-40 h-auto" />
        
        {/* Navigation Links */}
        <ul className="text-[#09BC8A] flex gap-6 text-2xl">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
